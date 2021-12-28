import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import axios from 'axios'

axios.get('https://restcountries.com/#api-endpoints-all').then(response => {
  const countries = response.data
  ReactDOM.render(
    <App countries={countries} />,
    document.getElementById('root')
  )
})