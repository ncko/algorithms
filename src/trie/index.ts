export type ChildMap = Map<string, Trie | null>

interface Options {
    initialChildren?: ChildMap
    isCompleteWord?: boolean
}

interface Literal {
    isCompleteWord: boolean,
    children: Record<string, Literal>
}

export default class Trie {
    private readonly _children: ChildMap
    private _isCompleteWord: boolean

    constructor(word?: string | string[], options?: Options) {
        const isEmptyString = ((typeof word !== 'undefined') && !word.length)

        this._children = options?.initialChildren || new Map()
        this._isCompleteWord = options?.isCompleteWord || isEmptyString

        if (word) {
            const words = Array.isArray(word) ? word : [word]
            words.forEach((word) => this.parseWord(word))
        }
    }

    static clone(trie: Trie, word?: string): Trie {
        return new Trie(word, {
            initialChildren: trie.getChildren(),
            isCompleteWord: trie.isCompleteWord()
        })
    }

    public getChildren(): ChildMap {
        return this._children
    }

    public isCompleteWord(): boolean {
        return this._isCompleteWord
    }

    public toObject(): Literal {
        const children: Record<string, Literal> = {}
        for (const [key, trie] of this._children.entries()) {
            children[key] = trie.toObject()
        }

        return {
            isCompleteWord: this._isCompleteWord,
            children
        }
    }

    public getAllCompleteWords(): string[] {
        const words = []

        for (const [key, trie] of this._children) {
            const isComplete = trie.isCompleteWord()
            const completeWords = trie.getAllCompleteWords()
            const decorated = completeWords.map((word) => key + word)

            if (isComplete) {
                words.push(key)
            }

            words.push(...decorated)
        }

        return words
    }

    public addWord(word: string): Trie {
        if (word.length === 0) {
            this._isCompleteWord = true
        } else {
            this.parseWord(word)
        }

        return this
    }

    public isWord(word: string): boolean {
        if (word.length === 0) {
            return this._isCompleteWord
        }

        const firstLetter = word.slice(0, 1)
        const restOfWord = word.slice(1)
        const existingNode = this._children.get(firstLetter)

        if (!existingNode) {
            return false
        }  else {
            return existingNode.isWord(restOfWord)
        }
    }

    public longestWord(): string {
        if (!this._children.size) {
            return ''
        }

        const words = []
        for (const [key, trie] of this._children.entries()) {
            const largestWord = key + trie.longestWord()
            words.push(largestWord)
        }
        return words.sort().reverse().reduce((a, b) => a.length > b.length ? a : b)
    }

    public longestComposableWord(): string {
        if (!this._children.size) {
            return ''
        }

        const words = []

        for (const [key, trie] of this._children.entries()) {
            if (trie.isCompleteWord()) {
                const longestComposable = key + trie.longestComposableWord()
                words.push(longestComposable)
            }
        }

        if (!words.length) {
            return ''
        }

        return words.sort().reverse().reduce((a, b) => a.length > b.length ? a : b)
    }

    private parseWord(word: string): void {
        if (word.length === 0) {
            return
        }

        const firstLetter = word.slice(0, 1)
        const restOfWord = word.slice(1)
        const existingNode = this._children.get(firstLetter)

        const newNode = existingNode ? Trie.clone(existingNode, restOfWord) : new Trie(restOfWord)
        this._children.set(firstLetter, newNode)
    }
}

