import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Paragraph = styled.div`
    text-align: inherit;
    margin-bottom: 1rem;
    font-weight: 300;
    ${ props => props.left && 'text-align: left;' }
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
}

