import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const ButtonLink = styled(Link)`
    background-color: #fff;
    ${ props => props.primary && `background-color: var(--color-primary);` }
    ${ props => props.secondary && `background-color: var(--color-secondary);` }
    color: var(--color-white) !important;
    border-radius: ${ props => props.round ? '3px' : 0 };
    outline: none;
    border: ${ props => props.border ? '1px solid #333 !important' : 0 };
    ${ props => props.primary && 'border-color: var(--color-primary-dark) !important;' }
    ${ props => props.secondary && 'border-color: var(--color-secondary-dark) !important;' }
    text-transform: uppercase;
    padding: 0.5rem;
    transition: all 250ms !important;
    font-size: 95%;
    &:hover {
        background-color: #ccc;
        ${ props => props.primary && 'background-color: var(--color-primary-dark);' }
        ${ props => props.secondary && 'background-color: var(--color-secondary-dark);' }
        color: var(--color-white) !important;
    }
    &:focus {
        background-color: var(--color-primary);
        color: #fff;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

ButtonLink.propTypes = {
    round: PropTypes.bool.isRequired,
    primary: PropTypes.bool.isRequired,
    secondary: PropTypes.bool.isRequired,
    border: PropTypes.bool.isRequired,
}

ButtonLink.defaultProps = {
    round: true,
    primary: false,
    secondary: false,
    border: true,
}
