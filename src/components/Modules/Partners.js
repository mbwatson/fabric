import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Module } from '../Layout'
import { Paragraph } from '../Typography'

const logosQuery = graphql`
    query {
        logos: allFile(filter: {relativeDirectory: {eq: "partners"}}) {
            edges {
                node {
                    id
                    childImageSharp {
                        id
                        fixed(fit: CONTAIN, height: 30) {
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
        coreLogos: allFile(filter: {relativeDirectory: {eq: "partnersCore"}}) {
            edges {
                node {
                    id
                    childImageSharp {
                        id
                        fixed(fit: CONTAIN, height: 55) {
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

const corePartnerLogos = [
    'renci.png',
    'uk.png',
    'clemson.png',
    'iit.png',
    'esnet.png',
]

const partnerLogos = [
    'columbia.png',
    'utah.png',
    'ncsa.png',
    'fiu.png',
    'gt.png',
    'internet2.png',
    'rutgers.png',
    'sri.png',
    'tacc.png',
    'uchicago.png',
    'ucsd.png',
    'usignite.png',
    'uva.png',
]

const ImageArrangement = styled.div`
    text-align: center;
    margin: 2rem 0;
`

const MutedImage = styled(Img)`
    margin: 0.5rem;
    transition: filter 250ms;
    filter: saturate(25%) opacity(50%);
    &:hover {
        filter: saturate(100%) opacity(100%);
    }
`

const CoreMutedImage = styled(MutedImage)`
    margin: 1rem;
`

export const PartnersModule = props => {
    return (
        <StaticQuery
            query={ logosQuery }
            render={
                data => {
                    const sortedLogos = data.logos.edges
                        .sort((a, b) => partnerLogos.indexOf(a.node.childImageSharp.fixed.originalName) - partnerLogos.indexOf(b.node.childImageSharp.fixed.originalName))
                    const sortedCoreLogos = data.coreLogos.edges
                        .sort((a, b) => corePartnerLogos.indexOf(a.node.childImageSharp.fixed.originalName) - corePartnerLogos.indexOf(b.node.childImageSharp.fixed.originalName))
                    return (
                        <Module title="Partners">
                            <Paragraph>
                                FABRIC is made possible by collaborations with the following organizations.
                            </Paragraph>
                            <ImageArrangement>
                                {
                                    sortedCoreLogos.map(
                                        ({ node: logo }, i) => (
                                            <CoreMutedImage key={ i } fixed={ logo.childImageSharp.fixed } />
                                        )
                                    )
                                }
                            </ImageArrangement>
                            <ImageArrangement>
                                {
                                    sortedLogos.map(
                                        ({ node: logo }, i) => (
                                            <MutedImage key={ i } fixed={ logo.childImageSharp.fixed } />
                                        )
                                    )
                                }
                            </ImageArrangement>
                        </Module>
                    )
                }
            }
        />
    )
}

