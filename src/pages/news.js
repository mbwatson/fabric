import React, { Fragment } from 'react'
import { AnimateOnMount } from '../components/anim'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components/seo'
import { Title, Heading, Meta } from '../components/typography'
import { CommaSeparatedList } from '../components/list'
import { ClockIcon } from '../components/icons'
import { useWindowWidth } from '../hooks'

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
            <Heading style={{ lineHeight: 1.5 }}><Link to={ path }>{ title }</Link></Heading>
            <ArticleMetadata compact={ isCompact }>
                <div style={{ flex: 1 }}>
                    Published on { date }
                </div>
                <div><ClockIcon fill="var(--color-grey)" /> &nbsp; { timeToRead } minute read</div>
            </ArticleMetadata>
            <Meta>
                <CommaSeparatedList title="Tags" items={ tags.map(tag => <Link to={ `/tagged/${ tag }` }>{ tag }</Link> ) } />
            </Meta>
            <main>{ content }</main>
        </ArticlePreview>
    )
}

const NewsPage = ({ data }) => {
    const news = data.allMarkdownRemark.edges

    return (
        <AnimateOnMount>
            <SEO
                title="News"
                description="Read about news and current events that are related to FABRIC and the FABRIC team."
                keywords={ ["news", "events", "press"] }
            />

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

        </AnimateOnMount>
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
