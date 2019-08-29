const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const newsItemTemplate = path.resolve(`src/templates/newsTemplate.js`)
    const eventItemTemplate = path.resolve(`src/templates/eventTemplate.js`)
    
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.fileAbsolutePath.includes('/news/')) {
                createPage({
                    path: node.frontmatter.path,
                    component: newsItemTemplate,
                    context: {}, // additional data can be passed via context
                })
            }
            if (node.fileAbsolutePath.includes('/events/')) {
                createPage({
                    path: node.frontmatter.path,
                    component: eventItemTemplate,
                    context: {}, // additional data can be passed via context
                })
            }
        })
    })
}