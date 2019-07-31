import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Section } from '../components/Layout'
import { Paragraph } from '../components/Typography'

const logosQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "partners"}}) {
            logos: edges {
                node {
                    id
                    childImageSharp {
                        id
                        fixed(fit: CONTAIN, height: 40) {
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

const MutedImage = styled(Img)`
    margin: 0.5rem;
    transition: filter 250ms;
    cursor: pointer;
    filter: saturate(50%) opacity(50%);
    &:hover {
        filter: saturate(100%) opacity(100%);
    }
`

export const PartnersSection = props => {
    return (
        <StaticQuery
            query={ logosQuery }
            render={
                data => (
                    <Section title="Partners">
                        <Paragraph>
                            FABRIC is made possible by collaborations with the following organizations.
                        </Paragraph>
                        <ImageArrangement>
                            {
                                data.allFile.logos.map(
                                    ({ node: logo }) => (
                                        <MutedImage fixed={ logo.childImageSharp.fixed } />
                                    )
                                )
                            }
                        </ImageArrangement>
                    </Section>
                )
            }
        />
    )
}

