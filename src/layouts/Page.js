import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useWindowWidth, useScrollPosition } from '../hooks'
import { Brand } from '../components/Brand'
import { Menu, MobileMenu } from '../components/Menu'
import { DefaultLayout, Container, Header, Footer, Main } from '../components/Layout'
import githubLogo from '../images/github-logo.png'
import twitterLogo from '../images/twitter-logo.png'
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
    max-width: 200px;
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

// const Navigation = () => {
//     const [activeSubmenu, setActiveSubmenu] = useState(-1)

//     const handleActivateSubmenu = index => event => setActiveSubmenu(index)
//     const handleCloseAllSubmenus = () => setActiveSubmenu(-1)

//     return (
//         <Menu>
//             {
//                 menu.map((item, currentIndex) => {
//                     return (
//                         <MenuItem key={ item.path } onMouseOver={ item.submenu && handleActivateSubmenu(currentIndex) } onMouseOut={ item.submenu && handleCloseAllSubmenus }>
//                             <MenuLink to={ item.path } activeClassName="active" partiallyActive={ true }>{ item.text }</MenuLink>
//                             {
//                                 item.submenu && (
//                                     <Submenu active={ activeSubmenu === currentIndex } onClick={ handleCloseAllSubmenus }>
//                                         { item.submenu.map(item => <MenuLink to={ item.path } activeClassName="active" partiallyActive={ true }>{ item.text }</MenuLink>) }
//                                     </Submenu>
//                                 )
//                             }
//                         </MenuItem>
//                     )}
//                 )
//             }
//         </Menu>
//     )
// }

// const MobileMenu = ({ stuck }) => {
//     const [expanded, setExpanded] = useState(false)
//     const [activeSubmenu, setActiveSubmenu] = useState(-1)

//     const handleToggleMenu = () => setExpanded(!expanded)
//     const handleCloseMenu = () => setExpanded(false)
//     const handleActivateSubmenu = index => event => setActiveSubmenu(index)
//     const handleCloseAllSubmenus = () => setActiveSubmenu(-1)
    
//     return (
//         <MobileMenu menuToggleHandler={ handleToggleMenu } expanded={ expanded } showBrand={ stuck }>
//             {
//                 menu.map((item, currentIndex) => (
//                     <MobileMenuItem>
//                         <MobileMenuLink onClick={ handleCloseMenu } key={ item.path } to={ item.path } activeClassName="active" partiallyActive={ true }>{ item.text }</MobileMenuLink>
//                         {
//                             item.submenu && (
//                                 <MobileSubmenu active={ activeSubmenu === currentIndex } onClick={ handleCloseAllSubmenus }>
//                                     { item.submenu.map(item => <MobileMenuLink to={ item.path } activeClassName="active" partiallyActive={ true }>{ item.text }</MobileMenuLink>) }
//                                 </MobileSubmenu>
//                             )
//                         }
//                     </MobileMenuItem>
//                 ))
//             }
//         </MobileMenu>
//     )
// }

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
                <Link to ="/">
                    <Brand />
                </Link>
            </Header>
            
            <StickyWrapper stuck={ stuckMenu } dropShadow={ stuckMenu }>
                { isCompact ? <MobileMenu stuck={ stuckMenu } items={ menu } /> : <Menu items={ menu } /> }
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
