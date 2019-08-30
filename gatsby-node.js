const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const newsItemTemplate = path.resolve(`src/templates/newsTemplate.js`)
    const eventItemTemplate = path.resolve(`src/templates/eventTemplate.js`)

    return graphql(`
        {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        const newsItems = result.data.allMarkdownRemark.edges.filter(({ node }) => node.fileAbsolutePath.includes('/news/'))
        const eventItems = result.data.allMarkdownRemark.edges.filter(({ node }) => node.fileAbsolutePath.includes('/events/'))

        newsItems.forEach(({ node }, index) => {
            createPage({
                path: node.frontmatter.path,
                component: newsItemTemplate,
                context: { // additional data passed via context
                    prev: index === 0 ? null : newsItems[index - 1].node,
                    next: index === newsItems.length - 1 ? null : newsItems[index + 1].node,
                },
            })
        })
        eventItems.forEach(({ node }, index) => {
            createPage({
                path: node.frontmatter.path,
                component: eventItemTemplate,
                context: { // additional data passed via context
                    prev: index === 0 ? null : eventItems[index - 1].node,
                    next: index === eventItems.length - 1 ? null : eventItems[index + 1].node,
                },
            })
        })
        return [...newsItems, ...eventItems]
    })
}