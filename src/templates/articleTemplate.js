import React from 'react'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components/seo'
import { FadeOnMount } from '../components/anim'
import { Title, Subtitle, Meta } from '../components/typography'
import { Visible } from 'react-grid-system'
import { HorizontalRule } from '../components/horizontalRule'

export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const { prev, next } = pageContext

    return (
        <FadeOnMount>
            <SEO
                title={ frontmatter.seo.title }
                description={ frontmatter.seo.description }
                keywords={ frontmatter.seo.keywords }
            />
            <div className="news-item-container">
                <div className="news-item">
                    <Title>{ frontmatter.title }</Title>
                    <Subtitle>{ frontmatter.subtitle }</Subtitle>
                    <Meta>Published on { frontmatter.date }</Meta>
                    <Meta>Tags: { frontmatter.tags.length > 0 ? frontmatter.tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` } style={{ marginRight: '0.25rem' }}>{ tag }</Link>) : '∅' }</Meta>
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
            
            <HorizontalRule />

            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    {
                        prev && <Link to={ prev.frontmatter.path }>
                            PREVIOUS <Visible md lg xl>ARTICLE</Visible><br/>
                            <Meta>{ prev.frontmatter.title }</Meta>
                        </Link>
                    }
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    {
                        next && <Link to={ next.frontmatter.path }>
                            NEXT <Visible md lg xl>ARTICLE</Visible><br/>
                            <Meta>{ next.frontmatter.title }</Meta>
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
                subtitle
                tags
                seo {
                    title
                    description
                    keywords
                }
            }
        }
    }
`