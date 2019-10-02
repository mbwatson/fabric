import React, { useEffect, useState } from 'react'
import { Module } from '../Layout'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from 'react-simple-maps'

export const MapModule = props => {
    const [mapJson, setMapJson] = useState(null)

    useEffect(() => {
        const fetchMapJson = async url => {
            fetch(url)
                .then(response => {
                    if (response.status !== 200) {
                        console.log(response)
                        setMapJson(response.json())
                    } else {
                        console.log('nothin')
                    }
                })
        }
        fetchMapJson('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    }, [])
    
    return (
        <Module title="Anticipated FABRIC Topology">
            <pre>{ JSON.stringify(mapJson, null, 2) }</pre>
        </Module>
    )
}
