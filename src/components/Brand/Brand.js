import React from 'react'
import styled from 'styled-components'
// import fabricLogo from '../../images/surface_small.png'
import fabricLogo from '../../images/fabric-brand.png'

export const BrandContainer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: mayeka;
    font-size: 300%;
    transition: font-size 250ms;
    padding: 0;
    margin: 0;
    letter-spacing: 4px;
    background: -webkit-linear-gradient(var(--color-white), var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Brand = props => {
    return (
        <BrandContainer>
            <img style={{ margin: '0.25rem 1rem' }} width="100" src={ fabricLogo } alt="Fabric logo depicting a piece of flowing fabric"/>
            <div>FABRIC</div>
        </BrandContainer>
    )
}