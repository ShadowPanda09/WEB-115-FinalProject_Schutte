Two Player Chess Online 
WEB-115 Final Project Proposal Student: Ryan Schutte | Repo: WEB-115_FinalProject_Schutte

Overview
This is an online website that allows two players to connect to it simultaneously and play a game of chess against each other in real time.

The target user is anyone who wants to play chess against a friend on different devices.

Features
Start a new game with a link to give to the opponent.
Once a second player joins, it builds the board and randomly assigns colors.
Each player takes turns playing a move and confirming it for the other player to view.
The board updates in real time as each move is submitted.
A list of moves is kept visible to players.
A checkmate screen appears when one player has won the game, keeping the same board visible and displaying who won.
A refresh or opening the link again should connect the player to the same game as the same side with the current state unchanged.
Users can play again at any time with confirmation from the opponent to reset the board and randomize colors again.

Core Requirements Coverage
Requirement	Implementation
If Statements & Loops	Loops - while checkmate is false, loops to find valid moves, possible loop to build board. If statements to verify legal moves, check for various conditions for notation, etc.
Event Listeners	Click listeners on each tile that allows piece movement selection as well as a move submission button, a game reset button, and potentially a new game button. 
DOM Element Creation	The board, buttons, list, and changes are created or accessed through the DOM.
Classes & Subclasses	A piece abstract class is used, including subclasses for each piece to handle movement and logic. 

DLC — Additional Topics
Real-time Communication
The game is displayed across two devices and updates in real-time as the game is played.

Tech Stack
HTML, CSS, Vanilla JavaScript
Socket.io (probably) for real-time communication
VS Code + GitHub