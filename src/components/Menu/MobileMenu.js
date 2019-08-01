import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { CloseIcon, HamburgerIcon } from '../Icons'

const MenuToggler = styled.button`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    outline: none;
    border: 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 250ms;
    background-color: transparent;
    & svg {
        transition: fill 1000ms;
        fill: ${ props => props.active ? 'var(--color-danger)' : 'var(--color-dark)' };
    }
    &:hover {
        background-color: #ffffff22;
        & svg {
            fill: ${ props => props.active ? 'red' : 'var(--color-black)' };
       }
    }
`

export const MobileMenuItem = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-white);
    border: 0;
    padding: 0.25rem 0.5rem;
    margin: 0;
    background-color: transparent;
    letter-spacing: 2px;
    position: relative;
    font-weight: 400;
    transition: color 500ms, background-color 250ms;
    &:hover {
        background-color: var(--color-black);
    }
    &.active {
        color: var(--color-real-black);
        &:hover {
            color: var(--color-real-black);
            background-color: transparent;
        }
    }
`

export const MobileMenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-primary);
    align-items: center;
    padding: 0;
`

const CollapseWrapper = styled.div`
    max-height: ${ props => props.open ? '500px' : 0 };
    transition: max-height 250ms;
    width: 100%;
    overflow: hidden;
`

const Collapse = ({ opened, children }) => {
    return (
        <CollapseWrapper open={ opened }>
            { children }
        </CollapseWrapper>
    )
}

export const MobileMenu = ({ children }) => {
    const [expanded, setExpanded] = useState(false)

    const handleToggleMenu = () => setExpanded(!expanded)
    
    return (
        <MobileMenuContainer>
            <MenuToggler onClick={ handleToggleMenu } active={ expanded }>
                { expanded ? <CloseIcon /> : <HamburgerIcon /> }
            </MenuToggler>
            <Collapse opened={ expanded }>
                { children }
            </Collapse>
        </MobileMenuContainer>
    )
}

