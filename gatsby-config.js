/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `DBPCSC496`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-styled-components","gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options:{"icon": "src/images/icon.png"
  }
}, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",{
  resolve: 'gatsby-source-filesystem',
  options: {
    "name": "images",
    "path": "./src/images/"
  },
  __key: "images"
}, {
  resolve: 'gatsby-source-filesystem',
  options: {
    "name": "pages",
    "path": "./src/pages/"

  },
  __key: "pages"

},{
  resolve: "gatsby-source-graphql",
  options: {
    
    typeName: "DrupalGraphQL",
    fieldName:"Drupal",
    //url: "https://kecatalog.dev.wwbtc.com/graphql",
    //url: "https://10.89.0.11/graphql",
    //url: "https://api.keeneland.com/graphql",
    //url: "https://10.89.0.24/graphql",
    url:'https://csc496f22demo.tldr.dev/graphql'
  }
  }

],
}
