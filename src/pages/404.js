import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Paragraph } from '../components/Typography'

const NotFoundPage = () => (
    <FadeOnMount>

        <SEO title="404: Not found" />
        
        <Title>NOT FOUND</Title>

        <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>

    </FadeOnMount>

)

export default NotFoundPage
