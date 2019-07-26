import styled from 'styled-components'

export const Toggler = styled.button`
    outline: none;
    border: 0;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 250ms;
    background-color: var(--color-white);
    &:hover {
        background-color: var(--color-grey);
    }
`