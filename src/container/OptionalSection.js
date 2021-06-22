import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'

import { Heading } from '../components/Heading'

export const OptionalSection = () => {
  const [selectedValue, setSelectedValue] = useState('Dose1')

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      {' '}
      <Grid item xs={12}>
        <Heading title='Age Group' />

        <FormControlLabel
          control={<Checkbox value='allowExtraEmails' color='primary' />}
          label='18-44'
        />
        <FormControlLabel
          // className={classes.radioButtonMargin}
          control={<Checkbox value='allowExtraEmails' color='primary' />}
          label='45 above'
        />
      </Grid>
      <Grid item xs={12}>
        <Heading title='Dose Type' />
        <FormControlLabel
          value='Dose1'
          control={
            <Radio
              color='primary'
              name='dosage'
              onChange={handleRadioChange}
              checked={selectedValue === 'Dose1'}
            />
          }
          label='Dose 1'
          labelPlacement='end'
        />
        <FormControlLabel
          value='Dose2'
          control={
            <Radio
              color='primary'
              name='dosage'
              onChange={handleRadioChange}
              checked={selectedValue === 'Dose2'}
            />
          }
          label='Dose 2'
          labelPlacement='end'
        />
      </Grid>
    </>
  )
}
