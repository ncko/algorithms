# Finite State Machines

Finite state machines can recognize strings with repeating patterns that do not depend on an arbitrary number. Examples of strings FSMs can recognize:
* does this string have 21 1s? (21 is not arbitrary)
* is every other character in this string a 1? (2 is not arbitrary)

Examples of strings that FSMs can not recognize:
* does this string have the same number of 1s as 0s? (the number of 1s and 0s is arbitrary)
* does this string contain only matching parentheses? ((())())()

## Types of Finite State Machines

* Deterministic
  * for each state, any symbol has only a single transition
* Non-Deterministic
  * a symbol can have more than one transition
* Epsilon Non-Deterministic
* Mealy
  * produces output
  * outputs are determined by current state and current inputs
  * each arc or transition is labeled with an output value
* Moore
  * produces output
  * outputs are determined only by current state
  * each node or state is labeled with an output value

## Resources
* [My Notes](https://www.notion.so/2020-12-14-Finite-State-Machines-e8ec8af60ae249f38a3fe76a533bcb96)
* Youtube Video: [Finite State Machines](https://www.youtube.com/watch?v=lh2onWfBrxk)
* Youtube Video: [Finite State Machines (Finite Automata)](https://www.youtube.com/watch?v=Qa6csfkK7_I)
* [Theory of Computation - Fall 2011 (Course)](https://www.youtube.com/watch?v=GP21wU6R0-o&list=PLslgisHe5tBM8UTCt1f66oMkpmjCblzkt) at UC Davis
* [Wikipedia](https://en.wikipedia.org/wiki/Finite-state_machine)
* [XState](https://xstate.js.org/docs/)
