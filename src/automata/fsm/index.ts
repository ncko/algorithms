class State<Alphabet extends string, States> {
    private _transitions: Map<Alphabet, States>
    readonly _isAccepting: boolean

    constructor(transitions: Record<Alphabet, States>, accepting?: boolean) {
        this._transitions = new Map()
        Object.keys(transitions).forEach((char: Alphabet) => this._transitions.set(char, transitions[char]))
        this._isAccepting = !!accepting
    }

    public nextState(char: Alphabet): States {
        return this._transitions.get(char)
    }

    public isAccepting(): boolean {
        return this._isAccepting
    }
}

interface Initialization<States extends string, Alphabet extends string> {
    initial: States
    final: States[]
    states: Record<States, Record<Alphabet, States>>
}

export default class FSM<States extends string, Alphabet extends string> {
    private _states: Map<string, State<Alphabet, States>>
    private _currentState: States

    constructor(init: Initialization<States, Alphabet>) {
        this._states = new Map()
        const states: States[] = Object.keys(init.states) as unknown as States[]
        states.forEach((state: States) => {
            const stateLabel = init.states[state]
            const isAccepting = init.final.includes(state)
            const newState = new State(stateLabel, isAccepting)
            this._states.set(state, newState)
        })
        this._currentState = init.initial
    }

    public transition(token: Alphabet): FSM<States, Alphabet> {
        const state = this._states.get(this._currentState)
        this._currentState = state.nextState(token)
        return this
    }

    public isRecognized(): boolean {
        return this._states.get(this._currentState).isAccepting()
    }
}
