import React from 'react'
import PropTypes from 'prop-types'
import { useWindowWidth } from '../hooks'
import { Brand } from '../components/Brand'
import { Menu, MenuItem, MobileMenu, MobileMenuItem } from '../components/Menu'
import { DefaultLayout, Container, Header, Footer, Main } from '../components/Layout'
import githubLogo from '../images/github-logo.png'
import menu from '../data/menu'
import '../styles/base.scss'
import '../styles/globals.scss'

const WINDOW_WIDTH_THRESHOLD = 1080

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

export const Page = ({ children }) => {
    const { isCompact } = useWindowWidth()

    return (
        <DefaultLayout>

            <Header>
                <Brand />
            </Header>

            { isCompact ? <MobileNavigation /> : <Navigation /> }

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
