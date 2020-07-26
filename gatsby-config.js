module.exports = {
  siteMetadata: {
    title: "David Norman - Front End Developer",
    description: "I am a Front End Developer from the United Kingdom",
    author: "@davidn0rman",
    shortname: "David",
    fullname: "David Norman",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Source Code Pro",
          "Source Sans Pro:400,700,900",
          "Lato:300,400,400i,700", // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
