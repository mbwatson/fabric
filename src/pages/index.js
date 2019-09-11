import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Paragraph } from '../components/Typography'
import { CardContainer, Card, CardHeader, CardBody, CardFooter } from '../components/Card'
import { ButtonLink } from '../components/Button'
import { Module } from '../components/Layout'
import { useWindowWidth } from '../hooks'
import {
    CapabilitiesModule,
    ContributorsModule,
    FundingModule,
    PartnersModule,
    TimelineModule,
} from '../components/Modules'
import { Container, Row, Col, Visible } from 'react-grid-system'

const Blurb = styled(Paragraph)`
    font-family: var(--font-accent);
    color: var(--color-grey);
    line-height: 1.0;
    font-size: 250%;
    text-align: right;
    margin: 1rem;
    color: var(--color-primary-dark);
`

const HomePage = ({ data }) => {
    const { isCompact } = useWindowWidth()

    return (
        <FadeOnMount>
            <SEO title="Home" />

            <Module>
                <Container>
                    <Row>
                        <Col xs={ 12 } lg={ 6 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Blurb>
                                <strong>FABRIC</strong> is Adaptive Programmable Research Infrastructure for Computer Science and Science Applications
                            </Blurb>
                            <Visible xs sm md><br/></Visible>
                        </Col>
                        <Col xs={ 12 } lg={ 6 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '1rem' }}>
                            <Paragraph style={{ marginRight: isCompact ? '0' : '0rem', fontSize: '90%' }}>
                                FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale
                                in networking, cybersecurity, distributed computing, storage systems, machine learning, and science applications. 
                            </Paragraph>
                            <Paragraph style={{ marginRight: isCompact ? '0' : '0rem', fontSize: '90%' }}>
                                It is an "everywhere programmable" nationwide instrument comprised of novel extensible network elements equipped with large amounts of compute and storage,
                                interconnected by high speed, dedicated optical links connecting a number of specialized testbeds and high-performance computing facilities to create a rich fabric.
                            </Paragraph>
                        </Col>
                        <Col xs={ 12 }>
                            <CapabilitiesModule />
                        </Col>
                    </Row>
                </Container>
            </Module>


            <Container>
                <Row>
                    <Col xs={ 12 } lg={ 9 }>
                        <Module title="Spotlight">
                            <CardContainer compact={ isCompact }>
                                <Card>
                                    <CardHeader>FABRIC Status</CardHeader>
                                    <CardBody>
                                        <Paragraph>
                                            We are in the process of finalizing facility designs, deployment plans, and acceptance procedures.
                                        </Paragraph>
                                        <Paragraph>
                                            We plan to begin hardware prototyping and software implementation in January 2020. 
                                        </Paragraph>
                                    </CardBody>
                                    <CardFooter center>
                                        <ButtonLink primary to="/timeline">Full Development Timeline</ButtonLink>
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
                                        <ButtonLink primary to="/get-involved">Get Involved</ButtonLink>
                                    </CardFooter>
                                </Card>
                            </CardContainer>
                        </Module>
                    </Col>
                    <Col xs={ 12 } lg={ 3 }>
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
            limit: 4
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "YYYY")
                        title
                    }
                    html
                }
            }
        }
    }
`
export default HomePage
