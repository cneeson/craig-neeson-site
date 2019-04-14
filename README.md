# Craig Neeson Site

Craig Neeson's personal blog site, based off the awesome [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

## Deployment

* Pushes to master trigger a build hosted in Azure DevOps.
* Build will:
    * Run a production build
    * Purge contents of Azure storage container
    * Replace content with new artefact
    * Purge the craigneeson CDN endpoint for the changes to be propagated to the edge servers