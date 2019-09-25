import React from 'react'
import styled from 'styled-components'
// import fabricLogo from '../../images/surface_small.png'
import fabricLogo from '../../images/fabric-brand.png'

export const BrandContainer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 300%;
    transition: font-size 250ms;
    letter-spacing: 4px;
    padding: 0;
    margin: 0;
`

const BrandText = styled.div`
    font-family: --var(font-brand);
    font-weight: 300;
    background: -webkit-linear-gradient(var(--color-white), var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-mask-image: linear-gradient(blue, green);
`

export const Brand = props => {
    return (
        <BrandContainer>
            <img style={{ margin: '0.25rem 1rem' }} width="100" src={ fabricLogo } alt="Fabric logo depicting a piece of flowing fabric"/>
             <BrandText>FABRIC</BrandText>
        </BrandContainer>
    )
}