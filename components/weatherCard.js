import { useEffect, useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    min-height: 500px;
    min-width: 400px;
    border: 1px solid rgb(0 0 0 / 0.2);
    border-radius: 10px;
    margin: 0rem;
    padding: 0 1rem 1rem 1rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
`

const round = (k) => parseFloat(k).toFixed(0)

export default function WeatherCard({ rawData }) {
    const [convert, setConvert] = useState(k => k => round(((k-273.15)*1.8)+32))
    const [scale, setScale] = useState("f")
    
    if (rawData.main === undefined) return (<Container>LOADING</Container>)

    let weatherDescription = rawData.weather[0].main
    const { temp_min, temp_max, temp, feels_like, humidity } = rawData.main

    return (
        <Container>
            <div className="temps">
                <div className="currentTemp">{convert(temp)}°{scale}</div>
                <div className="hilow">
                    H: {convert(temp_max)}°
                    <br/>
                    L: {convert(temp_min)}°
                </div>
            </div>
            <div className="description">
                {weatherDescription}
            </div>
            <div className="humidity">
                Humidity:<span className="lighten">&nbsp;{humidity}%</span>
                {' '}|{' '}
                Feels Like:
                <span className="lighten">{convert(feels_like)}°</span>
            </div>
        </Container>
    )
}