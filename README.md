# Wordpress Theme Starter

This repository is wordpress theme starter created by Webonado team.



### This starter theme includes:

- [ES6](https://babeljs.io/learn-es2015/)  for JavaScript

- [SASS](http://sass-lang.com/)  preprocessor for CSS

- [Webpack](https://webpack.js.org/)  for managing, compiling and optimizing theme's asset files

- [Browsersync](https://browsersync.io/) for automatic reload after each code change

- [Timber](https://upstatement.com/timber/) + [twig](https://twig.symfony.com/) support



### How to start:

1. clone repository

2. run `yarn` command to install dependencies

3. create `.env` file and set `BROWSERSYNC_PROXY` variable to your local wordpress site URL (see `.env.example` file)

4. run `yarn watch` command to serve your website by Browsersync



### Available commands:

- `yarn watch` - serve development server via Browserstack

- `yarn lint` - lint all SASS, SCSS and JS files

- `yarn dev` - compile assets for development environment

- `yarn prod` - compile assets for production environment
