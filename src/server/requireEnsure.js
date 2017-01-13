// The `import()` syntax gets compiled to Webpack's
// `require.ensure`, which isn't something that exists
// in Node, so for it to work we need to monkey patch
// the `Require` prototype.
const proto = Object.getPrototypeOf(require)

// The `require.ensure` usage looks like this:
//
//     require.ensure([], function (require) {
//       require('./whatever/module/should/be/loaded')
//     })
//
// So, in Node, we simply have to make sure the callback
// is called with the `require` function itself.
proto.ensure = function (deps, cb) {
  cb(this)
}
