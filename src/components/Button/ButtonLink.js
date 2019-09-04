import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button } from './Button'

export const ButtonLink = styled(Link)`
    color: var(--color-primary);
    border-radius: ${ props => props.round ? '3px' : 0 };
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-primary);
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 250ms;
    font-size: 95%;
    &:hover {
        background-color: var(--color-primary);
        color: var(--color-white) !important;
    }
    &:focus {
        background-color: var(--color-primary);
        color: #fff;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

Button.propTypes = {
    round: PropTypes.bool.isRequired,
    primary: PropTypes.bool.isRequired,
    secondary: PropTypes.bool.isRequired,
    border: PropTypes.bool.isRequired,
}

Button.defaultProps = {
    round: false,
    primary: false,
    secondary: false,
    border: true,
}
