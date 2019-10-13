import React, { Fragment } from 'react'
import { Line } from 'react-simple-maps'

export const Edge = ({ edgeCoordinates, color, strokeWidth, active, ...remainingProps }) => {
    const baseEdgeStyle = {
        strokeWidth: strokeWidth,
        outline: 'none',
        transition: 'stroke 500ms, opacity 500ms',
    }

    return (
        <Line { ...remainingProps }
            preserveMarkerAspect={false}
            line={{ coordinates: edgeCoordinates }}
            style={{
                default: { ...baseEdgeStyle, stroke: active ? '#c00': color, opacity: 0.75, },
                hover: { ...baseEdgeStyle, stroke: active ? '#c00': color, opacity: 1.0, },
                pressed: { ...baseEdgeStyle, stroke: active ? '#c00': color, },
            }}
        />
    )
}
