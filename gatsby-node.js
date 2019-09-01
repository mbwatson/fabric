const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
    const eventTemplate = path.resolve(`src/templates/eventTemplate.js`)
    const tagTemplate = path.resolve(`src/templates/tagTemplate.js`)

    return graphql(`
        {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            path
                            title
                            date(formatString: "MMMM DD, YYYY")
                            tags
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        
        // Create news items pages
        const articles = result.data.allMarkdownRemark.edges.filter(({ node }) => node.fileAbsolutePath.includes('/news/'))
        articles.forEach(({ node }, index) => {
            createPage({
                path: node.frontmatter.path,
                component: articleTemplate,
                context: { // additional data passed via context
                    prev: index === 0 ? null : articles[index - 1].node,
                    next: index === articles.length - 1 ? null : articles[index + 1].node,
                },
            })
        })
        // Create event pages
        const events = result.data.allMarkdownRemark.edges.filter(({ node }) => node.fileAbsolutePath.includes('/events/'))
        events.forEach(({ node }, index) => {
            createPage({
                path: node.frontmatter.path,
                component: eventTemplate,
                context: { // additional data passed via context
                    prev: index === 0 ? null : events[index - 1].node,
                    next: index === events.length - 1 ? null : events[index + 1].node,
                },
            })
        })
        // Create tag pages
        const allTags = new Set()
        articles.forEach(({ node: { frontmatter: { tags } } }) => {
            if (!Array.from(tags)) return
            tags.forEach(tag => allTags.add(tag))
        })
        allTags.forEach(tag => {
            createPage({
                path: `/tagged/${ tag }`,
                component: tagTemplate,
                context: { tag },
            })
        })
        return [...articles, ...events]
    })
}