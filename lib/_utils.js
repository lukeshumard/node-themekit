function emptyFn() {
  // Empty fn
}

function isArray(arr) {
  return Array.isArray(arr);
}

function isObj(obj) {
  return obj === Object(obj);
}

function isFn(fn) {
  return (typeof fn === 'function');
}

function objIsEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

module.exports = {emptyFn, isArray, isFn, isObj, objIsEmpty};
