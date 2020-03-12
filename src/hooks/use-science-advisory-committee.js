import { graphql, useStaticQuery } from 'gatsby'

const sacQuery = graphql`
    {
        sac: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sac/"}}, sort: {order: ASC, fields: fileAbsolutePath}) {
            edges {
                node {
                    frontmatter {
                        name
                        organization
                        url
                        photo {
                            childImageSharp {
                                fixed(width: 150) {
                                    base64
                                    tracedSVG
                                    aspectRatio
                                    width
                                    height
                                    src
                                    srcSet
                                    srcWebp
                                    srcSetWebp
                                    originalName
                                }
                            }
                        }
                    }
                    html
                }
            }
        }
    }
`

export const useScienceAdvisoryCommittee = () => {
    const { sac } = useStaticQuery(sacQuery)
    return sac.edges.map(({ node }) => node)
}
