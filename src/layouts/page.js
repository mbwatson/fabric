import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AnimateOnMount } from '../components/anim'
import { Link } from 'gatsby'
import { useWindowWidth, useScrollPosition } from '../hooks'
import { Brand } from '../components/brand'
import { Menu, MobileMenu } from '../components/menu'
import { DefaultLayout, Container, Header, Footer, Main } from '../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { ButtonLink, IconButton } from '../components/button'
import { EmailIcon, GithubIcon, TwitterIcon, YoutubeIcon } from '../components/icons'
import { ExternalLink } from '../components/link'
import { CloseIcon } from '../components/icons'
import menu from '../data/menu'

const WINDOW_WIDTH_THRESHOLD = 1080

const StickyWrapper = styled.div`
    z-index: 99;
    position: sticky;
    left: ${ props => props.stuck ? '0' : 'unset' };
    right: ${ props => props.stuck ? '0' : 'unset' };
    top: ${ props => props.stuck ? '0' : 'unset' };
    ${ props => props.dropShadow && 'filter: drop-shadow(0 0 5px #00000066);' }
    transition: filter 1000ms;
`

const GetInvolvedFooter = styled(Footer)`
    position: relative;
    background-image: linear-gradient(140deg, var(--color-grey), var(--color-dark));
    box-shadow: none;
    a {
        filter: none;
        text-decoration: none;
    }
`

const SocialLinks = styled.div`
    // width: 100%;
    margin: auto;
    max-width: 250px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
`

const CloseButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
`

export const Page = ({ children }) => {
    const { isCompact } = useWindowWidth(0)
    const headerElement = useRef(null)
    const scrollPosition = useScrollPosition()
    const [stuckMenu, setStuckMenu] = useState(false)
    const [getInvolvedCtaOpen, setGetInvolvedCtaOpen] = useState(true)

    useEffect(() => {
        setStuckMenu(scrollPosition > headerElement.current.getBoundingClientRect().height)
    }, [scrollPosition])

    const handleCloseGetInvolvedCta = () => setGetInvolvedCtaOpen(false)

    return (
        <DefaultLayout>
            <Header ref={ headerElement }>
                <AnimateOnMount scale="2">
                    <Link to ="/">
                        <Brand />
                    </Link>
                </AnimateOnMount>
            </Header>
            
            <StickyWrapper stuck={ stuckMenu } dropShadow={ stuckMenu }>
                {
                    isCompact
                        ? <MobileMenu stuck={ stuckMenu } items={ menu } showBrand={ stuckMenu } />
                        : <Menu items={ menu } stuck={ stuckMenu } showBrand={ stuckMenu } />
                }
            </StickyWrapper>

            <Main>
                <Container maxWidth={ WINDOW_WIDTH_THRESHOLD } margin="0 auto 4rem auto">
                    { children }
                </Container>
            </Main>

            {
                getInvolvedCtaOpen && (
                    <GetInvolvedFooter>
                        <CloseButton onClick={ handleCloseGetInvolvedCta }>
                            <CloseIcon fill="var(--color-black)" size={ 24 } />
                        </CloseButton>
                        <Grid style={{ width: '100%' }}>
                            <Row>
                                <Col xs={ 12 } md={ 7 }>
                                    <Subheading right={ !isCompact } center={ isCompact } style={{ color: '#fff' }}>
                                        Want to stay current on updates or learn how to get involved in the FABRIC community?
                                    </Subheading>
                                    <Heading right={ !isCompact } center={ isCompact } style={{ color: '#fff' }} noMargin={ !isCompact }>
                                        We'd love to hear from you!
                                    </Heading>
                                </Col>
                                <Col xs={ 12 } md={ 5 } style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <ButtonLink secondary to="/get-involved" style={{ padding: '1rem 1.75rem' }}>
                                        Get Involved Now!
                                    </ButtonLink>
                                </Col>
                            </Row>
                        </Grid>
                    </GetInvolvedFooter>
                )
            }

            <Footer>
                <Container maxWidth={ WINDOW_WIDTH_THRESHOLD }>
                    <Grid fluid>
                        <Row>
                            <Col xs={ 12 } md={ 8 }>
                                <Paragraph>
                                    <Link to="/branding">Branding and PR Resources</Link><br/>
                                    &copy; FABRIC { (new Date()).getFullYear() }
                                </Paragraph>
                            </Col>
                            <Col xs={ 12 } md={ 4  }>
                                <SocialLinks>
                                    <ExternalLink to="https://twitter.com/FABRICtestbed"><TwitterIcon fill="var(--color-grey)" size={ 24 } alt="View FABRIC on Twitter" /></ExternalLink> &nbsp;&nbsp;
                                    <ExternalLink to="https://github.com/orgs/fabric-testbed/"><GithubIcon fill="var(--color-grey)" size={ 24 } alt="View FABRIC GitHub Organization" /></ExternalLink> &nbsp;&nbsp;
                                    <ExternalLink to="http://bit.ly/FABRICYouTube"><YoutubeIcon fill="var(--color-grey)" size={ 24 } alt="View FABRIC videos on YouTube" /></ExternalLink> &nbsp;&nbsp;
                                    <ExternalLink to="mailto:info@fabric-testbed.net"><EmailIcon fill="var(--color-grey)" size={ 24 } alt="Email FABRIC" /></ExternalLink>
                                </SocialLinks>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={ 12 }>
                            </Col>
                        </Row>
                    </Grid>
                </Container>
            </Footer>

        </DefaultLayout> 
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
}
