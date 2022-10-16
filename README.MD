# React TypeScript Mini-Library Template

This is a very minimal simplified template for creating React component library with TypeScript.


## Minimal Setup

1. Update the **name**, **version**, **description**, **author**, **licence** and whatever fields in [package.json](package.json) that needs to be customized according to your needs.
2. Update the key in resolve.alias in [webpack.config.js](webpack.config.js) from `react-typescript-library` to the name of your package so you can use the same name in development mode by ```import {something} from "name-of-your=package"``` 
3. Write your components anywhere under the [src](src) directory but make sure to export them in the index file right under the [src](src) folder.
4. Run ```npm install``` (and also install any additional dependencies if needed)


## Run demo in development mode

You can write a demo app under the [demo](demo) folder and run it in development mode where you can also import anything exported in the [src](src) folder by refereing to the src folder by the name of your package as configured in step 2 in the **Minimal Setup** section.

To start the demo app in development mode run ```npm start```


## Build demo app

To build the demo app, run ```npm run build-demo```. That outputs the file to the [demo/build](demo/build) folder.


## Build and publish library

To build and publish the library, first run ```npm run build-lib``` to output files to the dist folder. And then ```npm publish```
