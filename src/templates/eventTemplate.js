import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { graphql, Link } from 'gatsby'
import { Title, Meta } from '../components/Typography'
import { Visible } from 'react-grid-system'
import { HorizontalRule } from '../components/HorizontalRule'

export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const { prev, next } = pageContext
    
    return (
        <FadeOnMount>
            <div className="news-item-container">
                <div className="news-item">
                    <Title>{ frontmatter.title }</Title>
                    <Meta>{ frontmatter.date }</Meta>
                    <Meta>Tags: { frontmatter.tags.length > 0 ? frontmatter.tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` }>{ tag } </Link>) : '∅' }</Meta>
                    <div className="event-content" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>

            <HorizontalRule />
            
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    {
                        prev && <Link to={ prev.frontmatter.path }>
                            PREV <Visible md lg xl>EVENT</Visible> <br/>
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
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
            }
        }
    }
`