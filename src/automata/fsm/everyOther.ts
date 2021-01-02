function everyOther(str: string): boolean {
    const states: Record<string, Record<string, any>> = {
        empty: {
            '1': '1',
            '0': '0',
        },
        '1': {
            '0': '0',
            '1': 'dead',
        },
        '0': {
            '1': '1',
            '0': 'dead',
        },
        dead: {}
    }

    let currentState: keyof typeof states = 'empty'
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        currentState = states[currentState][char] || currentState
        if (currentState === 'dead') {
            return false
        }
    }

    return !!(currentState && currentState !== 'dead')
}

export default everyOther
