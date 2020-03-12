import { graphql, useStaticQuery } from 'gatsby'

const timelineQuery = graphql`
    {
        timeline: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC}
            filter: {fileAbsolutePath: {regex: "/timeline/"}}
            limit: 4
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

export const useTimeline = () => {
    const { timeline } = useStaticQuery(timelineQuery)
    return timeline.edges.map(({ node }) => ({ ...node.frontmatter, html: node.html }))
}
