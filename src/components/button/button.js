import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = styled.button`
    background-color: #fff;
    ${ props => props.primary ? `background-color: var(--color-primary);` : null }
    ${ props => props.secondary ? `background-color: var(--color-secondary);` : null }
    color: var(--color-white);
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: #333;
    ${ props => props.primary ? 'border-color: var(--color-primary-dark);' : null }
    ${ props => props.secondary ? 'border-color: var(--color-secondary-dark);' : null }
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    transition: all 250ms;
    &:hover {
        background-color: #ccc;
        ${ props => props.primary ? 'background-color: var(--color-primary-dark);' : null }
        ${ props => props.secondary ? 'background-color: var(--color-secondary-dark);' : null }
        color: var(--color-white) !important;
    }
    &:focus {
        background-color: #ccc;
        ${ props => props.primary ? 'background-color: var(--color-primary-dark);' : null }
        ${ props => props.secondary ? 'background-color: var(--color-secondary-dark);' : null }
        color: #fff;
        box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.2);
    }
`

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    border: PropTypes.bool,
}

Button.defaultProps = {
    primary: false,
    secondary: false,
    border: true,
}
