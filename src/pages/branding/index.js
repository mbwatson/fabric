import React from 'react'
import { Link } from 'gatsby'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Heading, Paragraph } from '../../components/typography'

const BrandingPage = () => (
    <AnimateOnMount>
        <SEO
            title="FABRIC Branding Resources"
            description="Branding and PR resources for FABRIC."
            keywords={ ["branding", "logos", "color", "graphics", "style"] }
        />

        <Title>FABRIC Branding</Title>
        
        <section>
            <Heading><Link to="/branding/style">Style Guide</Link></Heading>
            <Paragraph>
                View resources relating to FABRIC's style guidelines, including color palettes and type faces.
                In addition, you will find details on using these together to create components for the web, such as buttons.
            </Paragraph>
        </section>

        <section>
            <Heading><Link to="/branding/logos">Logos</Link></Heading>
            <Paragraph>
                View and learn how to properly use approved FABRIC logos for print and web media.
            </Paragraph>
        </section>

        <section>
            <Heading><Link to="/branding/pr">PR Resources</Link></Heading>
            <Paragraph>
                Here you will find assets for describing FABRIC in print and web media.
            </Paragraph>
        </section>

    </AnimateOnMount>

)

export default BrandingPage
