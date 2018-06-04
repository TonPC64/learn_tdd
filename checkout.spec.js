const Checkout = require('./checkout')

describe('checkout', () => {
  const rules = {
    A: {
      unit: 50,
      promotion: {
        buy: 3,
        for: 130
      }
    },
    B: {
      unit: 30,
      promotion: {
        buy: 2,
        for: 45
      }
    },
    C: {
      unit: 20
    },
    D: {
      unit: 15
    }
  }
  it('Should return 0 if send ""', () => {
    const expected = 0
    const checkout = new Checkout(rules)
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 50 if send "A"', () => {
    const expected = 50
    const checkout = new Checkout(rules)
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 80 if send "AB"', () => {
    const expected = 80
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('B')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 115 if send "CDBA"', () => {
    const expected = 115
    const checkout = new Checkout(rules)
    checkout.scan('C')
    checkout.scan('D')
    checkout.scan('B')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 100 if send "AA"', () => {
    const expected = 100
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 130 if send "AAA"', () => {
    const expected = 130
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 130 if send "aaa"', () => {
    const expected = 130
    const checkout = new Checkout(rules)
    checkout.scan('a')
    checkout.scan('a')
    checkout.scan('a')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 180 if send "AAAA"', () => {
    const expected = 180
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 230 if send "AAAAA"', () => {
    const expected = 230
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 260 if send "AAAAAA"', () => {
    const expected = 260
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 160 if send "AAAB"', () => {
    const expected = 160
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('B')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 175 if send "AAABB"', () => {
    const expected = 175
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('B')
    checkout.scan('B')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 190 if send "AAABBD"', () => {
    const expected = 190
    const checkout = new Checkout(rules)
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('B')
    checkout.scan('B')
    checkout.scan('D')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
  it('Should return 190 if send "DABABA"', () => {
    const expected = 190
    const checkout = new Checkout(rules)
    checkout.scan('D')
    checkout.scan('A')
    checkout.scan('B')
    checkout.scan('A')
    checkout.scan('B')
    checkout.scan('A')
    const result = checkout.calculateTotal()
    expect(expected).toEqual(result)
  })
})
