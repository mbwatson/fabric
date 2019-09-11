import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Subheading, Paragraph } from '../Typography'
import { ButtonLink } from '../Button'
import { Module } from '../Layout'
import NetworkIcon from '../../images/capabilities/graph.svg'
import ExperimentationIcon from '../../images/capabilities/flasks.svg'
import EducationIcon from '../../images/capabilities/mortarboard.svg'

const capabilities = [
    {
        icon: NetworkIcon,
        title: 'Advancing Networking Architecture',
        text: 'FABRIC enables experimentation with completely new network architectures that have significant built-in intelligence and protocols that perform complex application-specific processing anywhere in the network.'
    },
    {
        icon: ExperimentationIcon,
        title: 'Fostering Experimentation',
        text: 'FABRIC allows researchers to experiment with new ideas that will become building blocks of the next generation Internet and address requirements for emerging science applications that depend on large-scale networking. '
    },
    {
        icon: EducationIcon,
        title: 'Promoting Education',
        text: 'FABRIC provides a platform on which to educate and train the next generation of researchers on future advanced distributed systems designs.'
    },
]

const Wrapper = styled.div`
    background-color: var(--color-primary-light);
    border-radius: 4px;
    padding: 1rem;
    & button {
        opacity: 0.5;
    }
    &:hover button {
        opacity: 1.0;
    }
`

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Tab = styled.button`
    display: inline;
    margin: 0 5vw;
    background-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)' };
    outline: none;
    padding: 1rem;
    border: 0;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    cursor: pointer;
    transition: background-color 250ms, opacity 250ms;
    &:hover {
        background-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary-dark)' };
    }
`

const TabContent = styled.div`
padding: 1rem;
`

export const CapabilitiesModule = ({ items }) => {
    const { isCompact } = useWindowWidth()
    const [tabIndex, setTabIndex] = useState(0)

    const handleChangeTab = newIndex => event => {
        setTabIndex(newIndex)
    }
    
    return (
        <Module>
            <Wrapper>
                <TabsContainer>
                    {
                        capabilities.map((item, i) => (
                            <Tab onClick={ handleChangeTab(i) } active={ i === tabIndex }><img src={ item.icon } width="100" /></Tab>
                        ))
                    }
                </TabsContainer>
                <br/>
                <TabContent>
                    <Subheading>{ capabilities[tabIndex].title }</Subheading>
                    <Paragraph>
                        { capabilities[tabIndex].text }
                    </Paragraph>
                </TabContent>
                <Paragraph right style={{ width: '100%', margin: 0 }}>
                    <ButtonLink to="/about" secondary>Learn more about how FABRIC works</ButtonLink>
                </Paragraph>
            </Wrapper>
        </Module>
    )
}
