import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { graphql, Link } from 'gatsby'
import { Title, Meta } from '../../components/typography'
import { CommaSeparatedList } from '../../components/list'
import { Module } from '../../components/layout'
import { Visible } from 'react-grid-system'
import { HorizontalRule } from '../../components/horizontal-rule'

export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { prev, next } = pageContext
    const { frontmatter, html } = markdownRemark
    const { title, date, time, location, tags, url, fabricHosted, seo } = frontmatter
    
    return (
        <AnimateOnMount>
            <SEO title={ seo.title } description={ seo.description } keywords={ seo.keywords } />
            <div className="event-item-container">
                <div className="event-item">
                    <Title>{ title }</Title>
                
                    <Meta>Date: { date }</Meta>
                    { time && <Meta>Time: { time }</Meta> }
                    <Meta>Location: { location }</Meta>
                    {
                        fabricHosted
                        ? <Meta>Registration: <a href={ url } target="_blank" rel="noreferrer noopener">{ url }</a></Meta>
                        : <Meta>Event Website: <a href={ url } target="_blank" rel="noreferrer noopener">{ url }</a></Meta>
                    }
                    <Meta>
                        <CommaSeparatedList title="Tags" items={ tags.map(tag => <Link to={ `/tagged/${ tag }` }>{ tag }</Link> ) } />
                    </Meta>

                    <Module title="Event Summary">
                        <div className="event-content" dangerouslySetInnerHTML={{ __html: html || 'No details to display.' }} />
                    </Module>
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
        </AnimateOnMount>
    )
}

export const newsItemQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                time
                location
                title
                url
                tags
                fabricHosted
                seo {
                    title
                    description
                    keywords
                }
            }
        }
    }
`