import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ meta, lang, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        siteImage
                    }
                }
            }
        `
    )
    
    const metaTitle = site.siteMetadata.title 
    const metaDescription = site.siteMetadata.description
    const metaAuthor = site.siteMetadata.author
    const metaUrl = `${site.siteMetadata.siteUrl}/`
    const metaImage = `${site.siteMetadata.siteUrl}/${site.siteMetadata.siteImage}`

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={metaTitle || title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    name: `author`,
                    content: metaAuthor
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:url`,
                    content: metaUrl
                },
                {
                    property: 'og:image',
                    content: metaImage,
                }
            ]}
        />
    )
}

export default SEO


SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

SEO.defaultProps = {
    title: "André | Software Engineer",
    description: "",
    author: "André Gonçalves",
    image: null,
    lang: "en",
    meta: [],
}