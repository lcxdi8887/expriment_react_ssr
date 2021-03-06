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
1. use npm to init the package.json, with 'npm init -y'
  - necessary packages and their dependencies
  - scripts to build and run our server
2. install necessary packages
3. add babel config file, more info: https://babeljs.io/docs/en/config-files
   and webpack config file, more info: https://webpack.js.org/configuration/
4. based on webapck setting, add bundle and client files
   Because we currently test without redux, the diff between two files are just use render/hydrate
5. add server template file
6. add server index to handle requests