# TypeScript + Node Starter

The main purpose of this repository is to show a working Node.js API Server in TypeScript.

# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Deploying the app](#deploying-the-app)
	- [Pre-reqs](#Prerequisites)
- [TypeScript + Node](#typescript--node)
	- [Getting TypeScript](#getting-typescript)
	- [Project Structure](#project-structure)
	- [Building the project](#building-the-project)
	- [Type Definition (`.d.ts`) Files](#type-definition-dts-files)
	- [Debugging](#debugging)
	- [Testing](#testing)
	- [ESLint](#eslint)
- [Dependencies](#dependencies)
	- [`dependencies`](#dependencies)
	- [`devDependencies`](#devdependencies)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)

# Getting started
- Clone the repository
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run build
npm start
```

Finally, navigate to `http://localhost:<PORT>` and you should see the template being served and rendered locally!

# Deploying the app
There are many ways to deploy a Node app, and in general, nothing about the deployment process changes because you're using TypeScript.
In this section, I'll walk you through how to deploy this app to Azure App Service using the extensions available in VS Code because I think it is the easiest and fastest way to get started, as well as the most friendly workflow from a developer's perspective.

## Prerequisites
- WIP

# TypeScript + Node
In the next few sections I will call out everything that changes when adding TypeScript to an Express project.
Note that all of this has already been set up for this project, but feel free to use this as a reference for converting other Node.js projects to TypeScript.

## Getting TypeScript
TypeScript itself is simple to add to any project with `npm`.
```
npm install -D typescript
```

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **.github**              | Contains GitHub settings and configurations, including the GitHub Actions workflows           |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/config**           | Passport authentication strategies and login middleware. Add other complex config code here   |
| **src/controllers**      | Controllers define functions that respond to various http requests                            |
| **src/models**           | Models define DB schemas that will be used in storing and retrieving data from DB  |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)          |
| **src**/index.ts         | Entry point to your express app                                                               |
| **tests**                | Contains your tests. Separate from source because there is a different build process.         |
| **src/views**            | Views define how your app renders on the client. In this case we're using ejs                 |
| .env.template            | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| **tools/**               | Tool for Build script that copies images, fonts, and JS libs to the dist folder               |
| jest.config.js           | Used to configure Jest running tests written in TypeScript                                    |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |

## Building the project
It is rare for JavaScript projects not to have some kind of build pipeline these days, however Node projects typically have the least amount of build configuration.
Because of this I've tried to keep the build as simple as possible.
If you're concerned about compile time, the main watch task takes ~2s to refresh.


### Running the build
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:


| Npm Script | Description  |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `lint`                    | Runs ESLint on project files                                                                      |
| `serve-debug`             | Runs the app with the --inspect flag                                                              |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `test`                    | Runs tests using Jest test runner                                                                 |


# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| dotenv                          | Loads environment variables from .env file.                           |
| errorhandler                    | Express 4 middleware.                                                 |
| express                         | Node.js web framework.                                                |


## `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| @types                          | Dependencies in this folder are `.d.ts` files used to provide types    |
| chai                            | Testing utility library that makes it easier to write tests            |
| jest                            | Testing library for JavaScript.                                        |
| nodemon                         | Utility that automatically restarts node process when it crashes       |
| supertest                       | HTTP assertion library.                                                |
| ts-jest                         | A preprocessor with sourcemap support to help use TypeScript with Jest.|
| ts-node                         | Enables directly running TS files. Used to run `copy-static-assets.ts` |
| eslint                          | Linter for JavaScript and TypeScript files                             |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity   |

To install or update these dependencies you can use `npm install` or `npm update`.

## Code Conventions
https://google.github.io/styleguide/tsguide.html

## License
Licensed under the [MIT](LICENSE) License.
