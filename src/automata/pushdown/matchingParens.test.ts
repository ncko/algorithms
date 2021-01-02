import matchingParens, { matchingParens2 } from "./matchingParens";

describe('matchingParens', () => {
    it('recognizes strings with matching parentheses', () => {
        expect(matchingParens('(())()')).toBe(true)
        expect(matchingParens('())')).toBe(false)
        expect(matchingParens('((())')).toBe(false)
    })
})

describe('matchingParens2', () => {
    it('recognizes strings with matching parentheses', () => {
        expect(matchingParens2('(())()')).toBe(true)
        expect(matchingParens2('())')).toBe(false)
        expect(matchingParens2('((())')).toBe(false)
    })
})
