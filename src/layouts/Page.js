import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useScrollPosition, useWindowWidth } from '../hooks'
import { Brand } from '../components/Brand'
import { Menu, MenuItem, MobileMenu, MobileMenuItem } from '../components/Menu'
import { DefaultLayout, Container, Header, Footer, Main } from '../components/Layout'
import githubLogo from '../images/github-logo.png'
import menu from '../data/menu'
import '../styles/base.scss'
import '../styles/globals.scss'

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

const Navigation = () => (
    <Menu>
        { menu.map(item => <MenuItem key={ item.path } to={ item.path } activeClassName="active">{ item.text }</MenuItem>) }
    </Menu>
)

const MobileNavigation = () => (
    <MobileMenu>
        { menu.map(item => <MobileMenuItem key={ item.path } to={ item.path } activeClassName="active">{ item.text }</MobileMenuItem>) }
    </MobileMenu>
)

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
                <Brand />
            </Header>
            
            <StickyWrapper stuck={ stuckMenu } dropShadow={ stuckMenu }>
                { isCompact ? <MobileNavigation /> : <Navigation /> }
            </StickyWrapper>

            <Main>
                <Container maxWidth={ WINDOW_WIDTH_THRESHOLD }>
                    { children }
                </Container>
            </Main>

            <Footer>
                <Container
                    maxWidth={ WINDOW_WIDTH_THRESHOLD }
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div>
                        &copy; FABRIC { (new Date()).getFullYear() }
                    </div>
                    <a href="https://github.com"><img src={ githubLogo } alt="GitHub Octocat Logo" style={{ filter: 'invert(100%)' }} /></a>
                </Container>
            </Footer>

        </DefaultLayout>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
}
