import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Heading, Subheading, Subsubheading, Paragraph } from '../../components/typography'
import { useScienceAdvisoryCommittee, useWindowWidth } from '../../hooks'

const SacMemberPhoto = styled(Img)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 2rem;
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.2)) saturate(0.5);
    transition: filter 250ms;
`

const Profile = styled.article`
    // border: 1px solid #f99;
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    justify-content: center;
    align-items: ${ props => props.compact ? 'center' : 'flex-start' };;
    margin-bottom: 3rem;
    &:hover ${ SacMemberPhoto } {
        filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.2)) saturate(1.0);
    }
`

const SacMemberName = styled(Subheading)`
    margin-bottom: 1rem;
`

const SacMemberOrganization = styled(Subsubheading)`
    margin-bottom: 1rem;
`

const SacMemberBio = styled.div``

const SacMemberActions = styled.div`
    text-align: right;
`

const SacMemberDetails = styled.div`
    flex: 1;
`

const ScienceAdvisoryCommitteePage = () => {
    const { isCompact } = useWindowWidth()
    const committee = useScienceAdvisoryCommittee()

    return (
        <AnimateOnMount>
            <SEO
                title="Scientific Advisory Committee"
                description="" 
                keywords={ [] }
            />
            
            <Title>Scientific Advisory Committee</Title>

            <section>
                <Paragraph>
                    The FABRIC Scientific Advisory Committee (SAC) will help guide the project by providing recommendations and critical feedback.
                    Initially, the focus will be on reviewing the FABRIC design to ensure it can meet the diverse research needs of the future.
                    The committee will also facilitate critical partnerships between collaborating institutions both within and outside of the US.
                    As work progresses, the SAC will develop grand challenges that focus on solving key research problems using the FABRIC infrastructure.
                </Paragraph>
            </section>
            
            <section>
                <Heading>Meet the Committee</Heading>
                {
                    committee.map(member => (
                        <Profile compact={ isCompact }>
                            <SacMemberPhoto fixed={ member.frontmatter.photo.childImageSharp.fixed } />
                            <SacMemberDetails>
                                <SacMemberName center={ isCompact }>{ member.frontmatter.name }</SacMemberName>
                                <SacMemberOrganization center={ isCompact }>{ member.frontmatter.organization }</SacMemberOrganization>
                                <SacMemberBio dangerouslySetInnerHTML={{ __html: member.html }} />
                                <SacMemberActions>
                                    <a href={ member.frontmatter.url } target="_blank" rel="noopener noreferrer">Learn more about { member.frontmatter.name } </a>
                                </SacMemberActions>
                            </SacMemberDetails>
                        </Profile>
                    ))
                }
            </section>
            
        </AnimateOnMount>

    )
}

export default ScienceAdvisoryCommitteePage
