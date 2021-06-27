var moment = require('moment')
export const getFormattedDate = (date) => {
  var year = date.getFullYear()

  var month = (1 + date.getMonth()).toString()
  month = month.length > 1 ? month : '0' + month

  var day = date.getDate().toString()
  day = day.length > 1 ? day : '0' + day

  return day + '-' + month + '-' + year
}

export const getDates = (startDate, daysToAdd = 7) => {
  var todayDate = moment()
  var aryDates = []
  for (var i = 0; i <= daysToAdd; i++) {
    let label = moment().add(i, 'days').format('MMM Do')
    let value
    if (i === 0) {
      label = 'Today'
      value = todayDate.format('DD-MM-YYYY')
    } else if (i === 1) {
      label = 'Tomorrow'
      value = todayDate.add(1, 'days').format('DD-MM-YYYY')
    } else {
      value = todayDate.add(1, 'days').format('DD-MM-YYYY')
    }
    let data = { label, value }
    aryDates.push(data)
  }
  return aryDates
}

export const tempData = {
  sessions: [
    {
      center_id: 560706,
      name: 'TIRATH RAM HOS Site 1',
      address: '2A R.B.L Isher Das Sawhney Marg, Rajpiu Road, Delhi 110054',
      state_name: 'Delhi',
      district_name: 'Central Delhi',
      block_name: 'Not Applicable',
      pincode: 110054,
      from: '09:00:00',
      to: '21:00:00',
      lat: 28,
      long: 77,
      fee_type: 'Paid',
      session_id: '11aa7958-f743-42f6-980a-2818d9445524',
      date: '20-06-2021',
      available_capacity: 0,
      available_capacity_dose1: 0,
      available_capacity_dose2: 0,
      fee: '0',
      min_age_limit: 45,
      vaccine: 'COVISHIELD',
      slots: [
        '09:00AM-12:00PM',
        '12:00PM-03:00PM',
        '03:00PM-06:00PM',
        '06:00PM-09:00PM',
      ],
    },
    {
      center_id: 734268,
      name: 'BLKMAX PP International School',
      address:
        'Metro Pillar Number 333 Lala Jagat Narayan Marg Block D Kashini Pitimpura',
      state_name: 'Delhi',
      district_name: 'Central Delhi',
      block_name: 'Not Applicable',
      pincode: 110005,
      from: '09:00:00',
      to: '16:00:00',
      lat: 28,
      long: 77,
      fee_type: 'Paid',
      session_id: 'ad338a14-50ef-4b7f-9eea-02396c4af1d3',
      date: '20-06-2021',
      available_capacity: 200,
      available_capacity_dose1: 100,
      available_capacity_dose2: 100,
      fee: '780',
      min_age_limit: 45,
      vaccine: 'COVISHIELD',
      slots: [
        '09:00AM-11:00AM',
        '11:00AM-01:00PM',
        '01:00PM-03:00PM',
        '03:00PM-04:00PM',
      ],
    },
  ],
}
export const arr = [
  {
    type: 'district',
    pincode: '110001',
    state: { id: '3', label: 'Arunachal Pradesh' },
    district: { id: '20', label: 'Changlang', state_id: '3' },
    filters: {
      age: [
        { id: 'age18', label: '18-44' },
        { id: 'age45', label: '45+' },
      ],
      dose_type: [{ id: 'dose1', label: 'Dose 1' }],
    },
  },
  {
    type: 'pincode',
    pincode: '110001',
    state: { id: '3', label: 'Arunachal Pradesh' },
    district: { id: '', label: '' },
    filters: {
      age: [
        { id: 'age18', label: '18-44' },
        { id: 'age45', label: '45+' },
      ],
      dose_type: [{ id: 'dose1', label: 'Dose 1' }],
    },
  },
]
