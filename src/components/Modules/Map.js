import React, { useEffect, useState } from 'react'
import { Module } from '../Layout'
import { Paragraph } from '../Typography'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from 'react-simple-maps'

const DEFAULT_ZOOM = 6

export const MapModule = props => {
    const [mapJson, setMapJson] = useState(null)
    const [zoom, setZoom] = useState(DEFAULT_ZOOM)

    useEffect(() => {
        const fetchMapJson = url => {
            fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem fetching map data: ${ response.status }`)
                    return
                }
                response.json()
                    .then(data => setMapJson(data))
            })
        }
        fetchMapJson('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    }, [])

    const handleZoomIn = () => setZoom(zoom * 1.05)
    const handleZoomReset = () => setZoom(DEFAULT_ZOOM)
    const handleZoomOut = () => setZoom(zoom / 1.05)

    return (
        <Module title="Anticipated FABRIC Topology">
            <ComposableMap style={{ width: '100%', border: '1px solid #f99' }}>
                <ZoomableGroup zoom={ zoom } center={ [-95.7129, 37.0902] }>
                    <Geographies geography={ mapJson }>
                        {
                            (geographies, projection) => geographies.map(geography => (
                                <Geography
                                    key={ geography.id }
                                    geography={ geography }
                                    projection={ projection }
                                    style={{
                                        default: {
                                            fill: 'var(--color-primary-light)',
                                            stroke: 'var(--color-primary)',
                                            strokeWidth: 0.25,
                                            outline: 'none',
                                            transition: 'fill 500ms'
                                        },
                                        hover: {
                                            fill: 'var(--color-primary)',
                                        },
                                        pressed: {
                                            fill: 'var(--color-primary-dark)',
                                            outline: '0',
                                        },
                                    }}

                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <Paragraph center>
                <button onClick={ handleZoomIn }>+</button>
                <button onClick={ handleZoomReset }>RESET</button>
                <button onClick={ handleZoomOut }>-</button>
            </Paragraph>
        </Module>
    )
}
