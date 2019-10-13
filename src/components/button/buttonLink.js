import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const ButtonLink = styled(Link)`
    background-color: #fff;
    ${ props => props.primary ? `background-color: var(--color-primary);` : null }
    ${ props => props.secondary ? `background-color: var(--color-secondary);` : null }
    color: var(--color-white) !important;
    border-radius: 3px;
    outline: none;
    border: ${ props => props.border ? '1px solid #333 !important' : 0 };
    ${ props => props.primary ? 'border-color: var(--color-primary-dark) !important;' : null }
    ${ props => props.secondary ? 'border-color: var(--color-secondary-dark) !important;' : null }
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    transition: all 250ms !important;
    &:hover {
        background-color: #ccc;
        ${ props => props.primary ? 'background-color: var(--color-primary-dark);' : null }
        ${ props => props.secondary ? 'background-color: var(--color-secondary-dark);' : null }
        color: var(--color-white) !important;
    }
    &:focus {
        background-color: var(<--color-primary-dark></--color-primary-dark>);
        color: #fff;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

ButtonLink.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    border: PropTypes.bool,
}

ButtonLink.defaultProps = {
    primary: false,
    secondary: false,
    border: true,
}
