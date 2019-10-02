import React, { useEffect, useState } from 'react'
import { Module } from '../Layout'
import { Paragraph } from '../Typography'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies, Geography,
    Markers, Marker,
    Lines, Line,
} from 'react-simple-maps'

const DEFAULT_ZOOM = 6

const nodes = [
    { id: 'nyc', displayName: 'New York City', coordinates: [-74.0059, 40.7128] },
    { id: 'washington-dc', displayName: 'Washington, D.C.', coordinates: [-77.036873, 38.907192] },
    { id: 'chicago', displayName: 'Chicago', coordinates: [-87.629799, 41.878113] },
    { id: 'atlanta', displayName: 'Atlanta', coordinates: [-84.387985, 33.748997] },
    { id: 'houston', displayName: 'Houston', coordinates: [-95.369804, 29.760427] },
    { id: 'kansas', displayName: 'Kansas', coordinates: [-98.484245, 39.011902] },
    { id: 'salt-lake-city', displayName: 'Salt Lake City', coordinates: [-111.891045, 40.760780] },
    { id: 'seattle', displayName: 'Seattle', coordinates: [-122.332069, 47.606209] },
    { id: 'san-diego', displayName: 'San Diego', coordinates: [-117.161087, 32.715736] },
    { id: 'lbnl', displayName: 'LBNL', coordinates: [-122.253151, 37.875370] }, // LBNL
    { id: 'sdsc-prp-nrp', displayName: 'SDSC PRP/NRP', coordinates: [(-117.242249 + -122.258537)/2, (32.902672 + 37.871899)/2] }, // avg UCSD & UC Berkeley
    { id: 'cloudlab-powder', displayName: 'CloudLab POWDER', coordinates: [-111.842102, 40.764938] }, // Univ of Utah
    { id: 'tacc', displayName: 'TACC', coordinates: [-97.724937, 30.385441] }, // 10100 Burnet Rd, Austin, TX 78758
    { id: 'ncsa', displayName: 'NCSA', coordinates: [-88.220720, 40.115460] }, // 1205 W. Clark St., MC-257 Urbana, IL 61801
    { id: 'chameleon', displayName: 'Chameleon', coordinates: [-87.605232, 41.717659] }, // University of Chicago
    { id: 'psc', displayName: 'PSC', coordinates: [-79.949150, 40.445520] }, // 300 S. Craig Street, Pittsburgh, PA 15213
    { id: 'mghpcc', displayName: 'MGHPCC', coordinates: [-72.607875, 42.202493] }, // MGHPCC
    { id: 'cosmos', displayName: 'COSMOS', coordinates: [-74.447395, 40.500820] }, // Rutgers University
]

const blueNodeIds = ['nyc', 'washington-dc', 'chicago', 'atlanta', 'houston', 'kansas', 'salt-lake-city', 'seattle', 'san-diego']
const blueNodes = nodes.filter(({ id }) => blueNodeIds.includes(id))

const yellowNodeIds = ['washington-dc', 'chicago', 'houston', 'san-diego']
const yellowNodes = nodes.filter(({ id }) => yellowNodeIds.includes(id))

const orangeNodeIds = ['lbnl', 'sdsc-prp-nrp', 'cloudlab-powder', 'tacc', 'ncsa', 'chameleon', 'psc', 'mghpcc', 'cosmos']
const orangeNodes = nodes.filter(({ id }) => orangeNodeIds.includes(id))

const createLine = (sourceID, sinkID) => {
    const sourceNode = nodes.find(node => node.id === sourceID)
    const sinkNode = nodes.find(node => node.id === sinkID)
    return { start: sourceNode.coordinates, end: sinkNode.coordinates}
}

const blueLines = [
    createLine('seattle', 'salt-lake-city'),
    createLine('seattle', 'san-diego'),
    createLine('salt-lake-city', 'san-diego'),
    createLine('salt-lake-city', 'kansas'),
    createLine('san-diego', 'houston'),
    createLine('kansas', 'chicago'),
    createLine('kansas', 'houston'),
    createLine('houston', 'atlanta'),
    createLine('chicago', 'nyc'),
    createLine('chicago', 'washington-dc'),
    createLine('chicago', 'atlanta'),
    createLine('atlanta', 'washington-dc'),
    createLine('washington-dc', 'nyc'),
]

const yellowLines = [
    createLine('san-diego', 'houston'),
    createLine('houston', 'chicago'),
    createLine('chicago', 'washington-dc'),
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
        // fetchMapJson('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        fetchMapJson('https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/examples/albers-usa/static/states.json')
    }, [])

    const handleZoomIn = () => setZoom(zoom * 1.05)
    const handleZoomReset = () => setZoom(DEFAULT_ZOOM)
    const handleZoomOut = () => setZoom(zoom / 1.05)

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
                <ZoomableGroup zoom={ zoom } center={ [-95, 38] }>
                    <Geographies geography={ mapJson }>
                        {
                            (geographies, projection) => geographies.map((geography, i) => (
                                <Geography
                                    key={ i }
                                    geography={ geography }
                                    projection={ projection }
                                    style={{
                                        default: {
                                            stroke: 'var(--color-primary)',
                                            strokeWidth: zoom * 0.025,
                                            fill: 'var(--color-primary-light)',
                                            outline: 'none',
                                        },
                                        hover: {
                                            stroke: 'var(--color-primary)',
                                            strokeWidth: zoom * 0.025,
                                            fill: 'var(--color-primary-light)',
                                            outline: 'none',
                                        },
                                        pressed: {
                                            stroke: 'var(--color-primary)',
                                            strokeWidth: zoom * 0.025,
                                            fill: 'var(--color-primary-light)',
                                            outline: 'none',
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    <Lines>
                        {
                            yellowLines.map((line, i) => {
                                return (
                                    <Line preserveMarkerAspect={false}
                                        key={ i }
                                        line={{ coordinates: line }}
                                        style={{
                                            default: {
                                                stroke: '#ffde17' ,
                                                strokeWidth: 1.5,
                                            },
                                            hover:   { stroke: "#999" },
                                            pressed: { stroke: "#000" },
                                        }}
                                    />
                                )
                            })
                        }
                    </Lines>
                    <Lines>
                        {
                            blueLines.map((line, i) => {
                                return (
                                    <Line preserveMarkerAspect={false}
                                        key={ i }
                                        line={{ coordinates: line }}
                                        style={{
                                            default: {
                                                stroke: 'var(--color-primary-dark)' ,
                                                strokeWidth: 0.25,
                                            },
                                            hover: {
                                                stroke: 'var(--color-primary-dark)' ,
                                                strokeWidth: 0.25,
                                            },
                                            pressed: {
                                                stroke: 'var(--color-primary-dark)' ,
                                                strokeWidth: 0.25,
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
                                        },
                                    }}>
                                    <circle cx={ 0 } cy={ 0 } r={ 10 } />
                                    <text x="0" y="25" fill="#000" stroke="none" fontSize="10">{ marker.displayName }</text>
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
                                        },
                                    }}>
                                    <circle cx={ 0 } cy={ 0 } r={ 8 } />
                                    <text x="0" y="25" fill="#f00" stroke="none" fontSize="10">{ marker.displayName }</text>
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
                                        },
                                    }}>
                                    <circle cx={ 0 } cy={ 0 } r={ 6 } />
                                </Marker>
                            ))
                        }
                    </Markers>
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
