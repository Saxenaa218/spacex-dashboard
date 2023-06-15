import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Select, Button } from 'antd'
import moment from 'moment'

import { BASE_URL, LAUNCH_TYPES, PICKER_ARR, DATE_OPTIONS } from './constants'
import TableView from './components/TableView'
import Spinner from './components/Spinner/Spinner'

import Logo from './static/media/logo.png'
import './App.scss';

const {Option} = Select

const selectStyles = {width: '200px'};

const App = () => {

  const [data, setData] = useState([])
  const [alternateData, setAlternateData] = useState([])
  const [loading, setLoading] = useState(false)
  const [dateFilter, setDateFilter] = useState(PICKER_ARR[0])
  const [statusFilter, setStatusFilter] = useState(LAUNCH_TYPES[0].key)

  useEffect(() => {
    setLoading(true)
    getLaunches();
  }, [])

  async function getLaunches() {
    try {
      const response = await axios.get(BASE_URL);
      if (response && response.data) {
        setData(response.data)
        setAlternateData(response.data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  function computeData(launchFilter, dateFilter) {
      const filteredWithLaunchStatus = filterWithLaunchStatus(launchFilter, data)
      const result = filterWithDate(dateFilter, filteredWithLaunchStatus)
      setAlternateData(result)
  }

  function handleResetFilters() {
    setDateFilter(PICKER_ARR[0])
    setStatusFilter(LAUNCH_TYPES[0].key)
    setAlternateData(data)
    computeData(LAUNCH_TYPES[0].key, PICKER_ARR[0])
  }

  const handleLaunchesChange = val => {
    setStatusFilter(val)
    computeData(val, dateFilter)
  }

  const filterWithDate = (dateString, data) => {
    if (DATE_OPTIONS.hasOwnProperty(dateString)) {
      const { unit, value } = DATE_OPTIONS[dateString];
      const startDate = moment().subtract(value, unit).startOf(unit).format();
      const endDate = moment().subtract(1, 'years').endOf('year').format();
      return data.filter(item => startDate <= item.launch_date_utc && item.launch_date_utc <= endDate)
    } 
    return data;
  }

  const handleDateChange = (dateString) => {
    // setAlternateData(filterWithDate(dateString));
    setDateFilter(dateString);
    computeData(statusFilter, dateString);
  };  
  
  const filterWithLaunchStatus = (type, data) => {
    const filterTypes = {
      success: (data) => data.filter(item => item.launch_success && !item.upcoming),
      failed: (data) => data.filter(item => !item.launch_success && !item.upcoming),
      upcoming: (data) => data.filter(item => item.upcoming),
      all: (data) => data,
    };
  
    const filterFunction = filterTypes[type] || filterTypes.all;
    return filterFunction(data);
  };  

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="" height='65px' />
      </header>
      <section className="nav-space">
        <div className="filter-panel">
          <Select onChange={(val) => handleDateChange(val)} value={dateFilter} style={selectStyles}>
            {PICKER_ARR.map(eachItem => <Option key={eachItem} value={eachItem}>{eachItem}</Option>)}
          </Select>
          <section className='meta-info'>
            <b>{alternateData.length}</b>
            <span>launches found</span>
            <Button size="small" type="primary" onClick={handleResetFilters}>reset filters</Button>
          </section>
          <Select onChange={handleLaunchesChange} value={statusFilter} style={selectStyles}>
            {LAUNCH_TYPES.map(eachType => <Option key={eachType.key} value={eachType.key}>{eachType.title}</Option>)}
          </Select>
        </div>
      </section>
      <section className='table-parent'>
        {loading ? <Spinner/> : <TableView data={alternateData} />}
      </section>
    </div>
  )
}

export default App