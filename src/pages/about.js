import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title } from '../components/Typography'
import { Module } from '../components/Layout'

const AboutPage = ({ data }) => {
    return (
        <FadeOnMount>
            <SEO title="About FABRIC" />
            
            <Title>About FABRIC</Title>

            <Module title="Advanced Network Architecture">
                FABRIC enables experimentation with completely new network architectures that have significant built-in intelligence and protocols that perform complex application-specific processing anywhere in the network. 
            </Module>

            <Module title="Experimentation">
                FABRIC allows researchers to experiment with new ideas that will become building blocks of the next generation Internet and address requirements for emerging science applications that depend on large-scale networking.  
            </Module>

            <Module title="Education">
                FABRIC provides a platform on which to educate and train the next generation of researchers on future advanced distributed systems designs.
            </Module>

        </FadeOnMount>

    )
}

export default AboutPage
