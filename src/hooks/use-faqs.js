import { graphql, useStaticQuery } from 'gatsby'

const faqsQuery = graphql`{
    faqs: allFaqsYaml {
        edges {
            node {
                question
                answer
            }
        }
    }
}`

export const useFaqs = () => {
    const { faqs } = useStaticQuery(faqsQuery)
    return faqs.edges.map(({ node }) => node)
}
