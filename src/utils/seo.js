import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// TODO: Maybe add socials / email ?
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
                    content: site.siteMetadata.author
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
                    property: `og:author`,
                    content: site.siteMetadata.author
                },
                {
                    property: `og:type`,
                    content: `website`
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
    pathname: PropTypes.string,
}

SEO.defaultProps = {
    title: "André | Software Engineer",
    description: "",
    author: "André Gonçalves",
    image: null,
    lang: "en",
    meta: [],
    pathname: null,
}