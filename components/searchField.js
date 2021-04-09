import styled from 'styled-components'


const Text = styled.input`
    border-radius: 4px;
    background: white;
    border: none;
    height: 2rem;
    width: 300px;
    outline: none !important;
    padding: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
`

export default function SearchField(props) {
    return (
        <Text 
            placeholder="Search Zip"
        />
    )
}