import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { a11yProps } from '../components/SearchTabs/AllYProp'
import { TabPanel } from '../components/SearchTabs/TabPanel'
import { SearchByPincode } from './SearchByPincode'
import { SearchByDistricts } from './SearchByDistricts'
import { useStyles } from '../utils/styles'

export default function FullWidthTabs() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }
  let tabContents = [<SearchByPincode />, <SearchByDistricts />]
  let tabTitles = ['Search By Pin', 'Search By District']
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
        onChangeIndex={handleChangeIndex}
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
