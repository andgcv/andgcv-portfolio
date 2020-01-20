import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// TODO: Maybe add socials / email ?
const SEO = ({ title, description, author, image, pathname }) => (
    <StaticQuery
    query={query}
    render={({
        site: {
            siteMetadata: {
                defaultTitle,
                defaultDescription,
                defaultAuthor,
                siteUrl,
                defaultImage,
            }
        }
    }) => {
        const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            author: author || defaultAuthor,
            image: `${siteUrl}${image || defaultImage}`,
            url: `${siteUrl}${pathname || '/'}`,
        }
        return (
            <>
                <Helmet title={seo.title}>
                    <meta name="description" content={seo.description} />
                    <meta name="author" content={seo.author} />
                    <meta name="image" content={seo.image} />
                    {seo.url && <meta property="og:url" content={seo.url} />}
                    {seo.title && <meta property="og:title" content={seo.title} />}
                    {seo.description && (
                        <meta property="og:description" content={seo.description} />
                    )}
                    {seo.image && <meta property="og:image" content={seo.image} />}
                </Helmet>
            </>
        )
    }}
  />
)

export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                defaultAuthor: author
                siteUrl: url
                defaultImage: image
            }
        }
    }
`

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
}

SEO.defaultProps = {
    title: "André | Software Engineer",
    description: "I'm André, an ambitious, naturally curious Software Engineer, from Portugal.",
    author: "André Gonçalves",
    image: null,
    pathname: null,
}