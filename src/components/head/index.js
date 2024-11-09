import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import schemaGenerator from 'helpers/schemaGenerator'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleShort
          siteDescription
          siteUrl
          themeColor
        }
      }
    }
  `)

  const {
    siteTitle,
    siteDescription,
    siteUrl,
    pageTitle,
    themeColor,
    imageUrl,
  } = data.site.siteMetadata

  const pageTitleFull = pageTitle ? `${siteTitle}: ${pageTitle}` : siteTitle

  return (
    <Location>
      {({ location }) => {
        const canonical = siteUrl + (location.pathname || '')
        return (
          <>
            <html lang="en" />

            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width,initial-scale=1.0,user-scalable=yes"
              name="viewport"
            />

            <meta content={siteTitle} name="apple-mobile-web-app-title" />
            <meta content={pageTitleFull} property="og:title" />
            <title>{pageTitleFull}</title>

            <meta content={siteDescription} name="description" />
            <meta content={siteDescription} property="og:description" />

            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta
              content="black-translucent"
              name="apple-mobile-web-app-status-bar-style"
            />
            <meta content={themeColor} name="theme-color" />
            <meta content={siteTitle} name="application-name" />

            <meta content="website" property="og:type" />
            <meta content={siteTitle} property="og:site_name" />
            <meta content={canonical} property="og:url" />
            <link rel="canonical" href={canonical} />

            <meta
              content={imageUrl || `${siteUrl}/social.png`}
              property="og:image"
            />
            <meta content="1024" property="og:image:width" />
            <meta content="512" property="og:image:height" />
            <meta
              content={imageUrl || `${siteUrl}/social.png`}
              property="og:image"
            />
            <meta content="1024" property="og:image:width" />
            <meta content="512" property="og:image:height" />

            <meta content={themeColor} name="msapplication-TileColor" />
            <meta
              content="/icons/mstile-70x70.png"
              name="msapplication-square70x70"
            />
            <meta
              content="/icons/mstile-144x144.png"
              name="msapplication-square144x144"
            />
            <meta
              content="/icons/mstile-150x150.png"
              name="msapplication-square150x150"
            />
            <meta
              content="/icons/mstile-310x150.png"
              name="msapplication-wide310x150"
            />
            <meta
              content="/icons/mstile-310x310.png"
              name="msapplication-square310x310"
            />

            <link href="/manifest.json" rel="manifest" />

            <link
              href="/icons/apple-touch-icon-57x57.png"
              rel="apple-touch-icon"
              sizes="57x57"
            />
            <link
              href="/icons/apple-touch-icon-60x60.png"
              rel="apple-touch-icon"
              sizes="60x60"
            />
            <link
              href="/icons/apple-touch-icon-72x72.png"
              rel="apple-touch-icon"
              sizes="72x72"
            />
            <link
              href="/icons/apple-touch-icon-76x76.png"
              rel="apple-touch-icon"
              sizes="76x76"
            />
            <link
              href="/icons/apple-touch-icon-114x114.png"
              rel="apple-touch-icon"
              sizes="114x114"
            />
            <link
              href="/icons/apple-touch-icon-120x120.png"
              rel="apple-touch-icon"
              sizes="120x120"
            />
            <link
              href="/icons/apple-touch-icon-144x144.png"
              rel="apple-touch-icon"
              sizes="144x144"
            />
            <link
              href="/icons/apple-touch-icon-152x152.png"
              rel="apple-touch-icon"
              sizes="152x152"
            />
            <link
              href="/icons/apple-touch-icon-167x167.png"
              rel="apple-touch-icon"
              sizes="167x167"
            />
            <link
              href="/icons/apple-touch-icon-180x180.png"
              rel="icon"
              sizes="180x180"
              type="image/png"
            />

            <link
              href="/icons/favicon-32x32.png"
              rel="icon"
              sizes="32x32"
              type="image/png"
            />
            <link
              href="/icons/favicon-16x16.png"
              rel="icon"
              sizes="16x16"
              type="image/png"
            />

            <script type="application/ld+json">
              {JSON.stringify(
                schemaGenerator({
                  location,
                  canonical,
                  siteUrl,
                  pageTitle,
                  siteTitle,
                  pageTitleFull,
                })
              )}
            </script>

            <script
              defer
              data-domain="timoriski.fi"
              src="https://plausible.timoriski.fi/js/script.js"
            ></script>
          </>
        )
      }}
    </Location>
  )
}

Head.propTypes = {
  siteTitle: PropTypes.string,
  siteTitleShort: PropTypes.string,
  siteDescription: PropTypes.string,
  siteUrl: PropTypes.string,
  themeColor: PropTypes.string,
  imageUrl: PropTypes.string,
  canonical: PropTypes.string,
  pageTitle: PropTypes.string,
  pageTitleFull: PropTypes.string,
}

export default Head
