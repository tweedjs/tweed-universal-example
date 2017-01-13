const proto = Object.getPrototypeOf(require)

proto.ensure = function (deps, cb) {
  cb(this)
}
