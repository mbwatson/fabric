import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components/SEO'
import { Title, Heading, Paragraph, Meta } from '../components/Typography'
import { HorizontalRule } from '../components/HorizontalRule'
import { Container, Row, Col, Visible } from 'react-grid-system'
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

export default ({ data, pageContext }) => {
    const events = data.events.edges
    const { todaysDate } = pageContext

    return (
        <FadeOnMount>
            <SEO title="Events" />
            
            <Title>Event Archive</Title>

            <Module>
                <Paragraph>
                    These are all past events in which the FABRIC team has been involved.
                </Paragraph>
                <EventsList events={ events } />
            </Module>

            <Paragraph>
                View our <Link to="/events">upcoming events</Link>.
            </Paragraph>

        </FadeOnMount>
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