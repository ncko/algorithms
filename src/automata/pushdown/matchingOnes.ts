function matchingOnes(str: string): boolean {
    let stack = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            stack += 1
        } else if (str[i] === '0') {
            stack -= 1
        }
    }

    return !stack
}

export default matchingOnes
