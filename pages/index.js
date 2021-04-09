import Head from 'next/head'
import { useEffect, useState } from 'react'
import { config } from './api/config'


import { GlobalStyle } from '../styles/global.css'

import { Container } from '../containers/container'
import WeatherCard from '../components/weatherCard';
import SearchField from '../components/searchField'

export default function Home() {

  const [zip, setZip] = useState('94954')
  const [weather, setWeather] = useState({})
  const [locName, setLocName] = useState('')


  useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${config.apiKey}`)
          const data = await result.json()

          setLocName(data.name)
          setWeather(data.main)
        } catch(e) {
          console.log(e)
        }
        
    }

    fetchData()
  }, [zip])

  const handleZip = (val) => {
    if (val.length === 5) setZip(val)
  }

  return (
    <Container>
    <GlobalStyle/>
      <Head>
        <title>Weather for {locName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchField></SearchField>

      <WeatherCard location={locName} weather={weather} />
    
    </Container>
  )
}

/*
<input
        type='text'
        defaultValue={zip}
        placeholder='5-Digit Zip Code' 
        onChange={e => handleZip(e.target.value)}
        />
*/