import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-white);
    border: 0;
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem;
    background-color: transparent;
    letter-spacing: 2px;
    position: relative;
    font-weight: 400;
    transition: color 500ms, background-color 250ms;
    &:hover {
        color: var(--color-black);
        background-color: transparent;
    }
    &.active {
        color: var(--color-real-black);
        &:hover {
            color: var(--color-real-black);
            background-color: transparent;
        }
    }
`

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    min-width: 600px;
`
