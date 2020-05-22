import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: var(--color-black);
    padding: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--color-light);
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
    a, a:visited {
        transition: color 250ms, text-decoration-color 500ms;
        color: var(--color-grey);
        font-weight: normal;
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-color: var(--color-grey);
        transition: filter 250ms;
        filter: brightness(1.0);
    }
    a:hover, a:active {
        filter: brightness(1.5);
    }
`
