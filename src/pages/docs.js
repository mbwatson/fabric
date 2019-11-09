import React from 'react'
import { AnimateOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Paragraph } from '../components/Typography'

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
