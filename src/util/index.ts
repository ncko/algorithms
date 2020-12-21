function reverseAlphabetical(words: string[]): string[] {
    return words.slice().sort().reverse()
}

function longestString(words: string[]): string {
    return words.reduce((a, b) => a.length > b.length ? a : b)
}

export {
    reverseAlphabetical,
    longestString
}
