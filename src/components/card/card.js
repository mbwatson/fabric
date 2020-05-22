import styled from 'styled-components'

export const CardHeader = styled.div`
    padding: 0.5rem 1rem;
    color: var(--color-white);
    font-weight: bold;
    background-color: var(--color-primary);
    text-align: left;
    ${ props => props.center ? 'text-align: center;' : undefined }
    ${ props => props.right ? 'text-align: right;' : undefined }
`

export const CardBody = styled.div`
    flex: 1;
    padding: 1rem;
    background-color: var(--color-white);
`

export const CardFooter = styled.div`
    padding: 1rem;
    color: var(--color-black);
    font-size: 80%;
    border-top: 1px solid var(--color-primary-light);
    background-color: var(--color-white);
    text-align: inherit;
    ${ props => props.left && 'text-align: left;' }
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

export const Card = styled.div`
    overflow: hidden;
    margin: 0 auto 1rem auto;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-primary);
    border-radius: 3px;
    filter: drop-shadow(0 0 3px #00000022);
`