import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Paragraph } from '../components/Typography'
import { ContactForm } from '../components/Forms'

const ContactPage = () => (
    <FadeOnMount>
        <SEO title="Contact" />

        <Title>Contact</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos enim aliquid, unde.
        </Paragraph>

        <ContactForm />

    </FadeOnMount>

)

export default ContactPage
