import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    & > div {
        flex: 1;
    }
    & > div:first-child {
        margin-right: ${ props => props.compact ? 0 : '0.5rem' };;
    }
    & > div:last-child {
        margin-left: ${ props => props.compact ? 0 : '0.5rem' };;
    }
`
