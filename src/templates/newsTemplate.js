import React from 'react'
import { graphql } from 'gatsby'
import { Page } from '../layouts'
import { Title, Meta } from '../components/Typography'

export default ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    
    return (
        <Page>
            <div className="news-item-container">
                <div className="news-item">
                    <Title>{ frontmatter.title }</Title>
                    <Meta>Posted on { frontmatter.date }</Meta>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Page>
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
            }
        }
    }
`