import React, { useEffect, useState } from 'react'
import { Module } from '../Layout'
import { Paragraph } from '../Typography'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies, Geography,
    Markers, Marker,
    Lines, Line,
} from 'react-simple-maps'

const DEFAULT_ZOOM = 6
const DEFAULT_CENTER = [-95, 38]

const nodes = {
    'nyc': { displayName: 'New York City', coordinates: [-74.0059, 40.7128], markerOffset: 0 },
    'washington-dc': { displayName: 'Washington, D.C.', coordinates: [-77.036873, 38.907192], markerOffset: 0 },
    'chicago': { displayName: 'Chicago', coordinates: [-87.629799, 41.878113], markerOffset: 0 },
    'atlanta': { displayName: 'Atlanta', coordinates: [-84.387985, 33.748997], markerOffset: 0 },
    'houston': { displayName: 'Houston', coordinates: [-95.369804, 29.760427], markerOffset: 0 },
    'kansas': { displayName: 'Kansas', coordinates: [-98.484245, 39.011902], markerOffset: 0 },
    'salt-lake-city': { displayName: 'Salt Lake City', coordinates: [-111.891045, 40.760780], markerOffset: 0 },
    'seattle': { displayName: 'Seattle', coordinates: [-122.332069, 47.606209], markerOffset: 0 },
    'san-diego': { displayName: 'San Diego', coordinates: [-117.161087, 32.715736], markerOffset: 0 },
    'lbnl': { displayName: 'LBNL', coordinates: [-122.253151, 37.875370], markerOffset: 0 }, // LBNL
    'sdsc-prp-nrp': { displayName: 'SDSC PRP/NRP', coordinates: [(-117.242249 + -122.258537)/2, (32.902672 + 37.871899)/2], markerOffset: 0 }, // avg UCSD & UC Berkeley
    'cloudlab-powder': { displayName: 'CloudLab POWDER', coordinates: [-111.842102, 40.764938], markerOffset: 0 }, // Univ of Utah
    'tacc': { displayName: 'TACC', coordinates: [-97.724937, 30.385441], markerOffset: 0 }, // 10100 Burnet Rd, Austin, TX 78758
    'ncsa': { displayName: 'NCSA', coordinates: [-88.220720, 40.115460], markerOffset: 0 }, // 1205 W. Clark St., MC-257 Urbana, IL 61801
    'chameleon': { displayName: 'Chameleon', coordinates: [-87.605232, 41.717659], markerOffset: 0 }, // University of Chicago
    'psc': { displayName: 'PSC', coordinates: [-79.949150, 40.445520], markerOffset: 0 }, // 300 S. Craig Street, Pittsburgh, PA 15213
    'mghpcc': { displayName: 'MGHPCC', coordinates: [-72.607875, 42.202493], markerOffset: 0 }, // MGHPCC
    'cosmos': { displayName: 'COSMOS', coordinates: [-74.447395, 40.500820], markerOffset: 0 }, // Rutgers University
}

const blueNodeIds = ['nyc', 'washington-dc', 'chicago', 'atlanta', 'houston', 'kansas', 'salt-lake-city', 'seattle', 'san-diego']
const blueNodes = blueNodeIds.map(id => nodes[id])

const yellowNodeIds = ['washington-dc', 'chicago', 'houston', 'san-diego']
const yellowNodes = yellowNodeIds.map(id => nodes[id])

const orangeNodeIds = ['lbnl', 'sdsc-prp-nrp', 'cloudlab-powder', 'tacc', 'ncsa', 'chameleon', 'psc', 'mghpcc', 'cosmos']
const orangeNodes = orangeNodeIds.map(id => nodes[id])

const createEdge = (sourceID, sinkID) => ({ start: nodes[sourceID].coordinates, end: nodes[sinkID].coordinates })

const blueEdges = [
    createEdge('seattle', 'salt-lake-city'),
    createEdge('seattle', 'san-diego'),
    createEdge('salt-lake-city', 'san-diego'),
    createEdge('salt-lake-city', 'kansas'),
    createEdge('san-diego', 'houston'),
    createEdge('kansas', 'chicago'),
    createEdge('kansas', 'houston'),
    createEdge('houston', 'atlanta'),
    createEdge('chicago', 'nyc'),
    createEdge('chicago', 'washington-dc'),
    createEdge('chicago', 'atlanta'),
    createEdge('atlanta', 'washington-dc'),
    createEdge('washington-dc', 'nyc'),
]

const yellowEdges = [
    createEdge('san-diego', 'houston'),
    createEdge('houston', 'chicago'),
    createEdge('chicago', 'washington-dc'),
]

