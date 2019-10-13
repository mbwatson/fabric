import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Rotator } from '../transformers'
import { ExpandDownIcon } from '../icons'
import { MenuItem } from './menu'

const Expander = styled.div`
    width: 100%;
    transition: max-height 500ms;
    max-height: ${ props => props.expanded ? `${ props.children.length * 50 }px` : 0 };
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 0.75rem;
    & > a {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }
`

Expander.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Sublist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

Sublist.propTypes = {
    children: PropTypes.node.isRequired,
}

const SubmenuToggler = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 0.5rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.75;
    transition: opacity 250ms, background-color 500ms;
    &:hover {
        opacity: 1.0;
        background-color: #66666622;
    }
    &:active {
        transition: opacity 250ms, background-color 100ms;
        background-color: #00000022;
    }
`

export const ExpandingSublist = ({ title, to, activeClassName, children }) => {
    const [open, setOpen] = useState(false)

    const handleExpand = event => {
        event.preventDefault()
        setOpen(!open)
    }

    return (
        <Sublist>
            <MenuItem to={ to } activeClassName={ activeClassName } style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                { title }
                <SubmenuToggler onClick={ handleExpand }>
                    <Rotator rotated={ open }>
                        <ExpandDownIcon />
                    </Rotator>
                </SubmenuToggler>
            </MenuItem>
            <Expander expanded={ open }>
                { children }
            </Expander> 
        </Sublist>
    )
}

ExpandingSublist.propTypes = {
    children: PropTypes.node.isRequired,
}

