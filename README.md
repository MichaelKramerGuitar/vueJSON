# cs601_hw5_mgkramer

## How to run 
```
npm run dev
```
## Project setup
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

### Notes on ```npm run dev``` and Dependencies
* see package.json 
  * "scripts"
    * "dev": "concurrently --kill-others \"npm run serve\" \"npm run db:serve\""
* this command requires the concurrently library 
  * ```npm install -g concurrently```
* also json-server
  * ```npm install -g json-server```

## Self created json
* degreeInfo.json

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
