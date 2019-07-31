import styled from 'styled-components'

export const Columns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const Column = styled.div`
    flex: ${ props => props.flex || '1 1 auto' };
    margin: 0.5rem;
`

