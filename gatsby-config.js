module.exports = {
  siteMetadata: {
    title: `SPANDAU20`,
    description: `Official website of SPANDAU20`,
    author: `200kilo`,
    url: "spandau20.com",
    image: "/assets/images/s20_logo.png",
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-minify`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      // options: {
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Content-Security-Policy: frame-ancestors 'self' https://*.storyblok.com/",
            "Referrer-Policy: same-origin",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff]",
          ],
          // Cache fonts forever
          "/fonts/*": [
            "Cache-Control: public",
            "Cache-Control: max-age=365000000",
            "Cache-Control: immutable",
          ],
          // Cache images for a week
          "/images/*": [
            "Cache-Control: public",
            "Cache-Control: max-age=604800",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mixtapes`,
        path: `${__dirname}/static/content/mixtapes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `releases`,
        path: `${__dirname}/static/content/releases`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutUs`,
        path: `${__dirname}/static/content/about.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imprint`,
        path: `${__dirname}/static/content/imprint.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prevNextButton`,
        path: `${__dirname}/static/content/mixtapes.md`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Official website of SPANDAU20`,
        short_name: `SPANDAU20`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/satellite.png`, // This path is relative to the root of the site.
      },
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "render-blocking",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.adobe.com/fonts"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          // {
          //   /* Exact name of the font as defied in @font-face CSS rule */
          //   name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
          //   /* Path to the font CSS file inside the "static" folder with @font-face definition */
          //   file: "/fonts/fontAwesome/css/all.min.css",
          // },
        ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "neue-haas-grotesk-text",
            /* URL to the font CSS file with @font-face definition */
            file: "https://use.typekit.net/vrb7hvp.css",
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
