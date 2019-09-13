import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Module } from '../Layout'
import { FadeOnMount } from '../Anim'

const TimelineTabs = styled.article`
    padding-left: 2rem;
    display: flex;
    margin: 5rem 0;
    display: flex;
    justify-content: center;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        background-image: linear-gradient(90deg, transparent 0, var(--color-primary) 50%, transparent 100%);
   }
`

const TimelineTab = styled.h4`
    padding: 0;
    position: relative;
    transform: rotate(-40deg) translate(-1.9rem);
    transform-origin: 0% 50%;
    cursor: pointer;
    transition: color 250ms;
    color: var(--color-primary);
    &:hover {
        color: ${ props => props.active ? 'var(--color-secondary-dark)' : 'var(--color-primary-dark)' };
        &::before { // nodes
            background-color: ${ props => props.active ? 'var(--color-secondary-dark)' : 'var(--color-primary-dark)' };
            border-color: ${ props => props.active ? 'var(--color-secondary-dark)' : 'var(--color-primary-dark)' };
        }
    }
    &::before { // nodes
        content: "";
        position: absolute;
        left: -1.5rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        background-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)' };
        border-radius: 50%;
        border-width: 3px;
        border-style: solid;
        border-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)' };
        transition: bckground-color 250ms, border-color 500ms;
    }
    ${ props => props.active && `color: var(--color-secondary);` }
`

const TimelineContent = styled.div``

export const TimelineModule = ({ items }) => {
    const { isCompact } = useWindowWidth()
    const [tabIndex, setTabIndex] = useState(0)
    
    const handleToggleTab = newIndex => event => {
        console.log(event)
        setTabIndex(newIndex)
    }

    return (
        <Module title="Development Timeline">
            <TimelineTabs>
                {
                    items.map(({ node: item }, i) => (
                        <TimelineTab onClick={ handleToggleTab(i) } key={ item.frontmatter.title } active={ i === tabIndex }>{ item.frontmatter.title }</TimelineTab>
                    ))
                }
            </TimelineTabs>
            <TimelineContent>
                <FadeOnMount>
                    <div dangerouslySetInnerHTML={{ __html: items[tabIndex].node.html }} />
                </FadeOnMount>
            </TimelineContent>
        </Module>
    )
}
