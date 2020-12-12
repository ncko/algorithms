import { TrieNode } from "./index";

const words =  ['car', 'card', 'cards', 'cot', 'cots', 'try', 'trie', 'trim', 'tried']

describe('TrieNode', () => {
    it('can be initialized with an array of words', () => {
        const node = new TrieNode(words)
        const children = node.getChildren()
        expect(children.size).toBe(2)
    })

    it('adds and retrieves children as Tries', () => {
        const node = new TrieNode()

        node.addWord('a')
        let children = node.getChildren()
        expect(children.size).toBe(1)
        expect(children.get('a')).toBeInstanceOf(TrieNode)

        node.addWord('b').addWord('al')
        children = node.getChildren()
        expect(children.size).toBe(2)
        expect(children.get('b')).toBeInstanceOf(TrieNode)
    })

    it('marks empty strings as complete words', () => {
        const notCompleteWord = new TrieNode('a')
        expect(notCompleteWord.isCompleteWord()).toBe(false)

        const completeWord = new TrieNode('')
        expect(completeWord.isCompleteWord()).toBe(true)
    })

    it('marks undefined as NOT a complete word', () => {
        let node;
        node = new TrieNode()
        expect(node.isCompleteWord()).toBe(false)
        node = new TrieNode('')
        expect(node.isCompleteWord()).toBe(true)
    })
})
