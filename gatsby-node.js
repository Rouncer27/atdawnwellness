const path = require(`path`)

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === "build-html"
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null(),
              },
              {
                test: /scrollmagic/,
                use: loaders.null(),
              },
              {
                test: /mapbox-gl/,
                use: ["null-loader"],
              },
            ]
          : [],
    },
    resolve: {
      alias: {
        TweenLite: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenLite.js"
        ),
        TweenMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenMax.js"
        ),
        TimelineLite: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineLite.js"
        ),
        TimelineMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineMax.js"
        ),
        ScrollMagic: path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
        ),
        "animation.gsap": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
        ),
        "debug.addIndicators": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
        ),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWordpressPage {
          edges {
            node {
              slug
              template
              wordpress_id
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template === "tpl-page-about.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-contact.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-book.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/book.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-services.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/services.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-home.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      }
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
