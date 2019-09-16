import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components/SEO'
import { Title, Heading, Paragraph, Meta } from '../components/Typography'
import { Container, Row, Col } from 'react-grid-system'
import { Module } from '../components/Layout'

const EventsList = ({ title, events }) => {
    return (
        <Module title={ title }>
            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 6 }>Title</Col>
                    <Col xs={ 12 } sm={ 3 }>Date</Col>
                    <Col xs={ 12 } sm={ 3 }>Tags</Col>
                </Row>
                <br/>
                {
                    events.length
                        ? events.map(event => {
                            const { title, path, date, tags } = event.node.frontmatter
                            return (
                                <Row>
                                    <Col xs={ 12 } sm={ 6 }>
                                        <h5><Link to={ path }>{ title }</Link></h5>
                                    </Col>
                                    <Col xs={ 12 } sm={ 3 }>
                                        <Meta>{ date }</Meta>
                                    </Col>
                                    <Col xs={ 12 } sm={ 3 }>
                                        <Meta>{ tags.length > 0 ? tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` }>{ tag } </Link>) : '∅' }</Meta>
                                    </Col>
                                </Row>
                            )
                        })
                    : <Paragraph>There are no events to display at the moment. Please check back soon!</Paragraph>
            }
            </Container>
        </Module>
    )
}

const EventsPage = ({ data }) => {
    const eventsPresenting = data.presenting.edges
    const eventsHosting = data.hosting.edges

    return (
        <FadeOnMount>
            <SEO title="Events" />
            
            <Title>Upcoming Events</Title>

            <Paragraph>
                See the list of conference and workshops at which FABRIC is presenting and those that FABRIC is hosting.
            </Paragraph>
            
            <Module title="Come Talk with Us">
                <Paragraph>
                    FABRIC team members will be attending and presenting at the following events.
                </Paragraph>
                <EventsList events={ eventsPresenting } />
            </Module>

            <Module title="Join Us">
                <Paragraph>
                    FABRIC is hosting the following conferences and workshops.
                </Paragraph>
                <EventsList events={ eventsHosting } />
            </Module>

            <Paragraph>
                View our <Link to="/events/archive">event archive</Link>.
            </Paragraph>

        </FadeOnMount>
    )
}

export const query = graphql`
    query {
        presenting:allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/events/"}
                frontmatter: {
                    categories: {in: ["presenting"]},
                    date: {gt: "2019-09-16"}
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        categories
                        tags
                    }
                }
            }
        }
        hosting:allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/events/"},
                frontmatter: {
                    categories: {in: ["hosting"]}
                    date: {gt: "2019-09-16"}
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        categories
                        tags
                    }
                }
            }
        }
    }
`

export default EventsPage
