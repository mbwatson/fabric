import React from 'react'
import { SEO } from '../components/SEO'
import { Link } from 'gatsby'
import { FadeOnMount } from '../components/Anim'
import { graphql } from 'gatsby'
import { Title, Paragraph, Meta } from '../components/Typography'

export default ({ data, pageContext }) => {
    const { tag } = pageContext

    const articles = data.news.edges.map(({ node }) => node)
    const events = data.events.edges.map(({ node }) => node)
    
    return (
        <FadeOnMount>
            <SEO
                title={ `News and Events Tagged with '${ tag }'` }
                description={ `News and Events Tagged with '${ tag }'` }
                keywords={ [tag] }
            />
            <div className="items-by-tag-container">
                <Title>Articles Tagged with "{ tag }"</Title>

                {
                    articles.length
                        ? articles.map(article => {
                            const { title, path, date, tags } = article.frontmatter
                            return (
                                <article>
                                    <h5 style={{ lineHeight: 1.5 }}>
                                        <Link to={ path }>{ title }</Link>
                                    </h5>
                                    <Meta>
                                        Publication Date: { date }<br />
                                        Tags: { tags.length > 0 ? tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` } style={{ marginRight: '0.25rem' }}>{ tag }</Link>) : '∅' }
                                    </Meta>
                                </article>
                            )
                        })
                        : <Paragraph center>There are no articles with this tag!</Paragraph>
                }
                
                <br/><br/>

                <Title>Events Tagged with "{ tag }"</Title>

                {
                    events.length
                        ? events.map(event => {
                            const { title, path, date, tags } = event.frontmatter
                            return (
                                <article>
                                    <h5 style={{ lineHeight: 1.5 }}>
                                        <Link to={ path }>{ title }</Link>
                                    </h5>
                                    <Meta>
                                        Event Date: { date } <br/>
                                        Tags: { tags.length > 0 ? tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` } style={{ marginRight: '0.25rem' }}>{ tag }</Link>) : '∅' }
                                    </Meta>
                                </article>
                            )
                        })
                        : <Paragraph center>There are no events with this tag!</Paragraph>
            }
            </div>
        </FadeOnMount>
    )
}

export const newByTagQuery = graphql`
    query($tag: String!) {
        news: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: {regex: "/news/"}
                    frontmatter: {tags: {in: [$tag]}}
                }
            ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM DD, YYYY")
                        tags
                    }
                }
            }
        }
        events: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: {regex: "/events/"}
                    frontmatter: {tags: {in: [$tag]}}
                }
            ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM D, YYYY")
                        tags
                    }
                }
            }
        }
    }
`
