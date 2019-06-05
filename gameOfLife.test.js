const {nextCellState} = require('./gameOfLife')

describe('nextCellState', () => {
  it('should die if is alive and has less than 2 neighbours', () => {
    expect(nextCellState(true, 0)).toBe(false);
  })

  it('should live if is alive and has 2 or 3 neighbours', () => {
    expect('TODO').toBe('implemented')
  })

  it('should die if is alive and has more than 3 neighbours', () => {
    expect('TODO').toBe('implemented')
  })

  it('should live if is dead and has exactly 3 neighbours', () => {
    expect('TODO').toBe('implemented')
  })
})

// another test could check if next generation is computed correctly
// provide generation and check if function returns what you expect
