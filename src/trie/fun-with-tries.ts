/**
 * This file uses a trie to process large text files in src/data
 *
 * Run this file with `npx ts-node ./src/trie/fun-with-tries.ts`
 *
 * Uncomment lines 13 and 31 to see a large tree representation
 * of all words found in the text.
 */

import fs from 'fs'
import Trie from '.'

// eslint-disable-next-line no-console
// const prettyPrint = (obj: unknown): void => console.log(JSON.stringify(obj, null, 2), '\n\n')
// eslint-disable-next-line no-console
const log =  console.log

log('reading file...')
const initialText = fs.readFileSync('src/data/booksummaries.txt', { encoding: 'utf8' })

log('cleaning text...')
const text = initialText.toLowerCase().replace(/[\W_]/g, ' ').split(/\s/g).map((token) => token.trim())

log('parsing text...')
const trie = new Trie(text)

log('Done.\nHere are the stats:')
log('\tlongest word:\t\t', trie.longestWord())
log('\tlongest composable word:', trie.longestComposableWord())
log('\ttotal words:\t\t', trie.getAllCompleteWords().length)

// prettyPrint(trie.toObject())
