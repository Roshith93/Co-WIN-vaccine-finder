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
// import { getFormattedDate } from "../utils/data";
import { useStyles } from '../utils/styles'

const initialValues = {
  state: '',
  district: '',
}

const validationSchema = Yup.object({
  state: Yup.string().required('Please select the state'),
  district: Yup.string().required('Please select the district'),
})
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]
export const SearchByDistricts = () => {
  const { states } = useContext(CowinContext)
  const classes = useStyles()
  const onSubmit = (values, actions) => {
    // let finalData = {
    //   ...values,
    //   date: getFormattedDate(new Date())
    // };
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
                    error={touched.district && Boolean(errors.district)}
                    helperText={touched.district && errors.district}
                    as={TextField}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>
                <OptionalSection />
              </Grid>
            </CardContent>
            <SearchButton isSubmitting={isSubmitting} />
          </Card>
        </Form>
      )}
    </Formik>
  )
}
