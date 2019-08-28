import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { SEO } from '../components/SEO'
import { Title } from '../components/Typography'
import { Card, CardHeader, CardBody } from '../components/Card'
import { Module } from '../components/Layout'

const Colors = styled.div`
    display: flex;
    flex-direction: row;
`

const ColorBlock = ({ name, color }) => {
    return (
        <Card style={{ flex: 1, margin: '0.5rem', border: '1px solid var(--color-dark)' }}>
            <CardHeader style={{ backgroundColor: '#fff', color: 'var(--color-dark)', borderBottom: '1px solid var(--color-grey)' }}>{ name }</CardHeader>
            <CardBody style={{ background: color }}>&nbsp;</CardBody>
        </Card>
    )
}

const Typography = styled.div`
    margin-bottom: 2rem;
`

const TypographyBlock = ({ name }) => {
    return (
        <Card style={{ flex: 1, margin: '0.5rem', border: '1px solid var(--color-dark)' }}>
            <CardHeader style={{ backgroundColor: '#fff', color: 'var(--color-dark)', borderBottom: '1px solid var(--color-grey)' }}>{ name }</CardHeader>
            <CardBody style={{ fontFamily: name }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate praesentium cum dolore quod, culpa non, illum delectus! Ea cumque soluta officiis alias, quibusdam nulla rem beatae, tempore consectetur delectus unde.
            </CardBody>
        </Card>
    )
}

const BrandingPage = () => (
    <FadeOnMount>
        <SEO title="Branding" />

        <Title>Branding</Title>
        
        <Module title="Colors">
            <Colors>
                <ColorBlock name="primary" color="var(--color-primary)" />
                <ColorBlock name="secondary" color="var(--color-secondary)" />
                <ColorBlock name="dark" color="var(--color-dark)" />
            </Colors>
            <Colors>
                <ColorBlock name="black" color="var(--color-black)" />
                <ColorBlock name="grey" color="var(--color-grey)" />
                <ColorBlock name="light" color="var(--color-light)" />
                <ColorBlock name="white" color="var(--color-white)" />
            </Colors>
        </Module>

        <Module title="Typography">
            <Typography>
                <TypographyBlock name="Mayeka" />
            </Typography>
            <Typography>
                <TypographyBlock name="IBM Plex Sans" />
            </Typography>
        </Module>

    </FadeOnMount>

)

export default BrandingPage
