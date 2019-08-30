import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import { Title, Meta } from '../components/Typography'
import { Button } from '../components/Button'

export default ({ data, pageContext }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const { prev, next } = pageContext
    
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
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    {
                        prev && <Link to={ prev.frontmatter.path }>
                            PREV EVENT <br/>
                            <Meta>{ prev.frontmatter.title }</Meta>
                        </Link>
                    }
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    {
                        next && <Link to={ next.frontmatter.path }>
                            NEXT EVENT <br/>
                            <Meta>{ next.frontmatter.title }</Meta>
                        </Link>
                    }
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