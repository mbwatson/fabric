import { graphql, useStaticQuery } from 'gatsby'

const timelineQuery = graphql`
    {
        timeline: allMarkdownRemark(
            sort: {fields: frontmatter___dates, order: ASC}
            filter: {fileAbsolutePath: {regex: "/timeline/"}}
            limit: 4
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        dates
                    }
                    html
                }
            }
        }
    }
`

export const useTimeline = () => {
    const { timeline } = useStaticQuery(timelineQuery)
    return timeline.edges.map(({ node }) => ({ ...node.frontmatter, html: node.html }))
}
