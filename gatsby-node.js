/*
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Ensure the node is of the expected type
  if (node.internal.type === 'DrupalNodeRecipes') {
    // Check if 'path' field exists, otherwise use a default path
    const slug = node.path ? node.path.alias : `/node/${node.drupal_id}`;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    query MyQuery {
      Drupal {
        nodeRecipes(first: 500) {
          edges {
            node {
              changed
              cookingTime
              created
              difficulty
              id
              title
              status
              path
              preparationTime
              numberOfServings
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors; // Reject the promise if there are errors
    }

    const recipes = result.data.Drupal.nodeRecipes.edges;

    pages.forEach(({ node }) => {
      // Define the appropriate template based on your content type
      console.log("PATH")
      console.log(node.path)
      const page_path = node.path)

      createPages({
        path: '${page_path}',
        component: pageTemplate,
        context:
        {
            nid: node.id,
            data: node,
        },
        })
    })
  })
};
*/

/*
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions}) =>
{
    const {createNodeField} = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
    createNodeField({
        node,
        name: 'slug',
        value: slug,
    })
}

exports.createPages = ({actions, graphql}) => 
{
    const {createPages} = actions
    return new Promise((resolve, reject) => {
        const {createPage} = actions
        return new Promise((resolve, reject) =>
        {
            const articleTemplate = path.resolve('src/templates/node/article/index.js')
            const pageTemplate = path.resolve('src/pages/recipe.js')
            const horseTemplate = path.resolve('src/page/catalogpage.js')
            //const paragraphVimeo = path.resolve(src/templates/paragraph/paragraph__vimeo_vimeovideo/index.js)
            resolve
            (
                graphql(`
                    query MyQuery {
                        Drupal {
                          nodeRecipes(first: 100) {
                            edges {
                              node {
                                changed
                                cookingTime
                                created
                                difficulty
                                id
                                title
                                status
                                path
                                preparationTime
                                numberOfServings
                              }
                            }
                          }
                        }
                      }
                `).then(result =>
                    {
                        if(result.errors)
                        {reject(result.errosr)}
                        console.log("PAGES")
                        console.log(result.data.Drupal.nodeRecipes)
                        const pages = result.data.Drupal.nodeRecipes.edges;

                        pages.forEach(({node}, index)=>
                        {
                            console.log(node);
                            console.log(node.path);
                            //const page_path= (node.path && node.path.alias) ? node.path.alias: : '/node/' + node.drupal_id;
                            const page_path = node.path
                            console.log(page_path);
                            createPages({
                                path: '${page_path}',
                                component: pageTemplate,
                                context:
                                {
                                    nid: node.id,
                                    data: node,
                                },
                            })
                        })
                    })
                
                   
                    
                    
                
                
                
            )
        })
    })
}
*/

const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions; // Correct function name

  const pageTemplate = path.resolve('src/pages/recipe.js');

  return new Promise((resolve, reject) => {
    graphql(`
      query MyQuery {
        Drupal {
          nodeRecipes(first: 100) {
            edges {
              node {
                changed
                cookingTime
                created
                difficulty
                id
                title
                status
                path
                preparationTime
                numberOfServings
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors); // Correct spelling of 'errors'
      }
      console.log("PAGES");
      console.log(result.data.Drupal.nodeRecipes);
      const pages = result.data.Drupal.nodeRecipes.edges;

      pages.forEach(({ node }, index) => {
        console.log(node);
        console.log(node.path);
        const page_path = node.path;
        console.log(page_path);
        createPage({ // Correct function name
          path: `${page_path}`, 
          component: pageTemplate,
          context: {
            nid: node.id,
            data: node,
          },
        });
      });

      resolve(); // Resolve the outer promise once the pages are created
    });
  });
};
