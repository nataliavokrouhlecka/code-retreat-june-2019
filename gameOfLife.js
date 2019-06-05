const initialState = ''

/**
 * find out if cell will be alive in next generation
 */
const nextCellState = (currentState, neighbours) => {
  return 'return next state of the cell'
}

/**
 * Returns next state of the game
 */
const nextFrame = (currentState) => {
  return 'The Next Generation'
}

/**
 * main loop as recursion with "sleep"
 */
const main = (currentState) => {
  const newState = nextFrame(currentState)
  setTimeout(() => main(newState), 1000 /* 1 second */)
}

/* uncomment next line if you want to run the main loop, not just tests */
// main(initialState)

module.exports = {
  nextCellState,
  nextFrame,
  main
}