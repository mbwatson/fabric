import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Title, Meta } from '../components/Typography'

export default ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    
    return (
        <Fragment>
            <div className="news-item-container">
                <div className="news-item">
                    <Title>{ frontmatter.title }</Title>
                    <Meta>{ frontmatter.date }</Meta>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Fragment>
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