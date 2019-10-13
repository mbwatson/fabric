import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

export const FadeOnMount = ({ children, duration = 250 }) => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: duration } })
    return (
        <animated.div style={ animation }>
            { children }
        </animated.div>
    )
}

FadeOnMount.propTypes = {
    children: PropTypes.node.isRequired,
    duration: PropTypes.number,
}

FadeOnMount.defaultProps = {
    duration: 250,
}
