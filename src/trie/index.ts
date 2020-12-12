export type ChildMap = Map<string, TrieNode>

interface Options {
    initialChildren?: ChildMap
}

export class TrieNode {
    private _isCompleteWord: boolean
    private _children: ChildMap

    constructor(word?: string | string[], options?: Options) {
        this._children = options?.initialChildren || new Map()
        this._isCompleteWord = (typeof word !== 'undefined') && !word.length

        if (word) {
            const words = Array.isArray(word) ? word : [word]
            words.forEach((word) => this.parseWord(word))
        }
    }

    public addWord(word: string): TrieNode {
        this.parseWord(word)
        return this
    }

    public getChildren(): ChildMap {
        return this._children
    }

    public isCompleteWord(): boolean {
        return this._isCompleteWord
    }

    private parseWord(word: string): void {
        const firstLetter = word.slice(0, 1)
        const restOfWord = word.slice(1)
        const existingChild = this._children.get(firstLetter)

        if (word.length === 0) {
            this._isCompleteWord = true
        } else if (existingChild) {
            this._children.set(firstLetter, new TrieNode(restOfWord, {
                initialChildren: existingChild.getChildren()
            }))
        } else {
            this._children.set(firstLetter, new TrieNode(''))
        }
    }
}

