import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Subsubheading = styled.h4`
    font-family: var(--font-heading);
    color: var(--color-grey);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Subsubheading.propTypes = {
    children: PropTypes.node.isRequired,
}
