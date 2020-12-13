# Tries

The 2 things that basically define a trie are:
1. A map of children tries
2. Some flag for determining if a node is a complete word (.e.g.: isCompleteWord)

Everything else is sugar

## Useful when
When you have a problem that requires some kind of word validation

Examples:
* Walk through this scrabble board and find all the words
* Given this list of strings, find all the celebrity names
  
## Common Optimization

Suppose as a user types, you want to underline non valid words. So you go letter by letter, and check that each letter has a child node that matches the next letter. If it doesn't, it is not a valid node.

The naive way of doing this requires starting at the root in each iteration. But you can continue from the node you left off at by either:
* keeping state inside the trie
* return the node on each iteration
