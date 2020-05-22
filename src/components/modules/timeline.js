import React, { useState } from 'react'
import styled from 'styled-components'
import { useTimeline, useWindowWidth } from '../../hooks'
import { Module } from '../layout'
import { Button } from '../button'
import { Subsubheading } from '../typography'

const Tabs = styled.article`
    display: flex;
    margin: 6rem 0 0 0;
    display: flex;
    justify-content: center;
    width: 100%;
`

const Tab = styled(Button)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 250ms ease-out;
    cursor: pointer;
    padding: ${ props => props.compact ? '0.25rem' : '0.5rem 1rem' };
    margin: 0 0.25rem;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-color: var(--color-primary);
    border-radius: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: none;
    background-color: ${ props => props.active ? 'var(--color-primary)' : 'var(--color-light)' };
    color: ${ props => props.active ? 'var(--color-light)' : 'var(--color-primary)' };
    &:hover, &:focus {
        background-color: ${ props => props.active ? 'var(--color-primary)' : 'var(--color-primary-light)' } !important;
        color: ${ props => props.active ? 'var(--color-light)' : 'var(--color-primary-dark)' } !important;
        box-shadow: none;
    }
`
const Content = styled.div`
    border: 1px solid var(--color-primary);
    border-radius: 0.25rem;
    padding: 2rem 2rem 0 2rem;
    background-color: var(--color-primary-light);
    z-index: 99;
`

export const TimelineModule = () => {
    const timeline = useTimeline()
    // console.table(timeline)
    const { isCompact } = useWindowWidth()
    const [tabIndex, setTabIndex] = useState(0)
    
    const handleToggleTab = newIndex => event => setTabIndex(newIndex)

    return (
        <Module title="Development Timeline">
            <Tabs>
                {
                    timeline.map((item, i) => (
                        <Tab key={ i } onClick={ handleToggleTab(i) } active={ i === tabIndex } compact={ isCompact }>{ item.title }</Tab>
                    ))
                }
            </Tabs>
            <Content>
                <Subsubheading center={ isCompact }>{ timeline[tabIndex].dates }</Subsubheading>
                <div dangerouslySetInnerHTML={{ __html: timeline[tabIndex].html }} />
            </Content>
        </Module>
    )
}
