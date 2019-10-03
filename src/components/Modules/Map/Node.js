import React, { Fragment } from 'react'
import { Marker } from 'react-simple-maps'

export const Node = ({ node, active = false, color = '#000000', size = 5, showLabel = true, ...remainingProps }) => {
    const baseNodeStyle = {
        stroke: 'var(--color-dark)',
        strokeWidth: 0.5,
        outline: 'none',
        cursor: 'pointer',
        transition: 'opacity 500ms, fill 500ms',
    }
    const baseTextStyle = {
        transition: 'stroke 500ms',
    }

    return (
        <Marker
            { ...remainingProps }
            marker={{ coordinates: node.coordinates }}
            style={{
                default: {
                    ...baseNodeStyle,
                    fill: active ? 'red' : color,
                    opacity: active ? 1.0 : 0.75,
                },
                hover: {
                    ...baseNodeStyle,
                    fill: active ? 'red' : color,
                    opacity: 1.0
                },
                pressed: {
                    ...baseNodeStyle,
                    fill: active ? 'red' : color,
                    opacity: 1.0
                },
            }}
        >
            <circle cx={ 0 } cy={ 0 } r={ size } />
            {
                showLabel && (
                    <Fragment>
                        <text
                            textAnchor="middle" x={ node.labelOffset.x } y={ node.labelOffset.y }
                            style={ baseTextStyle } fill={ color } fontWeight="bold" stroke={ active ? 'red' : color } strokeWidth="4" strokeLinejoin="round" fontSize="10" fontFamily="var(--font-heading)"
                        >
                            { node.displayName }
                        </text>
                        <text
                            textAnchor="middle" x={ node.labelOffset.x } y={ node.labelOffset.y }
                            fill="#fff" fontWeight="bold" stroke="none" fontSize="10" fontFamily="var(--font-heading)"
                        >
                            { node.displayName }
                        </text>
                    </Fragment>
                    )
            }
        </Marker>
    )
}
