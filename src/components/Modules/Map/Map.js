import React, { Fragment, useEffect, useState } from 'react'
import { Module } from '../../Layout'
import { Paragraph } from '../../Typography'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies, Geography,
    Markers,
    Lines,
} from 'react-simple-maps'
import { Node } from './Node'
import { Edge } from './Edge'
import mapJson from '../../../data/us-geo.json'

const DEFAULT_ZOOM = 6
const DEFAULT_CENTER = [-95, 38]

/*
Nodes
*/

const nodes = {
    'nyc': { displayName: 'New York City', coordinates: [-74.0059, 40.7128], labelOffset: { x: 45, y: 5 } },
    'washington-dc': { displayName: 'Washington, D.C.', coordinates: [-77.036873, 38.907192], labelOffset: { x: 55, y: 5 } },
    'chicago': { displayName: 'Chicago', coordinates: [-87.629799, 41.878113], labelOffset: { x: 0, y: -15 } },
    'atlanta': { displayName: 'Atlanta', coordinates: [-84.387985, 33.748997], labelOffset: { x: 20, y: 15 } },
    'houston': { displayName: 'Houston', coordinates: [-95.369804, 29.760427], labelOffset: { x: 25, y: 20 } },
    'kansas': { displayName: 'Kansas', coordinates: [-98.484245, 39.011902], labelOffset: { x: 0, y: -15 } },
    'salt-lake-city': { displayName: 'Salt Lake City', coordinates: [-111.891045, 40.760780], labelOffset: { x: 25, y: -15 } },
    'seattle': { displayName: 'Seattle', coordinates: [-122.332069, 47.606209], labelOffset: { x: -25, y: -10 } },
    'san-diego': { displayName: 'San Diego', coordinates: [-117.161087, 32.715736], labelOffset: { x: -40, y: 0 } },
    'lbnl': { displayName: 'LBNL', coordinates: [-122.253151, 37.875370], labelOffset: { x: 0, y: -15 } }, // LBNL
    'sdsc-prp-nrp': { displayName: 'SDSC PRP/NRP', coordinates: [(-117.242249 + -122.258537)/2, (32.902672 + 37.871899)/2], labelOffset: { x: 0, y: -15 } }, // avg UCSD & UC Berkeley
    'cloudlab-powder': { displayName: 'CloudLab POWDER', coordinates: [-111.842102, 40.764938], labelOffset: { x: -25, y: 20 } }, // Univ of Utah
    'tacc': { displayName: 'TACC', coordinates: [-97.724937, 30.385441], labelOffset: { x: 0, y: -15 } }, // 10100 Burnet Rd, Austin, TX 78758
    'ncsa': { displayName: 'NCSA', coordinates: [-88.220720, 40.115460], labelOffset: { x: -25, y: 5 } }, // 1205 W. Clark St., MC-257 Urbana, IL 61801
    'chameleon': { displayName: 'Chameleon', coordinates: [-87.605232, 41.717659], labelOffset: { x: 40, y: -5 } }, // University of Chicago
    'psc': { displayName: 'PSC', coordinates: [-79.949150, 40.445520], labelOffset: { x: 20, y: 5 } }, // 300 S. Craig Street, Pittsburgh, PA 15213
    'mghpcc': { displayName: 'MGHPCC', coordinates: [-72.607875, 42.202493], labelOffset: { x: 20, y: -10 } }, // MGHPCC
    'cosmos': { displayName: 'COSMOS', coordinates: [-74.447395, 40.500820], labelOffset: { x: 20, y: 15 } }, // Rutgers University
}

const blueNodeIds = ['nyc', 'washington-dc', 'chicago', 'atlanta', 'houston', 'kansas', 'salt-lake-city', 'seattle', 'san-diego']
const yellowNodeIds = ['washington-dc', 'chicago', 'houston', 'san-diego']
const orangeNodeIds = ['lbnl', 'sdsc-prp-nrp', 'cloudlab-powder', 'tacc', 'ncsa', 'chameleon', 'psc', 'mghpcc', 'cosmos']

/*
Edges: [[ node id, node id], ...]
*/

const blueEdges = [
    ['seattle', 'salt-lake-city'],
    ['seattle', 'san-diego'],
    ['salt-lake-city', 'san-diego'],
    ['salt-lake-city', 'kansas'],
    ['san-diego', 'houston'],
    ['kansas', 'chicago'],
    ['kansas', 'houston'],
    ['houston', 'atlanta'],
    ['chicago', 'nyc'],
    ['chicago', 'washington-dc'],
    ['chicago', 'atlanta'],
    ['atlanta', 'washington-dc'],
    ['washington-dc', 'nyc'],
]

const yellowEdges = [
    ['san-diego', 'houston'],
    ['houston', 'chicago'],
    ['chicago', 'washington-dc'],
]

/*
Get a given node (by id)'s neighborhood--incident edges and nodes 
*/

