import { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { SearchButton } from '../components/SearchButton'
import { OptionalSection } from './OptionalSection'
import { CowinContext } from '../context/CowinContext'
import { useStyles } from '../utils/styles'
import { getFormattedDate } from '../utils/data'

const initialValues = {
  state: '',
  district: '',
}

const validationSchema = Yup.object({
  state: Yup.string().required('Please select the state'),
  district: Yup.string().required('Please select the district'),
})

export const SearchByDistricts = ({ calledBy }) => {
  const {
    states,
    setStateId,
    stateId,
    districts,
    districtId,
    setDistrictId,
    getVaccinesByDistricts,
    setSessions,
    setIsVaccineSlotsAvailable,
  } = useContext(CowinContext)
  const classes = useStyles()
  const onSubmit = async (values, actions) => {
    let formattedDate = getFormattedDate(new Date())
    await getVaccinesByDistricts(districtId, formattedDate)
      .then((res) => {
        setSessions(res)
        actions.setSubmitting(false)
        setIsVaccineSlotsAvailable(true)
      })
      .catch((err) => console.error(err))
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
                    autoComplete='state'
                    name='state'
                    variant='outlined'
                    required
                    fullWidth
                    select
                    label='State'
                    error={touched.state && Boolean(errors.state)}
                    helperText={touched.state && errors.state}
                    as={TextField}
                    onChange={(e) => {
                      handleChange(e)
                      setStateId(e.target.value)
                    }}
                  >
                    {states.map((option) => (
                      <MenuItem key={option.state_id} value={option.state_id}>
                        {option.state_name}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete='district'
                    name='district'
                    variant='outlined'
                    required
                    fullWidth
                    select
                    label='District'
                    onChange={(e) => {
                      handleChange(e)
                      setDistrictId(e.target.value)
                    }}
                    error={
                      touched.state &&
                      touched.district &&
                      Boolean(errors.district)
                    }
                    helperText={
                      touched.state && touched.district && errors.district
                    }
                    as={TextField}
                  >
                    {stateId ? (
                      districts.map((option) => (
                        <MenuItem
                          key={option.district_id}
                          value={option.district_id}
                        >
                          {option.district_name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem key='-1' disabled selected>
                        Select state first
                      </MenuItem>
                    )}
                  </Field>
                </Grid>
                <OptionalSection />
              </Grid>
            </CardContent>
            <SearchButton isSubmitting={isSubmitting} calledBy='district' />
          </Card>
        </Form>
      )}
    </Formik>
  )
}
