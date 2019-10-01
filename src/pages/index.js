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
    MapModule,
    PartnersModule,
    TimelineModule,
} from '../components/Modules'
import { Container, Row, Col, Visible } from 'react-grid-system'

const Blurb = styled(Paragraph)`
    font-family: var(--font-heading);
    color: var(--color-grey);
    line-height: ${ props => props.compact ? '1.25' : '1.0' };
    font-size: ${ props => props.compact ? '6vw' : '275%' };
    text-align: right;
    margin: 1rem;
    color: var(--color-primary-dark);
`

const HomePage = ({ data }) => {
    const { isCompact } = useWindowWidth()

    return (
        <FadeOnMount>
            <SEO
                title="Home"
                description="FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale in networking, cybersecurity, distributed computing and storage systems, machine learning, and science applications."
            />

            <Module>
                <Container>
                    <Row>
                        <Col xs={ 12 } lg={ 6 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Blurb compact={ isCompact }>
                                <strong>FABRIC</strong> is Adaptive Programmable Research Infrastructure for Computer Science and Science Applications
                            </Blurb>
                            <Visible xs sm md><br/></Visible>
                        </Col>
                        <Col xs={ 12 } lg={ 6 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '1rem' }}>
                            <Paragraph style={{ fontSize: '90%' }}>
                                FABRIC is a unique national research infrastructure to enable
                                cutting-edge and exploratory research at-scale in networking, cybersecurity,
                                distributed computing and storage systems, machine learning, and science applications. 
                            </Paragraph>
                            <Paragraph style={{ fontSize: '90%' }}>
                                It is an <em>everywhere programmable</em> nationwide instrument comprised of novel extensible network elements
                                equipped with large amounts of compute and storage, interconnected by high speed, dedicated optical links.
                                It will connect a number of specialized testbeds (5G/IoT PAWR, NSF Clouds) and high-performance computing facilities
                                to create a rich fabric for a wide variety of experimental activities.
                            </Paragraph>
                        </Col>
                    </Row>
                </Container>
            </Module>

            <CapabilitiesModule />

            <Container>
                <Row>
                    <Col xs={ 12 } lg={ 9 }>
                        <Module>
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
                                </Card>
                                <Card>
                                    <CardHeader>Contribute</CardHeader>
                                    <CardBody>
                                        <Paragraph>
                                            You can make an impact on FABRIC!
                                            As FABRIC is in its very beginning stages,
                                            we would love the chance to collaborate with you and the community.
                                        </Paragraph>
                                        <Paragraph>
                                            Have interest or wisdom to share? Join the community!
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
            
            <MapModule />

            <TimelineModule items={ data.timeline.edges } />

            <ContributorsModule />

            <PartnersModule />

        </FadeOnMount>

    )
}

export const query = graphql`
    query {
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
