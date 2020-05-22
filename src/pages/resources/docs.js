import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Paragraph } from '../../components/typography'

const DocsPage = () => (
    <AnimateOnMount>
        <SEO title="Documentation" />
        
        <Title>Documentation</Title>

        <Paragraph>
            Coming soon.
        </Paragraph>
    </AnimateOnMount>

)

export default DocsPage
