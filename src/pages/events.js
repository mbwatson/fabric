import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components/SEO'
import { Title, Meta } from '../components/Typography'

const EventPreview = styled.article`
    margin: 4rem 0;
`

const EventListItem = ({ date, path, title, tags, content }) => {
    return (
        <EventPreview>
            <h5><Link to={ path }>{ title }</Link></h5>
            <Meta>{ date }</Meta>
            <Meta>Tags: { tags.length > 0 ? tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` }>{ tag } </Link>) : '∅' }</Meta>
            <main>{ content }</main>
        </EventPreview>
    )
}

const NewsPage = ({ data }) => {
    const news = data.allMarkdownRemark.edges

    return (
        <FadeOnMount>
            <SEO title="Events" />

            <Title>Events</Title>

            {
                news.map(({ node }) => (
                    <EventListItem
                        key={ node.frontmatter.path }
                        title={ node.frontmatter.title }
                        path={ node.frontmatter.path }
                        date={ node.frontmatter.date }
                        timeToRead={ node.timeToRead }
                        tags={ node.frontmatter.tags }
                        content={ node.excerpt }
                    />
                ))
            }

        </FadeOnMount>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {fileAbsolutePath: {regex: "/events/"}}
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    timeToRead
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        tags
                    }
                }
            }
        }
    }
`

export default NewsPage
