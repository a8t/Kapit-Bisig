# Kapit-Bisig

www.kapitbisig.ca

Kapit-Bisig is a mutual aid, advocacy, and information network by and for the Filipino community in Canada.

For more information, contact info@kapitbisig.ca or check out the website.

___


This project is a [Gatsby](gatsbyjs.org/) website with a [Sanity.io](sanity.io/). 

It's a monorepo managed using [Lerna](https://lerna.js.org/).  

## Installation

From this top-level directory, you can simply run:

```bash
npm install
```

This will install packages in this directory as well as in the child directories.  

## Running locally

### Web

You can serve the Gatsby site (the main front-end) from a local server for development. 

```bash
cd ./web
npm run dev
```

This starts up the development server with all the fancy React hot-reloading and stuff like that. 

You can now access the site at http://localhost:8000, and the Gatsby Graphiql page at http://localhost:8000/___graphql.

### Sanity Studio

Sanity is a hosted backend and database service. All we have to do in order to use it is develop a schema for our data to use it.

Sanity includes a single page app 

```bash
cd ./studio
npm run dev
```

Now head to http://localhost:3000 to start editing content.

