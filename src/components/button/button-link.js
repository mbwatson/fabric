import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const ButtonLink = styled(({ primary, secondary, border, ...props}) => <Link { ...props } />)`
    background-color: #fff;
    ${ props => props.primary ? `background-color: var(--color-primary);` : undefined }
    ${ props => props.secondary ? `background-color: var(--color-secondary);` : undefined }
    color: var(--color-white) !important;
    border-radius: 3px;
    outline: none;
    text-decoration: none !important;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    transition: all 250ms !important;
    &:hover {
        background-color: #ccc;
        ${ props => props.primary ? 'background-color: var(--color-primary-dark);' : undefined }
        ${ props => props.secondary ? 'background-color: var(--color-secondary-dark);' : undefined }
        color: var(--color-white) !important;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
    &:focus {
        background-color: #ccc;
        ${ props => props.primary ? 'background-color: var(--color-primary-dark);' : undefined }
        ${ props => props.secondary ? 'background-color: var(--color-secondary-dark);' : undefined }
        color: var(--color-white) !important;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`


ButtonLink.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
}

ButtonLink.defaultProps = {
    primary: false,
    secondary: false,
}

