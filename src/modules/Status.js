import React from 'react'
import styled from 'styled-components'
import { Module } from '../components/Layout'
import { status } from '../data'
import { Card, CardHeader, CardBody } from '../components/Card'
import { useWindowWidth } from '../hooks'

const Cards = styled.div`
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    & > div:first-child {
        margin-right: ${ props => props.compact ? 0 : '0.5rem' };;
    }
    & > div:last-child {
        margin-left: ${ props => props.compact ? 0 : '0.5rem' };;
    }
`

export const StatusModule = props => {
    const { isCompact } = useWindowWidth()

    return (
        <Module title="FABRIC Status">
            <Cards compact={ isCompact }>
                <Card>
                    <CardHeader>
                        Lorem ipsum dolor.
                    </CardHeader>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptates rem adipisci, totam sunt, nulla, voluptatem possimus alias libero molestias vitae consequatur laboriosam placeat aspernatur neque nam iure incidunt perspiciatis.
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        Lorem ipsum dolor.
                    </CardHeader>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptates rem adipisci, totam sunt, nulla, voluptatem possimus alias libero molestias vitae consequatur laboriosam placeat aspernatur neque nam iure incidunt perspiciatis.
                    </CardBody>
                </Card>
            </Cards>
        </Module>
    )
}
