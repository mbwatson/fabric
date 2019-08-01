import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Page } from '../layouts'
import { Paragraph } from '../components/Typography'
import { useWindowWidth } from '../hooks'
import {
    FundingSection,
    PartnersSection,
    StatusSection,
    TimelineSection,
    ContributorsSection,
} from '../sections'
import { Container, Row, Col } from 'react-grid-system'

const Blurb = styled(Paragraph)`
    font-family: var(--font-accent);
    color: var(--color-grey);
    line-height: 1.5;
    font-size: 175%;
    text-align: right;
    margin: auto;
`

const HomePage = ({ data }) => {
    const { isCompact } = useWindowWidth()

    return (
        <Page>
            <SEO title="Home" />

            <Container style={{ width: isCompact ? '100%' : '75%', margin: 'auto' }}>
                <Row>
                    <Col xs={ 12 } md={ 5 } style={{ margin: isCompact ? '0 0 2rem 0' : 'auto' }}>
                        <Blurb>
                            Fabric is Adaptive programmaBle Research Infrastructure for Computer science
                        </Blurb>
                    </Col>
                    <Col xs={ 12 } md={ 7 }>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia, aut nisi, iusto totam doloribus consequatur. Suscipit, autem ratione culpa.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem architecto veniam, corporis necessitatibus ipsum, error excepturi nostrum hic vero numquam, porro cum. Delectus doloremque in vero accusantium, aspernatur explicabo distinctio!
                        </Paragraph>
                    </Col>
                    
                </Row>

            </Container>
            
            <Container>
                <Row>
                    <Col xs={ 12} md={ 9 }>
                        <StatusSection />
                    </Col>
                    <Col xs={ 12} md={ 3 }>
                        <FundingSection />
                    </Col>
                </Row>
                
            </Container>

            <PartnersSection />

            <TimelineSection />

            <ContributorsSection />

        </Page>

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
