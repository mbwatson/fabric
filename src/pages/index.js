import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Paragraph } from '../components/Typography'
import { Module } from '../components/Layout'
import { useWindowWidth } from '../hooks'
import {
    FundingModule,
    PartnersModule,
    StatusModule,
    TimelineModule,
    ContributorsModule,
} from '../modules'
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
                    <Col xs={ 12} md={ 9 }>
                        <StatusModule />
                    </Col>
                    <Col xs={ 12} md={ 3 }>
                        <FundingModule />
                    </Col>
                </Row>
            </Container>

            <PartnersModule />

            <TimelineModule />

            <br/>

            <ContributorsModule />

        </FadeOnMount>

    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    html
                }
            }
        }
    }
`
export default HomePage
