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

export default function WeatherCard({ location, weather }) {
    return (
        <Container>
            {location}
        </Container>
    )
}