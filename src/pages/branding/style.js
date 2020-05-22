import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import styled from 'styled-components'
import { SEO } from '../../components/seo'
import { Title, Subtitle, Heading, Subheading, Paragraph } from '../../components/typography'
import { CardContainer, Card, CardHeader, CardBody } from '../../components/card'
import { Button } from '../../components/button'
import { Module } from '../../components/layout'
import { Container, Col, Row } from 'react-grid-system'
import { useWindowWidth } from '../../hooks'

const ColorBlock = ({ name, color, code }) => {
    return (
        <Card style={{ flex: 1, margin: '0.5rem', border: '1px solid #ccc' }}>
            <CardHeader style={{ backgroundColor: '#fff', fontWeight: 'normal', color: 'var(--color-dark)', borderBottom: '1px solid #ccc' }}>{ name }</CardHeader>
            <CardBody style={{ background: color, position: 'relative' }}>
                &nbsp;<br/>
                &nbsp;<br/>
                <div style={{ position: 'absolute', right: 0, bottom: 0, backgroundColor: '#000', color: '#fff', fontSize: '85%', borderTopLeftRadius: '5px', padding: '0.15rem 0.5rem' }}>{ code }</div>
            </CardBody>
        </Card>
    )
}

const Typography = styled.div`
    margin-bottom: 2rem;
`

const TypographyBlock = ({ name, font, url, children }) => {
    return (
        <Card style={{ flex: 1, margin: '0.5rem', border: '1px solid #ccc' }}>
            <CardHeader style={{ backgroundColor: '#fff', fontWeight: 'normal', color: 'var(--color-dark)', borderBottom: '1px solid #ccc' }}>
                { name } - <a href={ url } target="_blank" rel="noopener noreferrer">{ font }</a>
            </CardHeader>
            <CardBody style={{ fontFamily: font }}>
                { children }
            </CardBody>
        </Card>
    )
}

const StyleGuidePage = () => {
    const { isCompact } = useWindowWidth()
    
    return (
        <AnimateOnMount>
            <SEO
                title="Branding"
                description="Style guide and branding resources for FABRIC."
                keywords={ ["colors", "typography", "branding"] }
            />
    
            <Title>Branding</Title>
            
            <Module title="Colors">
                <Subheading>Primary Palette</Subheading>
                
                <CardContainer compact={ isCompact }>
                    <ColorBlock name="primary" color="var(--color-primary)" code="#27aae1" />
                    <ColorBlock name="primary light" color="var(--color-primary-light)" code="#cde4ef" />
                    <ColorBlock name="primary dark" color="var(--color-primary-dark)" code="#078ac1" />
                </CardContainer>
                <CardContainer compact={ isCompact }>
                    <ColorBlock name="secondary" color="var(--color-secondary)" code="#f26522" />
                    <ColorBlock name="secondary light" color="var(--color-secondary-light)" code="#ff8542" />
                    <ColorBlock name="secondary dark" color="var(--color-secondary-dark)" code="#d24502" />
                </CardContainer>
    
                <br/>
    
                <Subheading>Greys</Subheading>
    
                <CardContainer compact={ isCompact }>
                    <ColorBlock name="black" color="var(--color-black)" code="#231f20" />
                    <ColorBlock name="dark" color="var(--color-dark)" code="#433f40" />
                    <ColorBlock name="grey" color="var(--color-grey)" code="#666677" />
                    <ColorBlock name="light" color="var(--color-light)" code="#f3f3f9" />
                    <ColorBlock name="white" color="var(--color-white)" code="#ffffff" />
                </CardContainer>
            </Module>
    
            <Module title="Buttons">
                <Paragraph>
                    There are two types of FABRIC buttons:
                    <em>Primary Buttons</em> and <em>Accent Buttons</em>.
                    Both buttons are quite similar in style and differ only in their background colors.
                    The base styling shared by both buttons defines text, text color, padding, and border style:
                </Paragraph>
                <Paragraph center>
                    <code>
                        color: #fff;
                        text-transform: uppercase;
                        padding: 0.5rem 0.75rem;
                        border-width: 1px;
                        border-radius: 4px;
                    </code>
                </Paragraph>
                <Container>
                    <Row>
                        <Col xs={ 12 } sm={ 6 }>
                            <Paragraph center>
                                <Button primary>Primary Button</Button>
                            </Paragraph>
                            <Paragraph left>
                                The <em>Primary Button</em> variant has the primary (blue) color defined above for its background color
                                and the dark primary (blue) color for its border color.
                                and it should be used for most actions on a given page.
                            </Paragraph>
                        </Col>
                        <Col xs={ 12 } sm={ 6 }>
                            <Paragraph center>
                                <Button secondary>Accent Button</Button>
                            </Paragraph>
                            <Paragraph left>
                                The <em>Accent Button</em> has the secondary color (orange) color for its background color.
                                and the dark secondary (orange) color for its border color.
                                This button can be thought of as a Call to Action button.
                                It should be used for the main action on a page,
                                and there should not be more than one Accent Buttonon a single page.
                            </Paragraph>
                        </Col>
                    </Row>
                </Container>
                <Paragraph>
                    Both buttons transition their background colors to their dark counterarts upon hover.
                </Paragraph>
            </Module>
    
            <Module title="Typography">
                <Typography>
                    <TypographyBlock name="Heading Text" font="Montserrat" url="https://fonts.google.com/specimen/Montserrat">
                        <Title>Title</Title>
                        <Subtitle>Subtitle</Subtitle>
                        <Heading>Heading</Heading>
                        <Subheading>Subheading</Subheading>
                    </TypographyBlock>
                </Typography>
                <Typography>
                    <TypographyBlock name="Body Text" font="IBM Plex Sans" url="https://fonts.google.com/specimen/IBM+Plex+Sans">
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fuga deserunt libero, voluptatum non quae suscipit sapiente rem architecto nihil esse soluta odio, quasi aliquid assumenda quo praesentium consectetur aut.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit mollitia quam nam aperiam debitis optio neque delectus rerum, blanditiis perferendis voluptates explicabo dicta, quas error facilis corrupti, ad obcaecati pariatur voluptatem incidunt ipsa impedit. Quis commodi fugiat repellat natus cumque. Quidem eligendi placeat, laborum nulla doloribus harum odio deserunt culpa sapiente. Quam voluptas magnam dolores minus blanditiis fuga quo quibusdam reprehenderit, facere! Quas minima esse earum asperiores facere possimus eligendi tenetur velit, nam delectus odio, beatae sed quisquam iste consequuntur, modi. Qui voluptates, alias nostrum beatae unde sit veniam neque, corporis reiciendis architecto. Cupiditate possimus ea dolor, laudantium in aperiam.
                        </Paragraph>
                    </TypographyBlock>
                </Typography>
            </Module>
    
        </AnimateOnMount>    
    )
}
export default StyleGuidePage
