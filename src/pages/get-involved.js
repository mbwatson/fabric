import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Paragraph } from '../components/Typography'
import HubspotForm from 'react-hubspot-form'

const GetInvolvedPage = () => (
    <FadeOnMount>
        <SEO
            title="Get Involved" 
            description="We're excited to hear from the community, so feel free to contact us to learn how you or your organization can get involved with FABRIC." 
            keywords={ ["collaboration", "contact"] }
        />
        
        <Title>Get Involved with FABRIC</Title>
        
        <Paragraph>
            We are looking for interested experimenters and facility partners.
            The FABRIC team will attend community events to share our plans and informally gather community feedback.
            Starting in Spring 2020 we will host FABRIC workshops to build a vibrant community. 
        </Paragraph>
        <Paragraph>
            Interested in learning more about FABRIC?
            Let us know and be the first to hear about our community workshops, events, and news!
        </Paragraph>

        <HubspotForm
            portalId='6342968'
            formId='05693d2f-b08d-4def-8fa7-d31d54c74a59'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
        />
    </FadeOnMount>

)

export default GetInvolvedPage
