# cs601_hw5_mgkramer

## How to run: Publicly hosted site (Vue app)
[https://kramer-bu-vue-json.netlify.app/](https://kramer-bu-vue-json.netlify.app/)

### Dev Servers used for testing 
```
npm run dev
```
```
netlify dev
```
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Serve Database
```
npm run db:serve
```

## Self created json
* degreeInfo.json

### How I went above and beyond
* This week took a round about way
  * First I explored hosting the json file on its own server as is seen in the package.json "scripts" with npm run db:serve command
    * This worked well for dev but is not the solution for production
  * Next I explored axios which let me to netlify serverless functions
    * I left the serverless functions structure in-tact 
    * This worked great in development with ```netlify dev```
    * Threw 500 error in production 
  * The simplest solution was suggested by my gracious facilitator to just through my json in the public directory and use a simple fetch and boom.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

