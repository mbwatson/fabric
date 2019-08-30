import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Title, Heading } from '../components/Typography'

export default ({ data, pageContext }) => {
    const { tag } = pageContext

    const articles = data.news.edges.map(({ node }) => node)
    const events = data.events.edges.map(({ node }) => node)
    
    return (
        <Fragment>
            <div className="items-by-tag-container">
                <Title>Items Tagged "{ tag }"</Title>

                <Heading>Articles</Heading>
                <pre>{ JSON.stringify(articles, null, 2) }</pre>

                <Heading>Events</Heading>
                <pre>{ JSON.stringify(events, null, 2) }</pre>
            </div>
        </Fragment>
    )
}

export const newByTagQuery = graphql`
    query($tag: String!) {
        news: allMarkdownRemark(
                filter: {
                    frontmatter: {tags: {in: [$tag]}}
                    fileAbsolutePath: {regex: "/news/"}
                }
            ) {
            edges {
                node {
                    frontmatter {
                        title
                        tags
                    }
                }
            }
        }
        events: allMarkdownRemark(
                filter: {
                    frontmatter: {tags: {in: [$tag]}}
                    fileAbsolutePath: {regex: "/events/"}
                }
            ) {
            edges {
                node {
                    frontmatter {
                        title
                        tags
                    }
                }
            }
        }
    }
`
