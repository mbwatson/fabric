import { graphql, useStaticQuery } from 'gatsby'

const nsfLogoQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "supporters"}}) {
            logos: edges {
                node {
                    childImageSharp {
                        fixed(fit: CONTAIN, height: 100) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`

export const useNSFLogo = () => {
    const { allFile } = useStaticQuery(nsfLogoQuery)
    return allFile.logos[0].node
}
