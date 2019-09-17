import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = ({ title, description, keywords = [], meta }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                    }
                }
            }
        `
    )
    
    const metaTitle = title || site.siteMetadata.title
    const metaDescription = description || site.siteMetadata.description
    const metaKeywords = site.siteMetadata.keywords.concat(keywords)

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={metaTitle}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `title`,
                    content: metaTitle,
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: metaKeywords,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    name: 'theme-color',
                    content: '#27aae1'
                }
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}
