import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AnimateOnMount } from '../components/anim'
import { Link } from 'gatsby'
import { useWindowWidth, useScrollPosition } from '../hooks'
import { Brand } from '../components/brand'
import { Menu, MobileMenu } from '../components/menu'
import { DefaultLayout, Container, Header, Footer, Main } from '../components/layout'
import githubLogo from '../images/icons/github-logo.png'
import twitterLogo from '../images/icons/twitter-logo.png'
import youtubeLogo from '../images/icons/youtube-logo.png'
import emailIcon from '../images/icons/envelope-icon.png'
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
    max-width: 250px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

const SocialIcon = styled.img`
    display: block;
    margin: 0;
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
                <Container
                    maxWidth={ WINDOW_WIDTH_THRESHOLD }
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <SocialLinks>
                        <a href="https://twitter.com/FABRICtestbed" target="_blank" rel="noopener noreferrer"><SocialIcon src={ twitterLogo } alt="Twitter Logo" /></a> &nbsp;&nbsp;
                        <a href="https://github.com/orgs/fabric-testbed/" target="_blank" rel="noopener noreferrer"><SocialIcon src={ githubLogo } alt="GitHub Octocat Logo" /></a> &nbsp;&nbsp;
                        <a href="http://bit.ly/FABRICYouTube" target="_blank" rel="noopener noreferrer"><SocialIcon src={ youtubeLogo } alt="Youtube Logo" /></a> &nbsp;&nbsp;
                        <a href="mailto:info@fabric-testbed.net"><SocialIcon src={ emailIcon } alt="Email Icon" /></a>
                    </SocialLinks>

                    <div>&copy; FABRIC { (new Date()).getFullYear() }</div>
                </Container>
            </Footer>

        </DefaultLayout> 
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
}
