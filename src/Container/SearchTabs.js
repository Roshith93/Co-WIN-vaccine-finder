import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { a11yProps } from '../components/SearchTabs/AllYProp'
import { TabPanel } from '../components/SearchTabs/TabPanel'
import { SearchByPincode } from './SearchByPincode'
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

  return (
    <div className={classes.searchTabRoot}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Search By Pin' {...a11yProps(0)} />
          <Tab label='Search By District' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SearchByPincode />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Search by district
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
