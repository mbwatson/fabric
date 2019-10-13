import React from 'react'
import { FadeOnMount } from '../components/anim'
import { SEO } from '../components/seo'
import { Title, Paragraph } from '../components/typography'

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
