import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Heading, Paragraph } from '../components/Typography'
import { useWindowWidth } from '../hooks'

const CapabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CapabilityHead = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const CapabilityIcon = styled(Img)`
    max-width: 75px;
    max-height: 75px;
    min-width: 75px;
    min-height: 75px;
    margin-right: 1rem;
    transition: background-color 500ms;
    background-color: var(--color-primary);
    border-radius: 50%;
    & img {
        padding: 1rem;
    }
`

const CapabilityTitle = styled(Heading)`
    margin: 0;
`

const CapabilityBody = styled.div`
    margin: ${ props => props.compact ? '1rem 0 1rem 0' : '0 0 0 calc(75px + 1rem)' };
`

const AboutPage = ({ data }) => {
    const capabilities = data.allMarkdownRemark.capabilities
    const { isCompact } = useWindowWidth()

    return (
        <FadeOnMount>
            <SEO title="About FABRIC" />
            
            <Title>About FABRIC</Title>

            <Paragraph>
                FABRIC is a unique national research infrastructure to enable
                cutting-edge and exploratory research at-scale in networking, cybersecurity,
                distributed computing and storage systems, machine learning, and science applications. 
            </Paragraph>
            <Paragraph>
                It is an <em>everywhere programmable</em> nationwide instrument comprised of novel extensible network elements
                equipped with large amounts of compute and storage, interconnected by high speed, dedicated optical links.
                It will connect a number of specialized testbeds (5G/IoT PAWR, NSF Clouds) and high-performance computing facilities
                to create a rich fabric for a wide variety of experimental activities.
            </Paragraph>

            <br/>
            
            <Title>FABRIC Capabilities</Title>

            {
                capabilities.map(({ node }) => {
                    return (
                        <CapabilityContainer>
                            <CapabilityHead>
                                <CapabilityIcon fluid={ node.frontmatter.icon.childImageSharp.fluid } />
                                <CapabilityTitle>FABRIC { node.frontmatter.title }</CapabilityTitle>
                            </CapabilityHead>
                            <CapabilityBody compact={ isCompact }>
                                <Paragraph dangerouslySetInnerHTML={{ __html: node.html }} />
                            </CapabilityBody>
                        </CapabilityContainer>
                    )
                })
            }

        </FadeOnMount>

    )
}

export const query = graphql`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "^/capabilities/"}}, sort: {order: ASC, fields: fileAbsolutePath}) {
            capabilities: edges {
                node {
                    frontmatter {
                        title
                        icon {
                            childImageSharp {
                                fluid {
                                    base64
                                    tracedSVG
                                    aspectRatio
                                    src
                                    srcSet
                                    srcWebp
                                    srcSetWebp
                                    sizes
                                    originalImg
                                    originalName
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                    }
                    html
                }
            }
        }
    }
`

export default AboutPage
