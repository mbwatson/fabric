import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Subtitle = styled.h3`
    font-family: var(--font-accent-thin);
    color: var(--color-dark);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
}