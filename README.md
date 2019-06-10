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

## How to run Jest unit test locally?
1. You need to have Node installed in order to use npm (node package manager).
2. Create a project folder.
3. In the terminal, go to that folder and type:
`npm init -y`. This will create a package.json file for you. 
4. Modify the JSON object to include following code:
`{
  "scripts": {
    "test": "jest"
  }
}`
5. In the terminal, run following command:
`npm install --save-dev jest`
6. Now you can run the tests in the terminal:
`npm run test` and see the results
