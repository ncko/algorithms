function transition (stack: string[], symbol: string): string[] | void {
    const _stack = stack.slice()
    switch (symbol) {
        case '(':
            _stack.push(symbol)
            break
        case ')':
            if (!_stack.pop()) {
                return
            }
            break
    }

    return _stack
}

export default function matchingParens(str: string): boolean {
    let stack: string[] = []

    for (let i = 0; i < str.length; i++) {
        const newStack = transition(stack, str[i])

        if (!Array.isArray(newStack)) {
            return false
        }

        stack = newStack
    }

    return !stack.length
}

/**
 * Use a number instead of an actual stack
 */
export function matchingParens2(str: string): boolean {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '(':
                count++
                break
            case ')':
                count--
                break
        }

        if (count < 0) {
            return false
        }
    }

    return !count
}
