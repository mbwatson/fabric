import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { graphql, Link } from 'gatsby'
import { SEO } from '../../components/seo'
import { Title, Paragraph, Meta } from '../../components/typography'
import { Container, Row, Col } from 'react-grid-system'
import { Module } from '../../components/layout'

const EventsList = ({ title, events }) => {
    return (
        <Module title={ title }>
            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 3 }>Date</Col>
                    <Col xs={ 12 } sm={ 9 }>Title</Col>
                </Row>
                <br/>
                {
                    events.length
                        ? events.map(event => {
                            const { title, path, date, fabricHosted } = event.node.frontmatter
                            return (
                                <Row key={ title }>
                                    <Col xs={ 12 } sm={ 3 }>
                                        <Meta>{ date }</Meta>
                                    </Col>
                                    <Col xs={ 12 } sm={ 9 }>
                                        <h5 style={{ lineHeight: 1.5 }}>
                                            <Link to={ path }>{ title }</Link>
                                            { fabricHosted ? '*' : null }
                                        </h5>
                                    </Col>
                                </Row>
                            )
                        })
                    : <Paragraph center>There are no events to display at the moment. Please check back soon!</Paragraph>
            }
            { events.length ? <Meta right>* FABRIC-hosted event</Meta> : null }
            </Container>
        </Module>
    )
}

export default ({ data, pageContext }) => {
    const events = data.events.edges

    return (
        <AnimateOnMount>
            <SEO
                title="Past FABRIC Events"
                description="Read about upcoming events that are related to FABRIC and the FABRIC team, inclusing conferences, workshops, and meet-ups."
                keywords={ ["events", "conferences", "meet-ups", "workshops", "presentations", "hackathon"] }
            />
            <SEO title="Events" />
            
            <Title>Event Archive</Title>

            <Module>
                <Paragraph>
                    These are all past events in which the FABRIC team has been involved.
                </Paragraph>
                <EventsList events={ events } />
            </Module>

            <Paragraph center>
                View our <Link to="/events">upcoming events</Link>.
            </Paragraph>

        </AnimateOnMount>
    )
}

export const allEventsQuery = graphql`
    query($todaysDate: Date!) {
        events:allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/events/"},
                frontmatter: {
                    date: {lt: $todaysDate}
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMM D, YYYY")
                        path
                        title
                        tags
                        fabricHosted
                    }
                }
            }
        }
    }
`