export const MapModule = props => {
    const [mapJson, setMapJson] = useState(null)
    const [zoom, setZoom] = useState(DEFAULT_ZOOM)
    const [center, setCenter] = useState(DEFAULT_CENTER)
    const [blueEdgeVisibility, setBlueEdgeVisibility] = useState(true)
    const [yellowEdgeVisibility, setYellowEdgeVisibility] = useState(true)

    useEffect(() => {
        const fetchMapJson = url => {
            fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem fetching map data: ${ response.status }`)
                    return
                }
                response.json().then(data => setMapJson(data))
            })
        }
        // fetchMapJson('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        fetchMapJson('https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/examples/albers-usa/static/states.json')
    }, [])

    const handleZoomIn = () => setZoom(zoom * 1.05)
    const handleZoomReset = () => {
        setZoom(DEFAULT_ZOOM)
        setCenter(DEFAULT_CENTER)
    }
    const handleZoomOut = () => setZoom(zoom / 1.05)
    const handlePanStart = currentCenter => setCenter(currentCenter)
    const handlePanEnd = currentCenter => setCenter(currentCenter)
    const handleToggleBlueEdges = () => setBlueEdgeVisibility(!blueEdgeVisibility)
    const handleToggleYellowEdges = () => setYellowEdgeVisibility(!yellowEdgeVisibility)

    return mapJson && (
        <Module title="Anticipated FABRIC Topology">
            <ComposableMap
                style={{
                    width: "100%",
                    height: "auto",
                    border: '1px solid var(--color-primary-light)',
                    borderRadius: '0.25rem',
                }}
            >
                <ZoomableGroup
                    zoom={ zoom }
                    center={ center }
                    onMoveStart={ handlePanStart }
                    onMoveEnd={ handlePanEnd }
                >
                    <Geographies geography={ mapJson }>
                        {
                            (geographies, projection) => {
                                const geographyStyle = {
                                    stroke: 'var(--color-primary)',
                                    strokeWidth: zoom * 0.025,
                                    fill: 'var(--color-primary-light)',
                                    outline: 'none',
                                }
                                return geographies.map((geography, i) => (
                                    <Geography
                                        key={ i }
                                        geography={ geography }
                                        projection={ projection }
                                        style={{ default: geographyStyle, hover: geographyStyle, pressed: geographyStyle, }}
                                    />
                                ))
                            }
                        }
                    </Geographies>
                    <Lines>
                        {
                            yellowEdgeVisibility && yellowEdges.map((line, i) => {
                                const lineStyle = {
                                    stroke: '#ffde17',
                                    strokeWidth: 1.5,
                                    outline: 'none',
                                }
                                return (
                                    <Line
                                        key={ i }
                                        preserveMarkerAspect={false}
                                        onMouseOver={ () => console.log('click') }
                                        line={{ coordinates: line }}
                                        style={{
                                            default: {
                                                ...lineStyle,
                                                transition: 'opacity 500ms',
                                                opacity: 0.5,
                                            },
                                            hover: {
                                                ...lineStyle,
                                                opacity: 1.0,
                                            },
                                            pressed: { ...lineStyle, },
                                        }}
                                    />
                                )
                            })
                        }
                    </Lines>
                    <Lines>
                        {
                            blueEdgeVisibility && blueEdges.map((line, i) => {
                                const lineStyle = {
                                    stroke: 'var(--color-primary-dark)' ,
                                    strokeWidth: 0.5,
                                    outline: 'none',
                                }
                                return (
                                    <Line preserveMarkerAspect={false}
                                        key={ i }
                                        line={{ coordinates: line }}
                                        style={{
                                            default: {
                                                ...lineStyle,
                                                transition: 'opacity 500ms',
                                                opacity: 0.75,
                                            },
                                            hover: {
                                                ...lineStyle,
                                                opacity: 1.0,
                                            },
                                            pressed: {
                                                ...lineStyle,
                                            },
                                        }}
                                    />
                                )
                            })
                        }
                    </Lines>
                    <Markers>
                        {
                            yellowNodes.map(marker => (
                                <Marker
                                    key={ marker.name }
                                    marker={{ coordinates: marker.coordinates }}
                                    style={{
                                        default: {
                                            fill: '#ffde17',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                        hover: {
                                            fill: '#ffde17',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: '#ffde17',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                    }}>
                                    <circle cx={ 0 } cy={ 0 } r={ 10 } />
                                    <text x="4" y="20" fill="#000" stroke="none" fontSize="10">{ marker.displayName }</text>
                                </Marker>
                            ))
                        }
                    </Markers>
                    <Markers>
                        {
                            blueNodes.map(marker => (
                                <Marker
                                    key={ marker.name }
                                    marker={{ coordinates: marker.coordinates }}
                                    style={{
                                        default: {
                                            fill: 'var(--color-primary)',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                        hover: {
                                            fill: 'var(--color-primary)',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: 'var(--color-primary)',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                    }}>
                                    <circle cx={ 0 } cy={ 0 } r={ 6 } />
                                    <text x="4" y="20" fill="#000" stroke="none" fontSize="10">{ marker.displayName }</text>
                                </Marker>
                            ))
                        }
                    </Markers>
                    <Markers>
                        {
                            orangeNodes.map(marker => (
                                <Marker
                                    key={ marker.name }
                                    marker={{ coordinates: marker.coordinates }}
                                    style={{
                                        default: {
                                            fill: 'var(--color-secondary)',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                        hover: {
                                            fill: 'var(--color-secondary)',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: 'var(--color-secondary)',
                                            stroke: 'var(--color-dark)',
                                            outline: 'none',
                                        },
                                    }}>
                                    <circle cx={ 0 } cy={ 0 } r={ 5 } />
                                </Marker>
                            ))
                        }
                    </Markers>
                </ZoomableGroup>
            </ComposableMap>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Paragraph center>
                    <button onClick={ handleZoomOut }>-</button>
                    <button onClick={ handleZoomReset }>RESET</button>
                    <button onClick={ handleZoomIn }>+</button>
                </Paragraph>
                <Paragraph center>
                    <button onClick={ handleToggleBlueEdges } style={{ backgroundColor: blueEdgeVisibility ? 'var(--color-primary)' : 'var(--color-primary-light)' }}>100G Core - Dedicated DWDM</button>
                    <button onClick={ handleToggleYellowEdges } style={{ backgroundColor: yellowEdgeVisibility ? 'var(--color-primary)' : 'var(--color-primary-light)' }}>Terabit Super-Core</button>
                </Paragraph>
            </div>
        </Module>
    )
}
