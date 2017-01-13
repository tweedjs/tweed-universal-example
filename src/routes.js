// # The main routes file
// This file maps URIs to pages.

// Thanks to the dynamic-import-webpack Babel plugin
// the import() syntax can be used for Webpack code
// splitting. This makes it so only the routes that
// are visited get their scripts loaded.
//
// @see https://github.com/airbnb/babel-plugin-dynamic-import-webpack
// @see https://webpack.github.io/docs/code-splitting.html
// @see https://github.com/tc39/proposal-dynamic-import

// We can preload some modules that will be used in
// multiple routes. They will be included in the main
// bundle instead of duplicated in the sub-scripts.
import './view/Layout'

export default {
  // Home page
  '/': () => import('./view/pages/HomePage'),

  // About page
  '/about': () => import('./view/pages/AboutPage'),

  // A page that takes time to load!
  '/slow': () => import('./view/pages/LoadingPage')
}
