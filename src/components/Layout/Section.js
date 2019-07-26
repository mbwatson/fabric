import React from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'

export const SectionContainer = styled.section`
    background-color: inherit;
    margin-bottom: 2rem;
`

export const SectionTitle = styled.h3`
    color: var(--color-primary);
    text-align: ${ props => props.compact ? 'center' : 'left' };
    margin: 2rem 0;
    font-weight: bold;
    background: -webkit-linear-gradient(90deg, var(--color-grey), var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: inherit;
    ${ props => props.left && 'text-align: left;' }
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

export const Section = ({ title, children, centerTitle }) => {
    const { isCompact } = useWindowWidth()
    return (
        <SectionContainer>
            <SectionTitle compact={ isCompact } center={ isCompact || centerTitle }>{ title }</SectionTitle>
            <main>
                { children }
            </main>
        </SectionContainer>
    )
}