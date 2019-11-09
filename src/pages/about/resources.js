import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnimateOnMount } from '../../components/Anim'
import { SEO } from '../../components/SEO'
import { Title, Subheading, Paragraph } from '../../components/Typography'
import { Module } from '../../components/Layout'
import { Container, Row, Col } from 'react-grid-system'
import { useWindowWidth } from '../../hooks'

const ImagePreviewColumn = styled(Col)`
    text-align: center;
`

const ImagePreview = styled.img`
    max-height: 200px;
`

const ImageResource = ({ title, url }) => {
    const { isCompact } = useWindowWidth()

    return (
        <Container>
            <Row>
                <ImagePreviewColumn xs={ 12 } sm={ 3 }>
                    <ImagePreview src={ url } />
                </ImagePreviewColumn>
                <Col xs={ 12 } sm={ 9 }>
                    <Subheading center={ isCompact }>{ title }</Subheading>
                    <Paragraph center={ isCompact }>
                        <a href={ url } target="_blank" rel="noreferrer noopener">{ url }</a>
                    </Paragraph>
                </Col>
            </Row>
        </Container>
    )
}

const ResourcesPage = props => {
    return (
        <AnimateOnMount>
            <SEO
                title="FABRIC PR Resources"
                description="PR resource library for FABRIC."
            />
            
            <Title>FABRIC PR Resources</Title>

            <Module title="Branding & Style Guide">
                <Paragraph>
                    Do you want to write about FABRIC or use our branding resources?
                    Feel free to download and use our <Link to="/about/logos">FABRIC logos</Link>, and
                    consult our <a href="https://www.dropbox.com/s/pa1tkxoktvn8mmw/2019_NRIG_FABRIC%20Style%20Guide.pdf?dl=0" target="_blank" rel="noopener noreferrer">Branding & Style Guide</a> to
                    see how to best utilize FABRIC brand assets, including our logos, colors, typography.
                </Paragraph>
            </Module>

            <Module title="Graphics">
                <Paragraph>
                    We make detailed graphics to illustrate features and plans for FABRIC.
                    They are made publicly accessible,
                    so feel free to use the graphics below to help spread the word about FABRIC.
                </Paragraph>

                <ImageResource
                    title="Anticipated FABRIC Topology Map"
                    url="https://www.dropbox.com/s/keumrew5vqoctzn/fabric_map.png?raw=1"
                />
                
                <ImageResource
                    title="Anticipated FABRIC Topology Map with Partner Logos"
                    url="https://www.dropbox.com/s/z1jszcpjwasvjfc/fabric_map_with-partner-logos.png?raw=1"
                />
            </Module>

        </AnimateOnMount>

    )
}

export default ResourcesPage
