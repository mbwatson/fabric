import React from 'react'
import { FadeOnMount } from '../components/Anim'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Title, Heading, Paragraph } from '../components/Typography'

const TimelineItem = ({ date, title, description }) => {
    return (
        <article style={{ marginBottom: '2rem' }}>
            <Heading>{ date }</Heading>
            <h4>{ title }</h4>
            <Paragraph dangerouslySetInnerHTML={{ __html: description }} />
        </article>
    )
}

const TimelinePage = ({ data }) => {
    const { allMarkdownRemark } = data

    return (
        <FadeOnMount>
            <SEO title="Events" />

            <Title>FABRIC Development Timeline</Title>

            {
                allMarkdownRemark.edges.map(({ node }) => (
                    <TimelineItem
                        key={ node.frontmatter.title }
                        date={ node.frontmatter.date }
                        title={ node.frontmatter.title }
                        description={ node.html }
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
            filter: {fileAbsolutePath: {regex: "/timeline/"}}
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM YYYY")
                        title
                    }
                    html
                }
            }
        }
    }
`

export default TimelinePage
