import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useScrollPosition, useWindowWidth } from '../hooks'
import { Brand } from '../components/Brand'
import { Menu, MenuItem, MobileMenu, MobileMenuItem } from '../components/Menu'
import { DefaultLayout, Container, Header, Footer, Main, Content } from '../components/Layout'
import { Rotator } from '../components/Transformers'
import { ExpandRightIcon } from '../components/Icons'
import githubLogo from '../images/github-logo.png'
import menu from '../data/menu'
import '../styles/base.scss'
import '../styles/globals.scss'

const WINDOW_WIDTH_THRESHOLD = 1080

const siteDataQuery = graphql`
    query SiteDataQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

const Navigation = () => (
    <Menu>
        { menu.map(item => <MenuItem to={ item.path } activeClassName="active">{ item.text }</MenuItem>) }
    </Menu>
)

const MobileNavigation = () => (
    <MobileMenu>
        { menu.map(item => <MobileMenuItem to={ item.path } activeClassName="active">{ item.text }</MobileMenuItem>) }
    </MobileMenu>
)

const MenuToggleButton = styled.button`
    color: var(--color-black);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-width: 0;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 250ms;
    position: fixed;
    right: 1rem;
    top: 3rem;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-whiter)
    &:hover {
        color: var(--color-white);
        color: #fff;
    }
    &:focus {
        color: #fff;
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
    ${ props => props.visible ? `
        opacity: 1.0;
        pointer-events: default;
        transform: translateX(0%)
    ` : `
        opacity: 0.0;
        pointer-events: none;
        transform: translateX(-100%)
    `
    }
`

export const Page = ({ children }) => {
    const { isCompact } = useWindowWidth()
    const [fixedHeader, setFixedHeader] = useState(false)
    const scrollPosition = useScrollPosition()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const toggleMobileMenuOpen = () => setMobileMenuOpen(!mobileMenuOpen)

    useEffect(() => {
        setFixedHeader(typeof window !== 'undefined' && scrollPosition > 50)
    }, [scrollPosition, isCompact])

    return (
        <StaticQuery query={ siteDataQuery }
            render={
                data => (
                    <DefaultLayout>

                        <Header>
                            <Brand />
                        </Header>

                        { !isCompact && <Navigation /> }
                        { isCompact && <MobileNavigation /> }

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
                                <a href="#"><img src={ githubLogo } alt="GitHub Octocat Logo" style={{ filter: 'invert(100%)' }} /></a>
                            </Container>
                        </Footer>

                    </DefaultLayout>
                )
            }
        />
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
}
