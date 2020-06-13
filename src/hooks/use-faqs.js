import { graphql, useStaticQuery } from 'gatsby'

const faqsQuery = graphql`{
    faqs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/resources/faqs/"}}) {
        edges {
            node {
                frontmatter {
                    question
                }
                html
            }
        }
    }
}
`

export const useFaqs = () => {
    const { faqs } = useStaticQuery(faqsQuery)
    return faqs.edges.map(({ node }) => ({ question: node.frontmatter.question, answer: node.html }))
}
