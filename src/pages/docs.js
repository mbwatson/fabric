import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Paragraph } from '../components/Typography'

const DocsPage = () => (
    <FadeOnMount>
        <SEO title="Documentation" />
        
        <Title>Documentation</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos enim aliquid, unde.
        </Paragraph>
    </FadeOnMount>

)

export default DocsPage
