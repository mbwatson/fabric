import React from 'react'
import { FadeOnMount } from '../components/Anim'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components/SEO'
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

const NewsListItem = ({ date, path, title, timeToRead, tags, content }) => {
    const { isCompact } = useWindowWidth()
    return (
        <ArticlePreview>
            <h5><Link to={ path }>{ title }</Link></h5>
            <ArticleMetadata compact={ isCompact }>
                <div style={{ flex: 1 }}>
                    Posted on { date }
                </div>
                <div><ClockIcon fill="var(--color-grey)" /> &nbsp; { timeToRead } minute read</div>
            </ArticleMetadata>
            <Meta>Tags: { tags.length > 0 ? tags.map(tag => <Link key={ tag } to={ `/tagged/${ tag }` }>{ tag } </Link>) : '∅' }</Meta>
            <main>{ content }</main>
        </ArticlePreview>
    )
}

const NewsPage = ({ data }) => {
    const news = data.allMarkdownRemark.edges

    return (
        <FadeOnMount>
            <SEO title="News" />

            <Title>News</Title>

            {
                news.map(({ node }) => (
                    <NewsListItem
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
            filter: {fileAbsolutePath: {regex: "/news/"}}
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
