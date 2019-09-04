import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Paragraph, Subheading } from '../components/Typography'
import { CardContainer, Card, CardHeader, CardBody, CardFooter } from '../components/Card'
import { ButtonLink } from '../components/Button'
import { Module } from '../components/Layout'
import { useWindowWidth } from '../hooks'
import {
    ContributorsModule,
    FundingModule,
    PartnersModule,
    TimelineModule,
} from '../components/Modules'
import { Container, Row, Col } from 'react-grid-system'

const Blurb = styled(Paragraph)`
    font-family: var(--font-accent);
    color: var(--color-grey);
    line-height: 1.95;
    font-size: 185%;
    text-align: right;
    margin: 1rem 2rem;
    color: var(--color-primary-dark);
`

const HomePage = ({ data }) => {
    const { isCompact } = useWindowWidth()

    return (
        <FadeOnMount>
            <SEO title="Home" />

            <Module>
                <Container style={{ width: isCompact ? '100%' : '90%', margin: 'auto', }}>
                    <Row>
                        <Col xs={ 12 } lg={ 6 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Blurb>
                                <strong>FABRIC</strong> is<br/>
                                <span>Adaptive Programmable Research Infrastructure for Computer Science and Science Applications</span>
                            </Blurb>
                        </Col>
                        <Col xs={ 12 } lg={ 6 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                                            We are in the process of finalizing facility designs, deployment plans and acceptance procedures.
                                        </Paragraph>
                                        <Paragraph>
                                            We plan to begin hardware prototyping and software implementation in Jan 2020. 
                                        </Paragraph>
                                    </CardBody>
                                    <CardFooter center>
                                        <ButtonLink to="/timeline">View Full Development Timeline</ButtonLink>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>Contribute</CardHeader>
                                    <CardBody>
                                        <Paragraph>
                                            FABRIC is in its very beginning stages, and
                                            we would love the chance to collaborate with the community,
                                            especially during this initial phase.
                                        </Paragraph>
                                        <Paragraph>
                                            Get in touch to let us know how you can improve the success of FABRIC!
                                        </Paragraph>
                                    </CardBody>
                                    <CardFooter center>
                                        <ButtonLink to="/get-involved">Learn How to Get Involved</ButtonLink>
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

            <TimelineModule items={ data.timeline.edges } />

            <br/>

            <ContributorsModule />

        </FadeOnMount>

    )
}

export const query = graphql`
    query {
        events: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC}
            filter: {fileAbsolutePath: {regex: "/events/"}}
            limit: 1
        ) {
            edges {
                node {
                    excerpt(pruneLength: 120)
                    frontmatter {
                        date(formatString: "YYYY")
                        path
                        title
                    }
                }
            }
        }
        timeline: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC}
            filter: {fileAbsolutePath: {regex: "/timeline/"}}
            limit: 2
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "YYYY")
                        title
                    }
                    excerpt(pruneLength: 120)
                }
            }
        }
    }
`
export default HomePage