const getIncidentEdges = id => {
    return blueEdges.filter(edge => edge.includes(id))
}

const getNeighbors = id => {
    const incidentEdges = getIncidentEdges(id)
    const neighbors = [...new Set(incidentEdges.flat())]
    return neighbors
}

/*
Node
In:
    nodeId,
    active: boolean indicating specific styling for active node
    color: fill color
    size: node radius
    showLabel: boolean indicating whether to show node.displayName in text label
Out:
    Line component ready for rendering with react-simple-maps
*/


/*
Edge
In: edgeIds = [sourceNodeId, sinkNodeId]
Out: Line component ready for rendering with react-simple-maps
*/


export const MapModule = props => {
    // const [mapJson, setMapJson] = useState(null)
    const [zoom, setZoom] = useState(DEFAULT_ZOOM)
    const [center, setCenter] = useState(DEFAULT_CENTER)
    const [blueEdgeVisibility, setBlueEdgeVisibility] = useState(true)
    const [yellowEdgeVisibility, setYellowEdgeVisibility] = useState(true)
    const [activeNodes, setActiveNodes] = useState([])
    const [activeEdges, setActiveEdges] = useState([])
    
    // useEffect(() => {
    //     const fetchMapJson = url => {
    //         fetch(url)
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 console.log(`There was a problem fetching map data: ${ response.status }`)
    //                 return
    //             }
    //             response.json().then(data => setMapJson(data))
    //         })
    //     }
    //     // fetchMapJson('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    //     fetchMapJson('https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/examples/albers-usa/static/states.json')
    // }, [])

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
    const handleToggleNode = id => {
        setActiveNodes(getNeighbors(id))
        setActiveEdges(getIncidentEdges(id))
    }
    const emptyActiveNodes = () => {
        setActiveNodes([])
        setActiveEdges([])
    }

    const isActiveNode = id => activeNodes && activeNodes.includes(id)
    const isActiveEdge = edge => activeEdges && (activeEdges.includes(edge) || activeEdges.includes([edge[1], edge[0]]))

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
                                    strokeOpacity: 1.0,
                                    strokeWidth: zoom * 0.01,
                                    fill: 'var(--color-primary)',
                                    outline: 'none',
                                    transition: 'fill-opacity 100ms',
                                }
                                return geographies.map((geography, i) => (
                                    <Geography
                                        key={ i }
                                        geography={ geography }
                                        projection={ projection }
                                        style={{ default: { ...geographyStyle, fillOpacity: 0.33 }, hover: { ...geographyStyle, fillOpacity: 0.4 }, pressed: { ...geographyStyle, fillOpacity: 1.0 }, }}
                                    />
                                ))
                            }
                        }
                    </Geographies>
                    <Lines>
                        {
                            yellowEdgeVisibility && yellowEdges.map((edge, i) => (
                                <Edge
                                    key={ `blue-${ i }` } color="#22cc22" strokeWidth={ 1.5 } active={ isActiveEdge(edge) }
                                    edgeCoordinates={{ start: nodes[edge[0]].coordinates, end: nodes[edge[1]].coordinates }}
                                />
                            ))
                        }
                    </Lines>
                    <Lines>
                        {
                            blueEdgeVisibility && blueEdges.map((edge, i) => (
                                <Edge
                                    key={ `blue-${ i }` } color="var(--color-primary-dark)" strokeWidth={ 0.5 } active={ isActiveEdge(edge) }
                                    edgeCoordinates={{ start: nodes[edge[0]].coordinates, end: nodes[edge[1]].coordinates }}
                                />
                            ))
                        }
                    </Lines>
                    <Markers>
                        {
                            yellowNodeIds.map((id, i) => (
                                <Node
                                    key={ `yellow-${ i }` } node={ nodes[id] }
                                    size={ 10 } color="#22cc22" showLabel={ false } active={ isActiveNode(id) } 
                                    onMouseEnter={ () => handleToggleNode(id) }
                                    onMouseLeave={ emptyActiveNodes }
                                />
                            ))
                        }
                    </Markers>
                    <Markers>
                        {
                            blueNodeIds.map((id, i) => (
                                <Node
                                    key={ `blue-${ i }` } node={ nodes[id] }
                                    size={ 6 } color="var(--color-primary)" showLabel={ true } active={ isActiveNode(id) } 
                                    onMouseEnter={ () => handleToggleNode(id) }
                                    onMouseLeave={ emptyActiveNodes }
                                 />
                             ))
                        }
                    </Markers>
                    <Markers>
                        {
                            orangeNodeIds.map((id, i) => (
                                <Node
                                    key={ `orange-${ i }` } node={ nodes[id] }
                                    size={ 5 } color="var(--color-secondary)" showLabel={ true } active={ isActiveNode(id) } 
                                    onMouseEnter={ () => handleToggleNode(id) }
                                    onMouseLeave={ emptyActiveNodes }
                                 />
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
