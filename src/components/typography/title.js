import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Title = styled.h1`
    color: var(--color-dark);
    font-weight: bold;
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
