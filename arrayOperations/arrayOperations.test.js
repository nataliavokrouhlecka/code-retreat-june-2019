const { isEmpty, map, reduce } = require('./array-ops')

describe('reduce', () => {
  it('should just return accumulator for an empty array', () => {
    expect(reduce((acc, item) => acc + 1, 0, [])).toBe(0)
  })
})

describe('map', () => {
  it('should not change the structure of the array', () => {
    const array = [1,2,3,4,5]
    expect(map(element => element, array)).toEqual(array)
  })
})

describe('isEmpty', () => {
  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return false for non-empty array', () => {
    [0, '0', [], {}].forEach ( element =>
      expect(isEmpty([element])).toBe(false)
    )
  });
});