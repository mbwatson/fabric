import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { SEO } from '../components/SEO'
import { Title, Heading, Subheading, Paragraph } from '../components/Typography'
import { Card, CardHeader, CardBody } from '../components/Card'
import { Module } from '../components/Layout'
import { Container, Col, Row } from 'react-grid-system'

const ColorBlock = ({ name, color, code }) => {
    return (
        <Card style={{ flex: 1, margin: '0.5rem', border: '1px solid var(--color-dark)' }}>
            <CardHeader style={{ backgroundColor: '#fff', color: 'var(--color-dark)', borderBottom: '1px solid var(--color-grey)' }}>{ name }</CardHeader>
            <CardBody style={{ background: color, position: 'relative' }}>
                &nbsp;
                <div style={{ position: 'absolute', right: 0, bottom: 0, backgroundColor: '#000', color: '#fff', fontSize: '85%', borderTopLeftRadius: '5px', padding: '0.15rem 0.5rem' }}>{ code }</div>
            </CardBody>
        </Card>
    )
}

const Typography = styled.div`
    margin-bottom: 2rem;
`

const TypographyBlock = ({ name, font, children }) => {
    return (
        <Card style={{ flex: 1, margin: '0.5rem', border: '1px solid var(--color-dark)' }}>
            <CardHeader style={{ backgroundColor: '#fff', color: 'var(--color-dark)', borderBottom: '1px solid var(--color-grey)' }}>{ name } - { font }</CardHeader>
            <CardBody style={{ fontFamily: font }}>
                { children }
            </CardBody>
        </Card>
    )
}

const BrandingPage = () => (
    <FadeOnMount>
        <SEO
            title="Branding"
            description="Style guide and branding resources for FABRIC."
            keywords={ ["colors", "typography", "branding"] }
        />

        <Title>Branding</Title>
        
        <Module title="Colors">
            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="primary" color="var(--color-primary)" code="#27aae1" />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="primary light" color="var(--color-primary-light)" code="#27aae133" />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="primary dark" color="var(--color-primary-dark)" code="#078ac1" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="secondary" color="var(--color-secondary)" code="#f26522" />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="secondary light" color="var(--color-secondary-light)" code="#ff8542" />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="secondary dark" color="var(--color-secondary-dark)" code="#d24502" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="grey" color="var(--color-grey)" code="#666677" />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="dark" color="var(--color-dark)" code="#433f40" />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <ColorBlock name="black" color="var(--color-black)" code="#231f20" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={ 12 } sm={ 6 }>
                        <ColorBlock name="white" color="var(--color-white)" code="#ffffff" />
                    </Col>
                    <Col xs={ 12 } sm={ 6 }>
                        <ColorBlock name="light" color="var(--color-light)" code="#f3f3f9" />
                    </Col>
                </Row>
            </Container>
        </Module>

        <Module title="Typography">
            <Typography>
                <TypographyBlock name="Heading Text" font="Mayeka Thin">
                    <Title>Title</Title>
                    <Heading>Heading</Heading>
                    <Subheading>Subheading</Subheading>
                </TypographyBlock>
            </Typography>
            <Typography>
                <TypographyBlock name="Body Text" font="IBM Plex Sans">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fuga deserunt libero, voluptatum non quae suscipit sapiente rem architecto nihil esse soluta odio, quasi aliquid assumenda quo praesentium consectetur aut.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit mollitia quam nam aperiam debitis optio neque delectus rerum, blanditiis perferendis voluptates explicabo dicta, quas error facilis corrupti, ad obcaecati pariatur voluptatem incidunt ipsa impedit. Quis commodi fugiat repellat natus cumque. Quidem eligendi placeat, laborum nulla doloribus harum odio deserunt culpa sapiente. Quam voluptas magnam dolores minus blanditiis fuga quo quibusdam reprehenderit, facere! Quas minima esse earum asperiores facere possimus eligendi tenetur velit, nam delectus odio, beatae sed quisquam iste consequuntur, modi. Qui voluptates, alias nostrum beatae unde sit veniam neque, corporis reiciendis architecto. Cupiditate possimus ea dolor, laudantium in aperiam.
                    </Paragraph>
                </TypographyBlock>
            </Typography>
        </Module>

    </FadeOnMount>

)

export default BrandingPage
