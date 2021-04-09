import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 400px;
    min-width: 400px;
    font-size: 12px;
    border: 1px solid rgb(0 0 0 / 0.2);
    border-radius: 10px;
    margin: 1rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    
`



const round = (k) => parseFloat(k).toFixed(0)

export default function WeatherCard({ rawData }) {
    const [convForm, setConvForm] = useState(k => k => round(((k-273.15)*1.8)+32))
    const [scale, setScale] = useState("f")
    
    if (rawData.main === undefined) return (<Container>LOADING</Container>)

    let weatherDescription = rawData.weather[0].main
    const { temp_min, temp_max, temp, feels_like, humidity } = rawData.main

    return (
        <Container>
            <h2>{convForm(temp)}°{scale}</h2>
            <h3>Feels Like: {convForm(feels_like)}°</h3>
            <p>High: {convForm(temp_max)}°</p>
            <p>Low: {convForm(temp_min)}°</p>
            <p>&nbsp;</p>
            <p>{weatherDescription}</p>
        </Container>
    )
}