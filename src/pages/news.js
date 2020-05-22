import React from 'react'
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

const Details = styled(Meta)`
    display: flex;
    flex-direction: ${ props => props.compact ? 'column' : 'row' };
    justify-content: space-between;
    & > div {
        display: flex;
        align-items: center;
    }
`

const Tags = styled(Meta)``

const PublishDate = styled.span`
    flex: 1;
`

const TimeToRead = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NewsListItem = ({ date, path, title, timeToRead, tags, content }) => {
    const { isCompact } = useWindowWidth()
    return (
        <ArticlePreview>
            <Heading style={{ lineHeight: 1.5 }}><Link to={ path }>{ title }</Link></Heading>
            <Details compact={ isCompact }>
                <PublishDate>
                    Published on { date }
                </PublishDate>
                <TimeToRead><ClockIcon fill="var(--color-grey)" size={ 18 } /> &nbsp; { timeToRead } minute read</TimeToRead>
            </Details>
            <Tags>
                <CommaSeparatedList title="Tags" items={ tags.map(tag => <Link to={ `/tagged/${ tag }` }>{ tag }</Link> ) } />
            </Tags>
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
