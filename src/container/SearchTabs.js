import { useState, useContext } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { a11yProps } from '../components/SearchTabs/AllYProp'
import { TabPanel } from '../components/SearchTabs/TabPanel'
import { SearchByPincode } from './SearchByPincode'
import { SearchByDistricts } from './SearchByDistricts'
import { VaccineSlots } from './VaccineSlots'
import { useStyles } from '../utils/styles'
import { CowinContext } from '../context/CowinContext'

export default function FullWidthTabs(props) {
  const { currentWeek, isVaccineSlotsAvailable } = useContext(CowinContext)
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    console.log('tabchange', event.target.value, newValue)
    setValue(newValue)
    console.log('currentWeek', currentWeek[newValue].value)
  }

  const handleChangeIndex = (index) => {
    alert("coming here")
    console.log('changeIndex', index)

    setValue(index)
  }
  let slots = []
  for (let i = 0; i <= currentWeek.length; i++) {
    slots.push(<VaccineSlots index={i} />)
  }
  console.log('slots', slots)
  let tabContents = isVaccineSlotsAvailable
    ? slots
    : [<SearchByPincode {...props} calledBy="pincode" />, <SearchByDistricts {...props} calledBy="district"/>]
  let tabTitles = isVaccineSlotsAvailable
    ? currentWeek.map(({ label }) => label)
    : ['Search By Pin', 'Search By District']
  console.log('tabContentssss', tabContents)
  return (
    <div className={classes.searchTabRoot}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          // variant="fullWidth"
          variant='scrollable'
          scrollButtons='auto'
          aria-label='full width tabs example'
        >
          {tabTitles.map((el, idx) => {
            return <Tab label={el} {...a11yProps(idx)} />
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        // onChangeIndex={handleChangeIndex}
      >
        {tabContents.map((el, idx) => {
          return (
            <TabPanel value={value} index={idx} dir={theme.direction}>
              {el}
            </TabPanel>
          )
        })}
      </SwipeableViews>
    </div>
  )
}
