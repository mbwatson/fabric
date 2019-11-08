import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AnimateOnMount } from '../components/Anim'
import { Link } from 'gatsby'
import { useWindowWidth, useScrollPosition } from '../hooks'
import { Brand } from '../components/Brand'
import { Paragraph } from '../components/Typography'
import { Menu, MobileMenu } from '../components/Menu'
import { DefaultLayout, Container, Header, Footer, Main } from '../components/Layout'
import { ButtonLink } from '../components/Button'
import { Container as Grid, Row, Col } from 'react-grid-system'
import githubLogo from '../images/github-logo.png'
import twitterLogo from '../images/twitter-logo.png'
import youtubeLogo from '../images/youtube-logo.png'
import emailIcon from '../images/envelope-icon.png'
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

const SocialLinks = styled.div`
    width: 100%;
    max-width: 300px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
    // border: 1px solid #9f9;
`

const SocialIcon = styled.img`
    margin: 0;
    display: block;
    transition: filter 250ms;
    filter: opacity(0.5);
    &:hover {
        filter: opacity(1.0);
    }
`

export const Page = ({ children }) => {
    const { isCompact } = useWindowWidth(0)
    const headerElement = useRef(null)
    const scrollPosition = useScrollPosition()
    const [stuckMenu, setStuckMenu] = useState(false)

    useEffect(() => {
        setStuckMenu(scrollPosition > headerElement.current.getBoundingClientRect().height)
    }, [scrollPosition])

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
                <Container maxWidth={ WINDOW_WIDTH_THRESHOLD }>
                    { children }
                </Container>
            </Main>

            <Footer>
                <Grid style={{ width: '100%' }}> 
                    <Row>
                        <Col xs={ 12 } sm={ 6 } style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <SocialLinks>
                                <a href="https://twitter.com/FABRICtestbed" target="_blank" rel="noopener noreferrer"><SocialIcon src={ twitterLogo } alt="Twitter Logo" /></a> &nbsp;&nbsp;
                                <a href="https://github.com/orgs/fabric-testbed/" target="_blank" rel="noopener noreferrer"><SocialIcon src={ githubLogo } alt="GitHub Octocat Logo" /></a> &nbsp;&nbsp;
                                <a href="http://bit.ly/FABRICYouTube" target="_blank" rel="noopener noreferrer"><SocialIcon src={ youtubeLogo } alt="Youtube Logo" /></a> &nbsp;&nbsp;
                                <a href="mailto:info@fabric-testbed.net"><SocialIcon src={ emailIcon } alt="Email Icon" /></a>
                            </SocialLinks>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } style={{ width: '100%' }}>
                            <Paragraph center>
                                <ButtonLink to="/get-involved" primary>Get Involved</ButtonLink>
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <Paragraph center>
                                &copy; FABRIC { (new Date()).getFullYear() }
                            </Paragraph>
                        </Col>
                    </Row>
                </Grid>
            </Footer>

        </DefaultLayout> 
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
}
