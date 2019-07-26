import React from 'react'
import { SEO } from '../components/SEO'
import { Page } from '../layouts'
import { Title, Paragraph } from '../components/Typography'
import { ContactForm } from '../components/Forms'

const ContactPage = () => (
    <Page>
        <SEO title="Contact" />

        <Title>Contact</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos enim aliquid, unde.
        </Paragraph>

        <ContactForm />

    </Page>

)

export default ContactPage
