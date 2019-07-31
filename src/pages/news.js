import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SEO } from '../components/SEO'
import { Page } from '../layouts'
import { Title, Meta } from '../components/Typography'
import { ClockIcon } from '../components/Icons'
import  { useWindowWidth } from '../hooks'

const ArticlePreview = styled.article`
    margin: 4rem 0;
`

const ArticleMetadata = styled(Meta)`
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    justify-content: space-between;
    & > div {
        display: flex;
        align-items: center;
    }
`

const NewsListItem = ({ date, path, title, timeToRead, content }) => {
    const { isCompact } = useWindowWidth()
    return (
        <ArticlePreview>
            <h5><Link to={ path }>{ title }</Link></h5>
            <ArticleMetadata compact={ isCompact }>
                <div style={{ flex: 1 }}>Posted on { date }</div>
                <div><ClockIcon fill="var(--color-grey)" /> &nbsp; { timeToRead } minute read</div>
            </ArticleMetadata>
            <main>
                { content }
            </main>
        </ArticlePreview>
    )
}

const NewsPage = ({ data }) => {
    const news = data.allMarkdownRemark.edges

    return (
        <Page>
            <SEO title="News" />

            <Title>News</Title>

            {
                news.map(({ node }) => (
                    <NewsListItem
                        title={ node.frontmatter.title }
                        path={ node.frontmatter.path }
                        date={ node.frontmatter.date }
                        timeToRead={ node.timeToRead }
                        content={ node.excerpt }
                    />
                ))
            }

        </Page>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    timeToRead
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`

export default NewsPage
