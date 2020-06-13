import { graphql, useStaticQuery } from 'gatsby'

const capailitiesQuery = graphql`
    {
        capabilities: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data/capabilities/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        icon {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    base64
                                    tracedSVG
                                    aspectRatio
                                    src
                                    srcSet
                                    srcWebp
                                    srcSetWebp
                                    sizes
                                    originalImg
                                    originalName
                                    presentationWidth
                                    presentationHeight
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

export const useCapabilities = () => {
    const { capabilities } = useStaticQuery(capailitiesQuery)
    return capabilities.edges.map(({ node }) => ({ ...node.frontmatter, html: node.html }))
}
