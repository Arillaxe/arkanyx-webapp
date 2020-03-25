Skeleton for react application that can be used to spawn projects asap.

## Project contains
- simple folder and file structure
- webpack set up with js/jsx/stylus loaders
- webpack dev server
- config module
- gitignore
- react-router; dev server is configured to handle client side routing
- debug module
- husky git hooks
- universal eslint-config-ff
- commitlint (requires node > 8.12.0)
- branch naming check

## Installation
1. `npm i` install node modules
2. `cp config/config.example.js config/default.js` copy config file
3. Update `config/default.js` with your data
4. `npm start` run application

## NPM commands
- `npm start` - run dev server in development mode with hot reloading
- `npm run build` - build `index.html` and `bundle.js` files in `/build` folder
- `npm run build-prod` - build `index.html` and `bundle.js` files in `/build` folder with production optimizations
- `npm run watch` - run webpack in watch mode
- `npm run eslint` - run eslint

## Debug mode
Project has `debug` package installed. In order to run debug mode, type in browser console `localStorage.debug = 'react-app:*'`

## How to use skeleton for your project
In order to use skeleton you need to clone code from this repo and change origin to *target repository* (i.e. repository of the project you are going to develop)
1. Clone the skeleton repo in separate folder `git clone git@gitlab.truestreet.com:truestreet/truestreet-nodejs-app-skeleton.git folderName` where `folderName` is the name of folder in local configuration, in most cases it should be a name *targetRepository*.
2. Change origin of the repository to *targetRepository* `git remote set-url origin targetRepoLink`
3. Make sure that origin was changed correctly `git remote -v`. Origin should be equal to *targetRepositoryLink*
4. Do first push in master branch `gir push -u origin`
5. Edit `package.json` and `README.md`This is readme
