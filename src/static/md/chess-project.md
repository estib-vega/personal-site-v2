# dumb chess

This is a simple React project I worked on in 2021. It's just a simple implementation of a heuristics-based chess engine.

You can play it here: [https://estib.gitlab.io/chess/](https://estib.gitlab.io/chess/)

And you can see the code repository here: [https://gitlab.com/estib/chess](https://gitlab.com/estib/chess)

## How to play

The player can only play with the white pieces, and the chess game with the black.
A move is calculated every time the player moves a piece (by clicking on a piece and then clicking on the target position). All the possible target positions for a selected piece are highlighted in color.

At the top, the game will display the state: Who's turn is it and whether there is a check or check-mate achieved.

## Self play

On a computer, if you start a game and press the key `A` the game will execute what it thinks is the best move.

If you press `S` the game will play itself. You can stop this by pressing `S` again.

## How it works

Every time the player makes a move, a response move is generated using the tree-search [minimax](https://en.wikipedia.org/wiki/Minimax) algorithm.

In a nutshell, the game calculates the set of all possible next moves and for each of them, the set of all possible response moves by the player are calculated. Then, the best position is determined using heuristics like: What's the number of controlled tiles in the center of the board? How many pieces are under attack vs how many of the opponent's pieces are under attack, and so on.

The algorithm searches only a couple of moves deep, since the set of possibilities grows exponentially the deeper one looks.

Calculating the next move is run in a WebWorker in order to not block the browsers main thread
