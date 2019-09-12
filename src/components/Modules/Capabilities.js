import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useWindowWidth } from '../../hooks'
import { Heading, Paragraph } from '../Typography'
import { ButtonLink } from '../Button'
import { Module } from '../Layout'
import { FadeOnMount } from '../Anim'

const capabilitiesQuery = graphql`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "^/capabilities/"}}) {
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
`

const Tab = styled.button`
    display: inline;
    margin: 0;
    background-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)' };
    transform: ${ props => props.active ? 'scale(1.1)' : 'scale(0.9)' };
    outline: none;
    padding: 1.25rem;
    border: 0;
    border-radius: 50%;
    min-height: 80px;
    max-height: 80px;
    min-width: 80px;
    max-width: 80px;
    cursor: pointer;
    transition: background-color 250ms, opacity 250ms, transform 250ms;
    &:hover {
        background-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary-dark)' };
    }
`

const CapabilityHeading = styled(Heading)`
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
                                    <Tab active={ i === tabIndex } onMouseOver={ handleChangeTab(i) }>
                                        <Img fluid={ item.node.frontmatter.icon.childImageSharp.fluid } />
                                    </Tab>
                                ))
                            }
                        </TabsContainer>
                        <br/>
                        {
                            data.allMarkdownRemark.capabilities.map(({ node }, i) => 
                                i === tabIndex && <FadeOnMount duration="750"><CapabilityHeading center>{ node.frontmatter.title }</CapabilityHeading></FadeOnMount>
                            )
                        }
                        <Paragraph center>
                            <ButtonLink to="/about" secondary>Learn More</ButtonLink>
                        </Paragraph>
                    </Module>
                )
            }
        />
    )
}
