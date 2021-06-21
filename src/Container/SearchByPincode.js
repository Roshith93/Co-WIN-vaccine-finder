import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { getFormattedDate } from '../Utils/data'

const initialValues = {
  pincode: '',
}

const validationSchema = Yup.object({
  pincode: Yup.string()
    .required('Pincode is required').matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,'Not a valid pincode')

})

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export const SearchByPincode = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const onSubmit = (values, actions) => {
    let finalData = {
      ...values,
      date: new Date(),
    }
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
          <Card className={classes.root} variant='outlined'>
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
                    label='PinCode'
                    autoFocus
                    type='number'
                    error={touched.pincode && Boolean(errors.pincode)}
                    helperText={touched.pincode && errors.pincode}
                    as={TextField}
                    minlength='6'
                    maxlength="6"
                  />
                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='I want to receive inspiration, marketing promotions and updates via email.'
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                type='submit'
                style={{ margin: '5px' }}
                disabled={isSubmitting}
                variant='contained'
                color='primary'
                fullWidth
              >
                Search
              </Button>
            </CardActions>
          </Card>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}
