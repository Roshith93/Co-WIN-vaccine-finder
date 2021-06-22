import React, {  useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'

import { Heading } from '../components/Heading'
import { CowinContext } from '../context/CowinContext'

export const OptionalSection = () => {
  const { dosageType, setDosageType, ageGroup, setAgeGroup } =
    useContext(CowinContext)

  const handleRadioChange = (event) => {
    setDosageType(event.target.value)
  }
  const handleCheckBoxChange = (event) => {
    setAgeGroup({ ...ageGroup, [event.target.name]: event.target.checked })
  }
  return (
    <>
      {' '}
      <Grid item xs={12}>
        <Heading title='Age Group' />
        <FormControlLabel
          control={
            <Checkbox
              name='age18'
              color='primary'
              checked={ageGroup.age18}
              onChange={handleCheckBoxChange}
            />
          }
          label='18-44'
        />
        <FormControlLabel
          control={
            <Checkbox
              name='age45'
              color='primary'
              checked={ageGroup.age45}
              onChange={handleCheckBoxChange}
            />
          }
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
              checked={dosageType === 'Dose1'}
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
              checked={dosageType === 'Dose2'}
            />
          }
          label='Dose 2'
          labelPlacement='end'
        />
      </Grid>
    </>
  )
}
