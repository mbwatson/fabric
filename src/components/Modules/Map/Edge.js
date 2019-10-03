import React, { Fragment } from 'react'
import { Line } from 'react-simple-maps'

export const Edge = ({ edgeCoordinates, color, active, ...remainingProps }) => {
    const baseEdgeStyle = {
        strokeWidth: 0.5,
        outline: 'none',
        transition: 'stroke 500ms, opacity 500ms',
    }

    return (
        <Line { ...remainingProps }
            preserveMarkerAspect={false}
            line={{ coordinates: edgeCoordinates }}
            style={{
                default: { ...baseEdgeStyle, stroke: active ? 'red': color, opacity: 0.75, },
                hover: { ...baseEdgeStyle, stroke: active ? 'red': color, opacity: 1.0, },
                pressed: { ...baseEdgeStyle, stroke: active ? 'red': color, },
            }}
        />
    )
}
