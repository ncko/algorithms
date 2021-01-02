import everyOther from "./everyOther";

describe('everyOther Machine', () => {
    it('returns true for empty strings', () => {
        expect(everyOther('')).toBe(true)
    })

    it('returns true for strings with a single symbol', () => {
        expect(everyOther('1')).toBe(true)
        expect(everyOther('0')).toBe(true)
    })

    it('returns true for longer strings with alternating 1s and 0s', () => {
        expect(everyOther('1010')).toBe(true)
        expect(everyOther('0101')).toBe(true)
        expect(everyOther('101001')).toBe(false)
    })
})
