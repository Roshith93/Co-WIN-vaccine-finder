import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { SearchButton } from '../components/SearchButton'
import { OptionalSection } from './OptionalSection'
import { CowinContext } from '../context/CowinContext'
import { useStyles } from '../utils/styles'
import { getFormattedDate } from '../utils/data'

const initialValues = {
  pincode: '',
}

const validationSchema = Yup.object({
  pincode: Yup.string()
    .required('Pincode is required')
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'Not a valid pincode'),
})

export const SearchByPincode = ({ calledBy }) => {
  const classes = useStyles()
  const {
    getVaccinesByPin,
    setSessions,
    setIsVaccineSlotsAvailable,
    setPincode,
  } = useContext(CowinContext)
  const onSubmit = async (values, actions) => {
    const { pincode } = values
    setPincode(pincode)
    let formattedDate = getFormattedDate(new Date())

    await getVaccinesByPin(pincode, formattedDate)
      .then((res) => {
        setSessions(res)
        actions.setSubmitting(false)
        setIsVaccineSlotsAvailable(true)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (
        <Form className={classes.form} noValidate>
          <Card className={classes.cardRoot} variant='outlined'>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete='pincode'
                    name='pincode'
                    variant='outlined'
                    required
                    fullWidth
                    id='Pincode'
                    label='Pincode'
                    autoFocus
                    type='number'
                    error={touched.pincode && Boolean(errors.pincode)}
                    helperText={touched.pincode && errors.pincode}
                    as={TextField}
                    minLength='6'
                    maxLength='6'
                  />
                </Grid>

                <OptionalSection />
              </Grid>
            </CardContent>
            <SearchButton isSubmitting={isSubmitting} calledBy='pincode' />
          </Card>
        </Form>
      )}
    </Formik>
  )
}
