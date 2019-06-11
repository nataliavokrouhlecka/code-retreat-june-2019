# code-retreat-june-2019

## Description of tasks:
### Game of Life
Infinite, two-dimensional grid of square cells, each of which is in one of two possible states, alive or dead

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent

Rules:

* Any live cell with fewer than two live neighbors dies, as if by underpopulation.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by overpopulation.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
* More details: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

### Array operations:

* Perform reduce operation over an array
* Calculate length of an array
* Return an array with mapFunction applied to all elements of given array
* Removes elements that do not satisfy the predicate from array
* Returns `true` if the array is empty, `false` otherwise
* Appends an element to the end of the given array
* Prepends an element to the start of the array
* Removes up to `n` elements from the start of the array (returns an empty array if array.length <= n)
* Takes up to `n` elements from start of the array (returns an array if array.length <= n)

## Online environment:
### JavaScript
* Game of Life: https://repl.it/@msdcoderetreat/JS-GameOfLife
* Array Operations: https://repl.it/@msdcoderetreat/JS-arrayOperations
### Java
* Game of Life: https://repl.it/@msdcoderetreat/Game-of-Life
* Array Operations: https://repl.it/@msdcoderetreat/Array-Operations
### Swift
* Game of Life: https://repl.it/@vsejed/CodeRetreatGameOfLife
* Array Operations: https://repl.it/@vsejed/CodeRetreatArrays

## JavaScript - how to run Jest unit test locally?
1. You need to have Node installed in order to use npm (node package manager).
2. Clone repository and navigate to the JS/arrayOperations or JS/gameOfLife folder.
3. In the terminal, go to that folder and type:
`npm install`. 
4. Now you can run the tests in the terminal:
`npm run test` and see the results.
