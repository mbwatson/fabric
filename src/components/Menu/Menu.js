import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-light);
    border: 0;
    padding: 0.5rem 1.5rem;
    margin: 0;
    background-color: transparent;
    letter-spacing: 2px;
    position: relative;
    font-weight: 400;
    transition: color 500ms, background-color 250ms;
    &:hover {
        color: var(--color-white);
        background-color: var(--color-primary-dark);
    }
    &.active {
        color: var(--color-white);
        background-color: var(--color-primary-dark);
        &:hover {
            color: var(--color-white);
            background-color: var(--color-primary-dark);
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
