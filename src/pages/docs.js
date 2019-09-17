import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Paragraph } from '../components/Typography'

const DocsPage = () => (
    <FadeOnMount>
        <SEO title="Documentation" />
        
        <Title>Documentation</Title>

        <Paragraph>
            Coming soon.
        </Paragraph>
    </FadeOnMount>

)

export default DocsPage
