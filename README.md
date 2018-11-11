# Experimental Project - Server-side rendering
A project to try server-side rendering with a React app.


## Setup
### Options
Generally speaking, there are two ways for us to build a ssr application w/ React.
* customize a project built upon create-react-app (cra)
* build a project from scratch
The second one is what we use in this project.

### Prerequisites
To enable the server-side rendering for our react app, we need followings:
* packages
  - npm: manage all the packages
  - nodejs
  - express
  - babel: convert react es6 syntax to es3/5 to be compatible in browsers, and also convert es import/export to commonJS supported require/module.export (for nodejs server)
  - webpack: bundle resources
  - react
  - redux (optional): if we test ssr with redux store
* a server: use nodejs and express for easy and quick development

### File Structure


### Steps
1. use npm to init the package.json
  - necessary packages and their dependencies
  - scripts to build and run our server