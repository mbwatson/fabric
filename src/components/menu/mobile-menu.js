import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { CloseIcon, ExpandDownIcon, HamburgerIcon } from '../icons'
import { Rotator } from '../anim'
import { MiniBrand } from '../../components/brand'

export const MobileMenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-primary);
    align-items: center;
    padding: 0;
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
    &:hover {
        background-color: #ffffff22;
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

// Menu items

export const MobileMenuItem = styled.div`
    // border: 1px solid #f99;
`

export const MobileMenuLink = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: flex-start;
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
    // background-color: var(--color-primary);
    &:hover {
        background-color: var(--color-primary-dark);
    }
    &.active {
        background-color: var(--color-primary-dark);
        &:hover {
            background-color: var(--color-primary-dark);
        }
    }
`

// Submenu items

export const MobileSubmenuHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-white);
    border: 0;
    padding: 0.5rem 1rem;
    margin: 0;
    letter-spacing: 2px;
    position: relative;
    cursor: pointer;
    font-weight: 400;
    transition: color 500ms, background-color 250ms;
    background-color: var(--color-primary);
    position: relative;
    &:hover {
        background-color: var(--color-primary-dark);
        & svg {
            fill: var(--color-light);
        }
    }
    &.active {
        background-color: var(--color-primary-dark);
        &:hover {
            color: var(--color-real-black);
            background-color: var(--color-primary-dark);
        }
    }
`

export const MobileSubmenu = styled.nav.attrs({ className: 'submenu' })`
    font-size: 80%;
    min-width: 100%;
    border: solid var(--color-primary-dark);
    border-width: 1px 0;
    background-color: var(--color-primary);
    transition: transform 150ms, opacity 250ms;
`

// Collapser

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

// Main component

export const MobileMenu = ({ children, showBrand, items }) => {
    const [expanded, setExpanded] = useState(false)
    const [activeSubmenus, setActiveSubmenus] = useState([])

    const handleToggleSubmenu = index => event => {
        let newActiveSubmenus = []
        if (activeSubmenus.includes(index)) {
            newActiveSubmenus = newActiveSubmenus.filter(i => i !== index)
        } else {
            newActiveSubmenus = activeSubmenus.concat([index])
        }
        setActiveSubmenus(newActiveSubmenus)
    }
    const closeAllSubmenus = () => setActiveSubmenus([])

    const handleToggleMenu = () => setExpanded(!expanded)
    const handleCloseMenu = () => {
        closeAllSubmenus()
        setExpanded(false)
    }

    return (
        <MobileMenuContainer>
            <MenuToggler onClick={ handleToggleMenu } active={ expanded }>
                <Link to="/" onClick={ e => e.stopPropagation() }><MiniBrand visible={ showBrand }>FABRIC</MiniBrand></Link>
                { expanded ? <CloseIcon size={ 24 } fill="var(--color-danger)" /> : <HamburgerIcon size={ 24 } fill="var(--color-black)" /> }
            </MenuToggler>
            <Collapse opened={ expanded }>
                {
                    items.map((item, currentIndex) => (
                        <MobileMenuItem key={ item.path } onClick={ item.submenu && handleToggleSubmenu(currentIndex) }>
                            {
                                item.submenu
                                ? (
                                    <Fragment>
                                        <MobileSubmenuHeader key={ item.path } to={ item.path } active={ activeSubmenus.includes(currentIndex) }>
                                            { item.text }
                                            <Rotator style={{ position: 'absolute', right: '1rem' }} rotated={ activeSubmenus.includes(currentIndex) }>
                                                <ExpandDownIcon size={ 24 } fill="var(--color-primary-dark)" />
                                            </Rotator>
                                        </MobileSubmenuHeader>
                                        <Collapse opened={ activeSubmenus.includes(currentIndex) }>
                                            <MobileSubmenu active={ activeSubmenus.includes(currentIndex) } onClick={ handleCloseMenu }>
                                                { item.submenu.map(subitem => <MobileMenuLink key={ subitem.path } to={ subitem.path } activeClassName="active" partiallyActive={ true }>- { subitem.text }</MobileMenuLink>) }
                                            </MobileSubmenu>
                                        </Collapse>
                                    </Fragment>
                                ) : (
                                    <MobileMenuLink onClick={ handleCloseMenu } key={ item.path } to={ item.path } activeClassName="active" partiallyActive={ true }>
                                        { item.text }
                                    </MobileMenuLink>
                                )
                            }
                        </MobileMenuItem>
                    ))
                }
            </Collapse>
        </MobileMenuContainer>
    )
}
