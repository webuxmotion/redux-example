export function logger(state) {
  return function(next) {
    return function(action) {
      console.log(action)

      return next(action)
    }
  }
}