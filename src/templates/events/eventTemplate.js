import React from 'react'
import styled from 'styled-components'
import { FadeOnMount } from '../../components/Anim'
import { graphql, Link } from 'gatsby'
import { Title, Subheading, Meta, Paragraph } from '../../components/Typography'
import { Visible } from 'react-grid-system'
import { HorizontalRule } from '../../components/HorizontalRule'

const EventDetails = styled.article`
    margin-top: 2rem;
`

export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { prev, next } = pageContext
    const { frontmatter, html } = markdownRemark
    const { title, date, location, tags, url } = frontmatter
    
    return (
        <FadeOnMount>
            <div className="news-item-container">
                <div className="news-item">
                    <Title>{ title }</Title>
                    <Meta>Date: { date }</Meta>
                    <Meta>Location: { location }</Meta>
                    <Meta>Link: <Link to={ url }>{ url }</Link></Meta>
                    <Meta>Tags: { tags.length > 0 ? tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` }>{ tag } </Link>) : '∅' }</Meta>
                    <EventDetails>
                        <Subheading>Event Details:</Subheading>
                        <Paragraph className="event-content" dangerouslySetInnerHTML={{ __html: html || 'No details to display.' }} />
                    </EventDetails>
                </div>
            </div>

            <HorizontalRule />
            
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    {
                        prev && <Link to={ prev.frontmatter.path }>
                            PREVIOUS <Visible md lg xl>EVENT</Visible> <br/>
                            <Meta>
                                { prev.frontmatter.title }<br/>
                                <small>on { prev.frontmatter.date }</small>
                            </Meta>
                        </Link>
                    }
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    {
                        next && <Link to={ next.frontmatter.path }>
                            NEXT <Visible md lg xl>EVENT</Visible> <br/>
                            <Meta>
                                { next.frontmatter.title }<br/>
                                <small>on { next.frontmatter.date }</small>
                            </Meta>
                        </Link>
                    }
                </div>
            </div>
        </FadeOnMount>
    )
}

export const newsItemQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                location
                title
                url
                tags
                fabricHosted
            }
        }
    }
`