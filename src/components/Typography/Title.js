import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Title = styled.h2`
    font-family: mayeka;
    text-align: left;
    color: var(--color-black);
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
