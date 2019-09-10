import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Heading, Paragraph } from '../components/Typography'
import { List, ListItem } from '../components/List'
import { GetInvolvedForm } from '../components/Forms'

const GetInvolvedPage = () => (
    <FadeOnMount>
        <SEO title="Get Involved" />
        
        <Title>Get Involved with FABRIC</Title>

        <Paragraph>
            At FABRIC, we welcome and value collaboration in any form it may present itself.
            Although this is not an exhautive list, some areas in which people can contribute to the success of FABRIC are listed below.
        </Paragraph>

        <List>
            <ListItem primary="text" />
            <ListItem primary="one" />
            <ListItem primary="two" />
            <ListItem primary="three" />
        </List>
        
        <Paragraph>
            Can't help out in the ways outlined above? That's great!
            We're excited for every opportunity, so please get in touch to tell us about the unique knowledge and skills you or your organization that can aid in FABRIC's success!
        </Paragraph>

        <Heading>How can you contribute?</Heading>

        <GetInvolvedForm />

    </FadeOnMount>

)

export default GetInvolvedPage
