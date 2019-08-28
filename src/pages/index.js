import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Paragraph, Subheading } from '../components/Typography'
import { CardContainer, Card, CardHeader, CardBody, CardFooter } from '../components/Card'
import { Module } from '../components/Layout'
import { useWindowWidth } from '../hooks'
import {
    ContributorsModule,
    FundingModule,
    NextEventModule,
    PartnersModule,
    SpotlightModule,
    StatusModule,
    TimelineModule,
} from '../components/Modules'
import { Container, Row, Col } from 'react-grid-system'

const Blurb = styled(Paragraph)`
    font-family: var(--font-accent);
    color: var(--color-grey);
    line-height: 1.5;
    font-size: 175%;
    text-align: right;
    margin: 1rem 2rem 2rem 0;
`

const HomePage = ({ data }) => {
    const { isCompact } = useWindowWidth()
    const nextEvent = data.events.edges[0].node

    return (
        <FadeOnMount>
            <SEO title="Home" />

            <Module>
                <Container style={{ width: isCompact ? '100%' : '75%', margin: 'auto' }}>
                    <Row>
                        <Col xs={ 12 } lg={ 5 }>
                            <Blurb>
                                FABRIC: Adaptive Programmable Research Infrastructure for Computer Science and Science Applications
                            </Blurb>
                        </Col>
                        <Col xs={ 12 } lg={ 7 }>
                            <Paragraph style={{ marginRight: isCompact ? '0' : '4rem' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia, aut nisi, iusto totam doloribus consequatur. Suscipit, autem ratione culpa.
                            </Paragraph>
                            <Paragraph style={{ marginRight: isCompact ? '0' : '4rem' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem architecto veniam, corporis necessitatibus ipsum, error excepturi nostrum hic vero numquam, porro cum. Delectus doloremque in vero accusantium, aspernatur explicabo distinctio!
                            </Paragraph>
                            <Paragraph style={{ marginRight: isCompact ? '0' : '4rem' }}>
                                Lorem ipsum dolor sit amet.
                            </Paragraph>
                        </Col>
                        
                    </Row>

                </Container>
            </Module>

            <Container>
                <Row>
                    <Col xs={ 12 } md={ 9 }>
                        <Module title="Spotlight">
                            <CardContainer compact={ isCompact }>
                                <Card>
                                    <CardHeader>FABRIC Status</CardHeader>
                                    <CardBody>
                                        <Paragraph>
                                            FABRIC is in its very beginning stages,
                                            and we're really excited to get this project ramped up.
                                        </Paragraph>
                                        <Paragraph>
                                            and we would love the chance to collaborate while we ramp things up,
                                            so please get in touch to let us know how you can be involved!
                                        </Paragraph>
                                    </CardBody>
                                    <CardFooter>
                                        <Paragraph right>
                                            <Link to="/get-involved">Learn how to get involved</Link>
                                        </Paragraph>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>Next FABRIC Event</CardHeader>
                                    <CardBody>
                                        <Subheading>{ nextEvent.frontmatter.title }</Subheading>
                                        <strong>{ nextEvent.frontmatter.date }</strong>
                                        <Paragraph>
                                            { nextEvent.excerpt }
                                        </Paragraph>
                                    </CardBody>
                                    <CardFooter>
                                        <Paragraph right>
                                            <Link to="/events">Explore Upcoming Events</Link>
                                        </Paragraph>
                                    </CardFooter>
                                </Card>
                            </CardContainer>
                        </Module>
                    </Col>
                    <Col xs={ 12 } md={ 3 }>
                        <FundingModule />
                    </Col>
                </Row>
            </Container>

            <PartnersModule />

            <TimelineModule items={ data.allTimelineYaml.edges } />

            <br/>

            <ContributorsModule />

        </FadeOnMount>

    )
}

export const query = graphql`
    query {
        allTimelineYaml(sort: {order: DESC, fields: date}) {
            edges {
                node {
                    date
                    title
                    description
                }
            }
        }
        events: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC}
            filter: {fileAbsolutePath: {regex: "/events/"}}
            limit: 1
        ) {
            edges {
                node {
                    excerpt(pruneLength: 120)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`
export default HomePage
