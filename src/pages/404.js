import React from 'react'
import { SEO } from '../components/SEO'
import { Page } from '../layouts'
import { Title, Paragraph } from '../components/Typography'

const NotFoundPage = () => (
    <Page>

        <SEO title="404: Not found" />
        
        <Title>NOT FOUND</Title>

        <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>

    </Page>

)

export default NotFoundPage
