import React, { useEffect, useState } from 'react'
import { Module } from '../Layout'
import { Paragraph } from '../Typography'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from 'react-simple-maps'

const DEFAULT_ZOOM = 6

const blues = [
    { name: 'New York', coordinates: [-74.0059, 40.7128] },
    { name: 'Washington, D.C.', coordinates: [-77.036873, 38.907192] },
    { name: 'Chicago', coordinates: [-87.629799, 41.878113] },
    { name: 'Atlanta', coordinates: [-84.387985, 33.748997] },
    { name: 'Houston', coordinates: [-95.369804, 29.760427] },
    { name: 'Kansas', coordinates: [-98.484245, 39.011902] },
    { name: 'Salt Lake City', coordinates: [-111.891045, 40.760780] },
    { name: 'Seattle', coordinates: [-122.332069, 47.606209] },
    { name: 'San Diego', coordinates: [-117.161087, 32.715736] },
]

const yellows = [
    { name: 'Washington, D.C.', coordinates: [-77.036873, 38.907192] },
    { name: 'Chicago', coordinates: [-87.629799, 41.878113] },
    { name: 'Houston', coordinates: [-95.369804, 29.760427] },
    { name: 'San Diego', coordinates: [-117.161087, 32.715736] },
]

const oranges = [
    { name: 'LBNL', coordinates: [-122.253151, 37.875370] }, // LBNL
    { name: 'SDSC PRP/NRP', coordinates: [(-117.242249 + -122.258537)/2, (32.902672+37.871899)/2] }, // avg UCSD & UC Berkeley
    { name: 'CloudLab POWDER', coordinates: [-111.842102, 40.764938] }, // Univ of Utah
    { name: 'TACC', coordinates: [-97.724937, 30.385441] }, // 10100 Burnet Rd, Austin, TX 78758
    { name: 'NCSA', coordinates: [-88.220720, 40.115460] }, // 1205 W. Clark St., MC-257 Urbana, IL 61801
    { name: 'Chameleon', coordinates: [-87.605232, 41.717659] }, // University of Chicago
    { name: 'PSC', coordinates: [-79.949150, 40.445520] }, // 300 S. Craig Street, Pittsburgh, PA 15213
    { name: 'MGHPCC', coordinates: [-72.607875, 42.202493] }, // MGHPCC
    { name: 'COSMOS', coordinates: [-74.447395, 40.500820] }, // Rutgers University
]

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
                        <!-- CAUSES ISSUE -->
                        <Markers>
                            {
                                blues.map(marker => (
                                    <Marker
                                        key={ marker.name }
                                        marker={{ coordinates: marker.coordinates }}
                                        style={{
                                            default: { fill: '#666' },
                                            hover:   { fill: '#999' },
                                            pressed: { fill: '#000' },
                                        }}>
                                        <circle cx={ 0 } cy={ 0 } r={ 10 } />
                                    </Marker>
                                ))
                            }
                        </Markers>
                        <!-- CAUSES ISSUE -->
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
