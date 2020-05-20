import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Heading = styled.h3`
    font-family: var(--font-heading);
    color: var(--color-grey);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
    ${ props => props.noMargin && 'margin: 0;' }
`

Heading.propTypes = {
    children: PropTypes.node.isRequired,
}
