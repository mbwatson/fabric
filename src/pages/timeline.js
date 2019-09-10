import React from 'react'
import styled from 'styled-components'
import { FadeOnMount } from '../components/Anim'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Title, Heading, Paragraph } from '../components/Typography'

const Timeline = styled.article`
    padding-left: 2rem;
`

const TimelineNode = styled.article`
    padding-left: 2rem;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: -1rem;
        top: 0.5rem;
        width: 1px;
        height: 100%;
        background-color: var(--color-primary);
        border-radius: 50%;
    }
    &:last-child::before {
        width: 0;
    }
    &::after {
        content: "";
        position: absolute;
        left: -1.5rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        background-color: var(--color-primary);
        border-radius: 50%;
    }
`

const TimelineItem = ({ date, title, description }) => {
    return (
        <TimelineNode>
            <Heading>{ title }</Heading>
            <h4>{ date }</h4>
            <Paragraph dangerouslySetInnerHTML={{ __html: description }} />
        </TimelineNode>
    )
}

const TimelinePage = ({ data }) => {
    const { allMarkdownRemark } = data

    return (
        <FadeOnMount>
            <SEO title="Timeline" />

            <Title>FABRIC Development Timeline</Title>
            
            <Timeline>
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
            </Timeline>

        </FadeOnMount>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC}
            filter: {fileAbsolutePath: {regex: "/timeline/"}}
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "YYYY")
                        title
                    }
                    html
                }
            }
        }
    }
`

export default TimelinePage
