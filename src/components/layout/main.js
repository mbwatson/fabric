import styled from 'styled-components'

export const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    background-color: transparent;
    position: relative;
    transition: transform 500ms;
    a, a:visited {
        transition: color 250ms, border-color 250ms;
        color: var(--color-primary);
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-color: var(--color-primary);
    }
    a:hover, a:active {
        color: var(--color-primary-dark);
        text-decoration-color: var(--color-primary-dark);
    }
`