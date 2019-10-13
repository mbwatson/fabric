import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Module } from '../layout'
import { Paragraph } from '../typography'

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

export const FundingModule = props => {
    return (
        <StaticQuery
            query={ fundersLogosQuery }
            render={
                data => (
                    <Module title="Support" centerTitle>
                        <ImageArrangement>
                            {
                                data.allFile.logos.map(
                                    ({ node: logo }, i) => <Img key={ i } fixed={ logo.childImageSharp.fixed } />
                                )
                            }
                            <Paragraph center>
                                <br/>
                                FABRIC is supported in part by a Mid-Scale RI-1 NSF award under Grant No. 1935966.
                            </Paragraph>
                        </ImageArrangement>
                    </Module>
                )
            }
        />
    )
}
