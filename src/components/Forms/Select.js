import styled from 'styled-components'

export const Select = styled.select`
    width: 100%;
    letter-spacing: 1px;
    background-color: #fff;
    color: var(--color-black);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-black);
    outline: 0;
    transition: box-shadow 500ms, border 250ms;
    &:focus {
        border: 1px solid var(--color-primary);
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

export const Option = styled.option`
    padding: 1rem;
    border: 1px solid var(--color-primary);
`
