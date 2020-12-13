import Trie from "."

const words =  ['car', 'card', 'cards', 'cot', 'cots', 'try', 'trie', 'trim', 'tried']

describe('Trie', () => {
    it('can be initialized with an array of words', () => {
        const node = new Trie(words)
        const children = node.getChildren()
        expect(children.size).toBe(2)
    })

    it('adds and retrieves children as Tries', () => {
        const node = new Trie()

        node.addWord('a')
        let children = node.getChildren()
        expect(children.size).toEqual(1)
        expect(children.get('a')).toBeInstanceOf(Trie)

        node.addWord('b').addWord('al')
        children = node.getChildren()
        expect(children.size).toBe(2)
        expect(children.get('b')).toBeInstanceOf(Trie)
    })

    it('marks empty strings as complete words', () => {
        const notCompleteWord = new Trie('a')
        expect(notCompleteWord.isCompleteWord()).toBe(false)

        const completeWord = new Trie('')
        expect(completeWord.isCompleteWord()).toBe(true)

        const someWord = new Trie('thing')
        expect(someWord.isCompleteWord()).toBe(false)
        someWord.addWord('')
        expect(someWord.isCompleteWord()).toBe(true)
    })

    it('marks undefined as NOT a complete word', () => {
        let node;
        node = new Trie()
        expect(node.isCompleteWord()).toBe(false)
        node = new Trie('')
        expect(node.isCompleteWord()).toBe(true)
    })

    it('provides a list of all added words', () => {
        const someWords = ['boom', 'bust', 'boa']
        const moreWords = ['brim', 'blonde', 'bakery']
        const node = new Trie(someWords)
        moreWords.forEach((word) => node.addWord(word))

        const returnedWords = node.getAllCompleteWords()
        expect(returnedWords.sort()).toEqual([...someWords, ...moreWords].sort())
    })

    it('checks if a given string is a word', () => {
        const trie = new Trie(words)

        expect(trie.isWord('cards')).toBe(true)
        expect(trie.isWord('trim')).toBe(true)
        expect(trie.isWord('triw')).toBe(false)
    })

    it('provides an object literal representation', () => {
        const input = ['a', 'b', 'cd']
        const expectedOutput = {
            isCompleteWord: false,
            children: {
                a: {
                    isCompleteWord: true,
                    children: {}
                },
                b: {
                    isCompleteWord: true,
                    children: {}
                },
                c: {
                    isCompleteWord: false,
                    children: {
                        d: {
                            isCompleteWord: true,
                            children: {}
                        }
                    }
                },
            }
        }

        const trie = new Trie(input)
        const output = trie.toObject()
        expect(output).toEqual(expectedOutput)
    })

    it('finds the longest word', () => {
        const empty = new Trie('')
        expect(empty.longestWord()).toBe('')

        const trie2 = new Trie(words)
        expect(trie2.longestWord()).toBe('cards')
    })

    // https://leetcode.com/problems/longest-word-in-dictionary/
    it('finds the longest word that can be built, one character at a time, by other words', () => {
        const example1 = new Trie(['w', 'wo', 'wor', 'worl', 'world'])
        const word1 = example1.longestComposableWord()
        expect(word1).toBe('world')

        const example2 = new Trie(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
        const word2 = example2.longestComposableWord()
        expect(word2).toBe('apple')
    })
})
