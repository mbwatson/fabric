import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Subheading, Paragraph } from '../../components/typography'
import { Module } from '../../components/layout'
import { useCapabilities, useWindowWidth } from '../../hooks'

const CapabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    &:hover div {
        opacity: 1.0;
    }
    margin: 2rem 0;
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
    margin-right: 2rem;
    transition: background-color 500ms;
    border-radius: 50%;
    transition: opacity 250ms;
    background-color: var(--color-primary);
    opacity: 0.75;
    & img {
        padding: 1rem;
    }
`

const CapabilityTitle = styled(Subheading)`
    margin: 0;
`

const CapabilityBody = styled.div`
    margin: ${ props => props.compact ? '1rem 0 1rem 0' : '0 0 0 calc(75px + 2rem)' };
`

const AboutPage = () => {
    const capabilities = useCapabilities()
    const { isCompact } = useWindowWidth()

    return (
        <AnimateOnMount>
            <SEO
                title="About FABRIC"
                description="View details about the FABRIC Testbed. Read about the cutting-edge technologies that are utilized by FABRIC. Additionally, view FABRIC branding and graphics resources."
            />
            
            <Title>About FABRIC</Title>

            <Module>
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
            </Module>
            
            <Module title="Capabilities">
                {
                    capabilities.map(capability => {
                        return (
                            <CapabilityContainer key={ capability.title }>
                                <CapabilityHead>
                                    <CapabilityIcon fluid={ capability.icon.childImageSharp.fluid } />
                                    <CapabilityTitle>FABRIC { capability.title }</CapabilityTitle>
                                </CapabilityHead>
                                <CapabilityBody compact={ isCompact }>
                                    <Paragraph dangerouslySetInnerHTML={{ __html: capability.html }} />
                                </CapabilityBody>
                            </CapabilityContainer>
                        )
                    })
                }
            </Module>
            
        </AnimateOnMount>

    )
}

export default AboutPage
