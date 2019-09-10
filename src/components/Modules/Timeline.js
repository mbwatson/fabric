import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Subheading, Paragraph } from '../Typography'
import { ButtonLink } from '../Button'
import { Module } from '../Layout'

const Event = styled.div`
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    margin-bottom: 2rem;
    transition: padding 250ms;
    margin-top: 4rem;
    padding: ${ props => props.compact ? '0' : '0 1rem 0 0' };
`

const EventDate = styled(Subheading)`
    transition: padding-left 250ms;
    min-width: 12rem;
    padding-left: ${ props => props.compact ? '0' : '1rem' };
    text-align: ${ props => props.compact ? 'left' : 'right' };
    white-space: nowrap;
    margin-right: 1rem;
`

const EventTitle = styled(Subheading)`
    margin-bottom: 0.5rem;
    color: var(--color-grey);
    font-family: var(--font-primary);
    font-weight: normal;
`

const Description = styled.div`
`

export const TimelineModule = ({ items }) => {
    const { isCompact } = useWindowWidth()
    
    return (
        <Module title="Timeline">
            {
                items.map(({ node: item }) => (
                    <Event compact={ isCompact } key={ item.frontmatter.title }>
                        <EventDate compact={ isCompact }>
                            { item.frontmatter.title }
                        </EventDate>
                        <div>
                            <EventTitle>{ item.frontmatter.date }</EventTitle>
                            <Description>{ item.excerpt }</Description>
                        </div>
                    </Event>
                ))
            }
            <Paragraph right>
                <ButtonLink to="/timeline">View Full Development Timeline</ButtonLink>
            </Paragraph>
        </Module>
    )
}
