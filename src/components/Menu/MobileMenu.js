import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { CloseIcon, HamburgerIcon } from '../Icons'

const MiniBrand = styled.div`
    font-family: var(--font-heading);
    font-weight: normal;
    color: var(--color-light);
    font-size: 150%;
    letter-spacing: 5px;
    padding: 0 0 0 1rem;
    transition: ${ props => props.visible
        ? 'transform 750ms, opacity 2000ms'
        : 'transform 2000ms, opacity 750ms'
    };
    position: absolute;
    right: 100%;
    transform: translateX(${ props => props.visible ? '100%' : '0%' });
    opacity: ${ props => props.visible ? 1.0 : 0.0 };
`

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
    // position: relative;
    // &::after {
    //     content: "FABRIC";
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     bottom: 0;
    //     // width: 100px;
    //     margin: auto;
    //     padding: 0 0.5rem;
    //     display: block;
    //     background-color: transparent;
    //     font-size: 2.0rem;
    //     dispaly: flex;
    //     justify-content: center;
    //     align-items: center;
    //     line-height: 2.5rem;
    //     font-family: var(--font-heading);
    //     color: var(--color-light);
    //     font-weight: bold;
    // }
`

export const MobileMenuItem = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-white);
    border: 0;
    padding: 0.5rem 1rem;
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

export const MobileMenu = ({ children, expanded, menuToggleHandler, showBrand }) => {
    return (
        <MobileMenuContainer>
            <MenuToggler onClick={ menuToggleHandler } active={ expanded }>
                <MiniBrand visible={ showBrand }>FABRIC</MiniBrand>
                { expanded ? <CloseIcon /> : <HamburgerIcon /> }
            </MenuToggler>
            <Collapse opened={ expanded }>
                { children }
            </Collapse>
        </MobileMenuContainer>
    )
}

