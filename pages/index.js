import Head from 'next/head'
import { useEffect, useState } from 'react'
import { config } from './api/config'


import { GlobalStyle } from '../styles/global.css'

import { Container } from '../containers/container'
import WeatherCard from '../components/weatherCard';
import SearchField from '../components/searchField'

export default function Home() {

  const [zip, setZip] = useState('94954')
  const [locName, setLocName] = useState('')
  const [rawJSON, setRawJSON] = useState({weather: ['']})

  useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${config.apiKey}`)
          const data = await result.json()

          setRawJSON(data)
          setLocName(data.name)
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
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"/> 
      </Head>

      <h1>{locName}</h1>

      <SearchField searchChange={e => handleZip(e.target.value)} />

      <WeatherCard rawData={rawJSON} />
    
    </Container>
  )
}
