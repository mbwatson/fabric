import React from 'react'
import { Module } from '../Layout'
import fabricMapSvg from '../../images/fabric-map.svg'



export const MapModule = props => {
    return (
        <Module title="Anticipated FABRIC Topology">
            <img src={ fabricMapSvg } alt=""/>
        </Module>
    )
}
