import { graphql, useStaticQuery } from 'gatsby'

const designDocumentsQuery = graphql`{
    documents: allDesignDocumentsYaml {
        edges {
            node {
                title
                url
            }
        }
    }
}`

export const useDesignDocuments = () => {
    const { documents } = useStaticQuery(designDocumentsQuery)
    return documents.edges.map(({ node }) => node)
}
