import matchingOnes from "./matchingOnes"

describe('matchingOnes', () => {
    it('recognizes strings that have the same number of 1s and 0s', () => {
        expect(matchingOnes('000111')).toBe(true)
        expect(matchingOnes('010101')).toBe(true)
        expect(matchingOnes('011001')).toBe(true)
        expect(matchingOnes('001')).toBe(false)
        expect(matchingOnes('01101')).toBe(false)
        expect(matchingOnes('000111')).toBe(true)
    })
})
