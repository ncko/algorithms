import matchingParens from "./matchingParens";

describe('matchingParens', () => {
    it('recognizes strings with matching parentheses', () => {
        expect(matchingParens('(())()')).toBe(true)
        expect(matchingParens('())')).toBe(false)
        expect(matchingParens('((())')).toBe(false)
    })
})
