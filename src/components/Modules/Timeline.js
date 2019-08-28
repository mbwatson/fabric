import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Subheading, Paragraph } from '../Typography'
import { Module } from '../Layout'

const Event = styled.div`
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    margin-bottom: 2rem;
    transition: padding 250ms;
    margin-top: 4rem;
    padding: ${ props => props.compact ? '0' : '0 6rem 0 0' };
`

const EventDate = styled(Subheading)`
    transition: padding-left 250ms;
    padding-left: ${ props => props.compact ? '0' : '6rem' };
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
                items.map(({ node: event }) => (
                    <Event compact={ isCompact } key={ event.title }>
                        <EventDate compact={ isCompact }>
                            { event.date }
                        </EventDate>
                        <div>
                            <EventTitle>{ event.title }</EventTitle>
                            <Description>{ event.description }</Description>
                        </div>
                    </Event>
                ))
            }
            <Paragraph right>
                <Link to="#">View Full Development Timeline</Link>
            </Paragraph>
        </Module>
    )
}
