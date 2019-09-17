import React from 'react'
import { graphql, Link } from 'gatsby'
import { FadeOnMount } from '../../components/Anim'
import { SEO } from '../../components/SEO'
import { Title, Paragraph, Meta } from '../../components/Typography'
import { Truncated } from '../../components/Layout'
import { Container, Row, Col, Visible } from 'react-grid-system'
import { Module } from '../../components/Layout'

const EventsList = ({ title, events }) => {
    return (
        <Module title={ title }>
            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 4 } md={ 3 }>Date</Col>
                    <Col xs={ 12 } sm={ 8 } md={ 6 }>Title</Col>
                    <Visible md lg xl><Col md={ 3 }>Event Link</Col></Visible>
                </Row>
                <br/>
                {
                    events.length
                        ? events.map(event => {
                            const { title, path, date, url } = event.node.frontmatter
                            return (
                                <Row>
                                    <Col xs={ 12 } sm={ 4 } md={ 3 }>
                                        <Meta>{ date }</Meta>
                                    </Col>
                                    <Col xs={ 12 } sm={ 8 } md={ 6 }>
                                        <h5><Link to={ path }>{ title }</Link></h5>
                                    </Col>
                                    <Visible md lg xl>
                                        <Col md={ 3 }>
                                            <Meta><Truncated><a href={ url } target="_blank" rel="noreferrer noopener">{ url }</a></Truncated></Meta>
                                        </Col>
                                    </Visible>
                                </Row>
                            )
                        })
                    : <Paragraph center>There are no events to display at the moment. Please check back soon!</Paragraph>
            }
            </Container>
        </Module>
    )
}

export default ({ data, pageContext }) => {
    const eventsPresenting = data.eventsPresenting.edges
    const eventsHosting = data.eventsHosting.edges

    return (
        <FadeOnMount>
            <SEO title="Upcoming Events" />
            
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

export const allEventsQuery = graphql`
    query($todaysDate: Date!) {
        eventsPresenting:allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/events/"}
                frontmatter: {
                    categories: {in: ["presenting"]},
                    date: {gt: $todaysDate}
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMM D, YYYY")
                        path
                        title
                        categories
                        url
                    }
                }
            }
        }
        eventsHosting:allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/events/"},
                frontmatter: {
                    categories: {in: ["hosting"]}
                    date: {gt: $todaysDate}
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMM D, YYYY")
                        path
                        title
                        categories
                        url
                    }
                }
            }
        }
    }
`