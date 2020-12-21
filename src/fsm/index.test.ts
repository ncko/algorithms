import FSM from "./index";

type Alphabet = '0' | '1'
type States = 'EVEN' | 'ODD'

describe('FSM', () => {
    it('can interpret a string of input', () => {
        const str = '01001'
        const evenZerosMachine = new FSM<States, Alphabet>({
            initial: 'EVEN',
            final: ['EVEN'],
            states: {
                EVEN: {
                    0: 'ODD',
                    1: 'EVEN'
                },
                ODD: {
                    0: 'EVEN',
                    1: 'ODD'
                }
            }
        })
        str.split('').forEach((char: Alphabet) => evenZerosMachine.transition(char))
        expect(evenZerosMachine.isRecognized()).toBe(false)
        evenZerosMachine.transition('0')
        expect(evenZerosMachine.isRecognized()).toBe(true)
    })
})
