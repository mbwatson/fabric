import styled from 'styled-components'
import PropTypes from 'prop-types'



export const Button = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: ${ props => props.round ? '3px' : 0 };
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-primary);
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 250ms;
    &:hover {
        background-color: var(--color-primary-dark);
        color: #fff;
    }
    &:focus {
        background-color: var(--color-primary);
        color: #fff;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

Button.propTypes = {
    round: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    border: PropTypes.bool,
}

Button.defaultProps = {
    round: false,
    primary: false,
    secondary: false,
    border: true,
}
