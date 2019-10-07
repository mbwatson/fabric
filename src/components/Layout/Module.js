import React from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Heading } from '../Typography'

export const ModuleContainer = styled.section`
    background-color: inherit;
    margin-bottom: 4rem;
`

export const ModuleTitle = styled(Heading)`
    color: var(--color-primary);
    text-align: inherit;
    margin: 2rem 0;
    ${ props => props.left ? 'text-align: left;' : undefined }
    ${ props => props.center ? 'text-align: center;' : undefined }
    ${ props => props.right ? 'text-align: right;' : undefined }
`

export const Module = ({ title = '', children, centerTitle, ...rest }) => {
    const { isCompact } = useWindowWidth()
    return (
        <ModuleContainer { ...rest }>
            <ModuleTitle center={ isCompact || centerTitle }>{ title }</ModuleTitle>
            <main>
                { children }
            </main>
        </ModuleContainer>
    )
}
