import React from 'react'
import styled from 'styled-components'
import { SEO } from '../components/SEO'
import { Page } from '../layouts'
import { Title } from '../components/Typography'
import { Card, CardHeader, CardBody } from '../components/Card'
import { Section } from '../components/Layout'

const Colors = styled.div`
    display: flex;
    flex-direction: row;
`

const ColorBlock = ({ name, color }) => {
    console.log(color)
    return (
        <Card style={{ flex: 1, margin: '0.5rem' }}>
            <CardHeader style={{ backgroundColor: '#fff', color: 'var(--color-secondary)', borderBottom: '1px solid var(--color-grey)' }}>{ name }</CardHeader>
            <CardBody style={{ background: color }}>&nbsp;</CardBody>
        </Card>
    )
}

const BrandingPage = () => (
    <Page>
        <SEO title="Branding" />

        <Title>Branding</Title>
        
        <Section title="Colors">
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
        </Section>

    </Page>

)

export default BrandingPage
