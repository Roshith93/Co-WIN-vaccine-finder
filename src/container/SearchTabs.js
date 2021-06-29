import {  useContext, useEffect } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { a11yProps } from '../components/SearchTabs/AllYProp'
import { TabPanel } from '../components/SearchTabs/TabPanel'
import ChipFilter from '../components/ChipFilter'
import { SearchByPincode } from './SearchByPincode'
import { SearchByDistricts } from './SearchByDistricts'
import { VaccineSlots } from './VaccineSlots'
import { useStyles } from '../utils/styles'
import { CowinContext } from '../context/CowinContext'

export default function FullWidthTabs(props) {
  const {
    currentWeek,
    isVaccineSlotsAvailable,
    setFormattedDate,
    tabIndex,
    setTabIndex,
  } = useContext(CowinContext)
  const classes = useStyles()
  const theme = useTheme()
  useEffect(() => {
    setTabIndex(0)
  }, [isVaccineSlotsAvailable])
  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
    if (isVaccineSlotsAvailable) {
      setFormattedDate(currentWeek[newValue].value)
    }
    console.log('currentweek', currentWeek)
    console.log('tabchange', event.target.value, newValue)
    console.log('currentWeek', currentWeek[newValue].value)
  }

  let slots = []
  for (let i = 0; i <= currentWeek.length; i++) {
    slots.push(<VaccineSlots index={i} />)
  }
  console.log('slots', slots)
  let tabContents = isVaccineSlotsAvailable
    ? slots
    : [<SearchByPincode {...props} />, <SearchByDistricts {...props} />]
  let tabTitles = isVaccineSlotsAvailable
    ? currentWeek.map(({ label }) => label)
    : ['Search By Pin', 'Search By District']
  console.log('tabContentssss', tabContents)
  return (
    <div className={classes.searchTabRoot}>
      <ChipFilter/>
      <AppBar position='static' color='default'>
        <Tabs
          value={tabIndex}
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
        index={tabIndex}
      >
        {tabContents.map((el, idx) => {
          return (
            <TabPanel value={tabIndex} index={idx} dir={theme.direction}>
              {el}
            </TabPanel>
          )
        })}
      </SwipeableViews>
    </div>
  )
}
