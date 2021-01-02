function matchingParens(str: string): boolean {
    const stack = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i])
        } else if (str[i] === ')') {
            const ret = stack.pop()
            if (!ret) {
                return false
            }
        }
    }

    return !stack.length
}

export default matchingParens
