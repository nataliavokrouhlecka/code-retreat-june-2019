/**
 * Perform reduce operation over an array
 * 
 * @template A
 * @template T
 * @param reduceStepFunction {(accumulator: A, element: T) => A}
 * @param initialAccumulator {A}
 * @param array {T[]}
 * @returns {A}
 */

function reduce(reduceStepFunction, initialAccumulator, array) {
  TODO()
}

/**
 * Calculate length of an array
 * 
 * @template T
 * @param array {T[]}
 * @returns {number}
 */
function length(array) {
  TODO()
}

/**
 * Return an array with mapFunction applied to all elements of given array
 * 
 * @template T
 * @template S
 * @param mapFunction {(element: T) => S}
 * @param array {T[]}
 * @returns {S[]}
 */
function map(mapFunction, array) {
  TODO()
}

/**
 * Removes elements that do not satisfy the predicate from array
 * 
 * @template T
 * @param predicate {(t: T) => boolean}
 * @array {T[]}
 * @returns {T[]}
 */
function filter(predicate, array) {

}

/**
 * Returns `true` if the array is empty, `false` otherwise
 */

function isEmpty(array) {
  TODO()
}

/**
 * Appends an element to the end of the given array
 */
function append(element, array) {
  TODO()
}

/**
 * Prepends an element to the start of the array
 */
function prepend(element, array) {
  TODO()
}

/**
 * Removes up to `n` elements from the start of the array
 * (returns an empty array if array.length <= n)
 */
function drop(n, array) {
  TODO()
}

/**
 * Takes up to `n` elements from start of the array
 * (returns an array if array.length <= n)
 */
function take(n, array) {
  TODO()
}

function TODO() {
  throw "not implemented"
}

module.exports = {
  append,
  drop,
  filter,
  isEmpty,
  length,
  map,
  prepend,
  reduce
}