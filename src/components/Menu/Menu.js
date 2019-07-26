import styled from 'styled-components'
import { Link } from 'gatsby'

const MOBILE_MIN_SIZE = 560

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
    width: 100%;
    &:hover {
        background-color: var(--color-black);
    }
    @media(min-width: ${ MOBILE_MIN_SIZE }px) {
        width: unset;
        &:hover {
            color: var(--color-black);
            background-color: transparent;
        }
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
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-primary);
    align-items: center;
    @media(min-width: ${ MOBILE_MIN_SIZE }px) {
        flex-direction: row;
    }
`
