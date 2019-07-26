import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Page } from '../layouts'
import { Paragraph } from '../components/Typography'
import { Section, Columns, Column } from '../components/Layout'
import { useWindowWidth } from '../hooks'
import {
    FundingSection,
    PartnersSection,
    StatusSection,
    TimelineSection,
    ContributorsSection,
} from '../sections'

const LeftColumnBlurb = styled(Column)`
    padding-right: 2rem;
    font-size: 175%;
    text-align: right;
`

const HomePage = ({ data }) => {
    const sections = data.allMarkdownRemark.edges
    const { isCompact } = useWindowWidth()

    return (
        <Page>
            <SEO title="Home" />

            <Columns style={{ transition: 'margin 250ms', margin: isCompact ? '0 2rem' : '0 3rem', flexDirection: isCompact ? 'column' : 'row', alignItems: 'center' }}>

                <LeftColumnBlurb flex="1">
                    <Paragraph style={{ fontFamily: 'mayeka', lineHeight: 1.5 }}>
                        Fabric is Adaptive programmaBle Research Infrastructure for Computer science
                    </Paragraph>
                </LeftColumnBlurb>

                <Column flex="2">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia, aut nisi, iusto totam doloribus consequatur. Suscipit, autem ratione culpa.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem architecto veniam, corporis necessitatibus ipsum, error excepturi nostrum hic vero numquam, porro cum. Delectus doloremque in vero accusantium, aspernatur explicabo distinctio!
                    </Paragraph>
                </Column>

            </Columns>
            
            <Columns style={{ flexDirection: isCompact ? 'column' : 'row' }}>

                <Column flex="3">
                    <StatusSection />
                </Column>

                <Column flex="1">
                    <FundingSection />
                </Column>
                
            </Columns>

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
