import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useCapabilities, useWindowWidth } from '../../hooks'
import { Subheading, Paragraph } from '../typography'
import { ButtonLink } from '../button'
import { Module } from '../layout'

const Wrapper = styled(Module)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    border-radius: 3px;
    min-height: ${ props => props.compact ? '60px': '80px' };
    max-height: ${ props => props.compact ? '60px': '80px' };
    min-width: ${ props => props.compact ? '60px': '80px' };
    max-width: ${ props => props.compact ? '60px': '80px' };
    filter: drop-shadow(0 0 3px #00000033);
    transition:
        background-color 250ms ease-out,
        ${ props => props.active ? 'transform 250ms 0ms ease-out' : 'transform 250ms 0ms ease-in' };
`

const CapabilityHeading = styled(Subheading)`
    color: var(--color-secondary);
    position: absolute;
    width: 100%;
    font-weight: bold;
    transition: opacity 250ms, transform 500ms ease-out;
    opacity: ${ props => props.active ? 1 : 0 };
    ${ props => props.active ? `
        transform: perspective(600px) translate3d(0, 0, 0);
    ` : `
        transform: perspective(600px) translate3d(0, 0, -200px);
    `
    }
    &::before {
        content: "FABRIC ";
        color: var(--color-primary);
        font-weight: normal;
    }
`

export const CapabilitiesModule = ({ capabilitys }) => {
    const capabilities = useCapabilities()
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
        <Wrapper>
            <TabsContainer>
                {
                    capabilities.map((capability, i) => (
                        <Tab key={ i } active={ i === tabIndex } onMouseOver={ handleChangeTab(i) } onFocus={ handleChangeTab(i) } compact={ isCompact }>
                            <Img fluid={ capability.icon.childImageSharp.fluid } />
                        </Tab>
                    ))
                }
            </TabsContainer>

            <br/>
            
            <div style={{ position: 'relative', minHeight: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    capabilities.map((capability, i) => 
                        <CapabilityHeading center key={ i } active={ i === tabIndex }>{ capability.title }</CapabilityHeading>
                    )
                }
            </div>
            
            <Paragraph center>
                <ButtonLink to="/about" secondary>Learn More</ButtonLink>
            </Paragraph>
        </Wrapper>
    )
}
