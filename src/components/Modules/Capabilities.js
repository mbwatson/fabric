import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useWindowWidth } from '../../hooks'
import { Subheading, Paragraph } from '../Typography'
import { ButtonLink } from '../Button'
import { Module } from '../Layout'
import { AnimateOnMount } from '../Anim'

const capabilitiesQuery = graphql`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "^/capabilities/"}}, sort: {order: ASC, fields: fileAbsolutePath}) {
            capabilities: edges {
                node {
                    frontmatter {
                        title
                        excerpt
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
                }
            }
        }
    }
`

const TabsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: auto;
`

const Tab = styled.div`
    display: inline;
    margin: 0;
    background-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)' };
    transform: ${ props => props.active ? 'scale(1.1)' : 'scale(0.9)' };
    padding: ${ props => props.compact ? '0.75rem': '1.25rem' };
    border-radius: 50%;
    min-height: ${ props => props.compact ? '60px': '80px' };
    max-height: ${ props => props.compact ? '60px': '80px' };
    min-width: ${ props => props.compact ? '60px': '80px' };
    max-width: ${ props => props.compact ? '60px': '80px' };
    cursor: pointer;
    filter: drop-shadow(0 0 3px #00000033);
    transition:
        background-color 250ms ease-out,
        ${ props => props.active ? 'transform 250ms 0ms ease-out' : 'transform 500ms 0ms ease-in' };
`

const CapabilityHeading = styled(Subheading)`
    color: var(--color-secondary);
    font-weight: bold;
    &::before {
        content: "FABRIC ";
        color: var(--color-primary);
        font-weight: normal;
    }
`

export const CapabilitiesModule = ({ items }) => {
    const { isCompact } = useWindowWidth()
    const [tabIndex, setTabIndex] = useState(0)
    const indexRef = useRef(tabIndex)
    indexRef.current = tabIndex

    const handleChangeTab = newIndex => event => setTabIndex(newIndex)
    
    useEffect(() => {
        const timer = setInterval(() => setTabIndex((indexRef.current + 1) % 5), 3000)
        return () => clearInterval(timer)
    }, [tabIndex])

    return (
        <StaticQuery
            query={ capabilitiesQuery }
            render={
                data => (
                    <Module>
                        <TabsContainer>
                            {
                                data.allMarkdownRemark.capabilities.map((item, i) => (
                                    <Tab key={ i } active={ i === tabIndex } onMouseOver={ handleChangeTab(i) } compact={ isCompact }>
                                        <Img fluid={ item.node.frontmatter.icon.childImageSharp.fluid } />
                                    </Tab>
                                ))
                            }
                        </TabsContainer>
                        <br/>
                        {
                            data.allMarkdownRemark.capabilities.map(({ node }, i) => 
                                i === tabIndex && <AnimateOnMount key={ i } mass="5" scale="1.1"><CapabilityHeading center>{ node.frontmatter.title }</CapabilityHeading></AnimateOnMount>
                            )
                        }
                        <Paragraph center>
                            <ButtonLink to="/about/overview" secondary>Learn More</ButtonLink>
                        </Paragraph>
                    </Module>
                )
            }
        />
    )
}
