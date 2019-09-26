import React from 'react'
import { FadeOnMount } from '../../components/Anim'
import { SEO } from '../../components/SEO'
import { Title, Paragraph } from '../../components/Typography'
import { Module } from '../../components/Layout'

const OverviewPage = props => {
    return (
        <FadeOnMount>
            <SEO
                title="FABRIC PR Resources"
                description="PR resource library for FABRIC."
            />
            
            <Title>FABRIC PR Resources</Title>

            <Module title="Graphics">
                <Paragraph>Download <a href="https://www.dropbox.com/home/1-RENCI%20Communications/Graphics/Marcus/Final/2019/NRIG/Fabric/map/SVG%20PDFs" target="_blank" rel="noopener noreferrer">anticipated FABRIC topology map graphics files</a>.</Paragraph>
            </Module>

        </FadeOnMount>

    )
}

export default OverviewPage
