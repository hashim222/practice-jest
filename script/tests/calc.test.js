const addition = require('../calc.js')

describe('Calculator', () => {
    describe('Addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42)
        })
    })
})

