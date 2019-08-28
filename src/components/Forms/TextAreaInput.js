import styled from 'styled-components'

export const TextareaInput = styled.textarea`
    width: 100%;
    resize: vertical;
    min-height: 100px;
    max-height: 300px;
    letter-spacing: 1px;
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
