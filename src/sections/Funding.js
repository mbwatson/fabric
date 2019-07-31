import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Section } from '../components/Layout'
import { Paragraph } from '../components/Typography'

const fundersLogosQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "supporters"}}) {
            logos: edges {
                node {
                    id
                    childImageSharp {
                        id
                        fixed(fit: CONTAIN, height: 150) {
                            base64
                            tracedSVG
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            originalName
                        }
                    }
                }
            }
        }
    }
`

const ImageArrangement = styled.div`
    text-align: center;
`

export const FundingSection = props => {
    return (
        <StaticQuery
            query={ fundersLogosQuery }
            render={
                data => (
                    <Section title="Support" centerTitle>
                        <ImageArrangement>
                            {
                                data.allFile.logos.map(
                                    ({ node: logo }) => <Img style={{ margin: '1rem' }} fixed={ logo.childImageSharp.fixed } />
                                )
                            }
                            <Paragraph center>
                                FABRIC is supported in part by the National Science Foundation under Grant No. ABC-0123456.
                            </Paragraph>
                        </ImageArrangement>
                    </Section>
                )
            }
        />
    )
}
