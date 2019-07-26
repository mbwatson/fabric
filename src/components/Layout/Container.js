import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    height: 100%;
    max-width: ${ props => props.maxWidth }px;
    margin: 0 auto;
`
