import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnimateOnMount } from '../components/Anim'
import { SEO } from '../components/SEO'
import { Title, Subheading, Paragraph } from '../components/Typography'
import { Module } from '../components/Layout'
import { Container, Row, Col } from 'react-grid-system'
import { useWindowWidth } from '../hooks'

const ResponsiveVideoContainer = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    margin-bottom: 2rem;
    position: relative;
    height: 0;
    & iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`

const FaqsPage = props => {
    return (
        <AnimateOnMount>
            <SEO
                title="FABRIC FAQS"
                description="Frequently Asked Questions about FABRIC testbed"
            />
            
            <Title>Frequently Asked Questions</Title>
            
            <Paragraph>
                As we talk with potential FABRIC collaborators, we are getting a lot of wonderful questions.
                We've created some resources to help you navigate those questions.
            </Paragraph>

            <Module title="What is FABRIC?">
                <Container>
                    <Row>
                        <Col xs={ 12 } md={ 6 }>
                            <Subheading>Presentation</Subheading>
                            <ResponsiveVideoContainer>
                                <iframe src="https://drive.google.com/file/d/1Wa8kkuyycSBRNjUZIVYXFbSRHt2n4Vhy/preview" width="100%" height="600"></iframe>
                            </ResponsiveVideoContainer>
                        </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <Subheading>Webinar</Subheading>
                            <ResponsiveVideoContainer>
                               <iframe width="948" height="518" src="https://www.youtube.com/embed/ofLz_7rWTDg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ResponsiveVideoContainer>
                        </Col>
                    </Row>
                </Container>
            </Module>

        </AnimateOnMount>

    )
}

export default FaqsPage
