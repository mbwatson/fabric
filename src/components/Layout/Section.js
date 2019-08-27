import React from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Heading } from '../Typography'

export const SectionContainer = styled.section`
    background-color: inherit;
    margin-bottom: 4rem;
`

export const SectionTitle = styled(Heading)`
    color: var(--color-primary);
    text-align: inherit;
    margin: 2rem 0;
    ${ props => props.left && 'text-align: left;' }
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

export const Section = ({ title = '', children, centerTitle }) => {
    const { isCompact } = useWindowWidth()
    return (
        <SectionContainer>
            <SectionTitle center={ isCompact || centerTitle }>{ title }</SectionTitle>
            <main>
                { children }
            </main>
        </SectionContainer>
    )
}
