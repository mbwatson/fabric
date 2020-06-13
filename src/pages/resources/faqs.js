import React from 'react'
import styled from 'styled-components'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Subheading, Paragraph } from '../../components/typography'
import { Module } from '../../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { useFaqs } from '../../hooks'
import { Collapser } from '../../components/collapser'

const toKebabCase = str =>
    str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-')

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
    const faqs = useFaqs()

    return (
        <AnimateOnMount>
            <SEO
                title="FABRIC FAQS"
                description="Frequently Asked Questions about FABRIC testbed"
            />
            
            <Title>Frequently Asked Questions</Title>
            
            <Paragraph>
                As we talk with potential FABRIC collaborators, we are getting a lot of wonderful questions.
                We've created a list of questions that we hear often to help you navigate your own FABRIC curiosities.
            </Paragraph>

            <Module title="">
                {
                    faqs.map(({ question, answer }, i) => (
                        <Collapser
                            key={ i }
                            ariaId={ toKebabCase(question) }
                            title={ <Subheading style={{ margin: 0 }}>{ i + 1 }. { question }</Subheading> }
                            content={ answer }
                        />
                    ))
                }
            </Module>

            <Module title="What is FABRIC?">
                <Paragraph>
                    Below are two resources&mdash;a presentation and a webinar&mdash;that
                    may provide further information to assist with answering your FABRIC questions.
                </Paragraph>

                <Grid fluid>

                    <Row>
                        <Col xs={ 12 } md={ 6 }>
                            <Subheading>Presentation</Subheading>
                            <ResponsiveVideoContainer>
                                <iframe title="Presentation: What is FABRIC?" src="https://drive.google.com/file/d/1Wa8kkuyycSBRNjUZIVYXFbSRHt2n4Vhy/preview" width="100%" height="600"></iframe>
                            </ResponsiveVideoContainer>
                        </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <Subheading>Webinar</Subheading>
                            <ResponsiveVideoContainer>
                               <iframe title="Webinar: What is FABRIC?" width="948" height="518" src="https://www.youtube.com/embed/ofLz_7rWTDg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </ResponsiveVideoContainer>
                        </Col>
                    </Row>
                </Grid>
            </Module>

        </AnimateOnMount>

    )
}

export default FaqsPage
