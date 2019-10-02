import React from 'react'
import { Module } from '../Layout'
import fabricMapSvg from '../../images/fabric-map.svg'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from 'react-simple-maps'

export const MapModule = props => {
    return (
        <Module title="Anticipated FABRIC Topology">
            <img src={ fabricMapSvg } alt=""/>
        </Module>
    )
}
