import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

export const FadeOnMount = ({ children }) => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div style={ animation }>
            { children }
        </animated.div>
    )
}

FadeOnMount.propTypes = {
    children: PropTypes.node.isRequired,
}
