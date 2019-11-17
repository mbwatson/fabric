import React from 'react'
import { Module } from '../layout'
import fabricMapSvg from '../../images/fabric-map.svg'



export const MapModule = props => {
    return (
        <Module title="Anticipated FABRIC Topology">
            <img src={ fabricMapSvg } alt="" style={{ width: '100%' }}/>
        </Module>
    )
}
