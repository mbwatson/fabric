import React from 'react'
import { AnimateOnMount } from '../components/anim'
import { SEO } from '../components/seo'
import { Title, Paragraph } from '../components/typography'

const NotFoundPage = () => (
    <AnimateOnMount>

        <SEO title="404: Not found" />
        
        <Title>NOT FOUND</Title>

        <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>

    </AnimateOnMount>

)

export default NotFoundPage
