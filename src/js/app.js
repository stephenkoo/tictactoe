// $(function(){
// CHANGE PLAYER NAMES
var player1Name = "Player 1";
var player2Name = "Player 2";

$('#name-change-button-1').on('click', changeName1);
$('#name-change-button-2').on('click', changeName2);
function changeName1() {
	var player1NameEntered = $("#player-1-name").val();
	if (player1NameEntered == "") {
		return;
	} else {
		player1Name = player1NameEntered
	}
};
function changeName2() {
	var player2NameEntered = $("#player-2-name").val();
	if (player2NameEntered == "") {
		return;
	} else {
		player2Name = player2NameEntered
	}
};

// ON CLICK: RECORD & DISPLAY PLAYER MOVES, SHOW WHO'S TURN
var playerOneSymbol = 'X';
var playerTwoSymbol = 'O';
var currentPlayerSymbol;

var turnCount = 0;

var grid = [[0,0,0],
			[0,0,0],
	  	    [0,0,0]];

$('.column').on('click', function() {
	// Records row(x) & column(y) position of clicked column
	var row = $(this).parent().index();
	var col = $(this).index();
	
	// If clicked column contains player move, prevent it from being changed.
	if (grid[row][col]!== 0) {
		$('.game-message').empty().append('<h1>Oi! Bugger off ya cunt. That seat\'s taken.</h1>');
		return;
	} else if (winCheck(1) === true || winCheck(2) === true) {
		$('.game-message').empty().append('<h1>OI! STOP THAT YOU CHEEKY ASSHAT. THE OTHER ASSHAT\'S ALREADY WON. I MEAN SERIOUSLY YOU FOOKIN MILLENIALS. ALWAYS WANTING TO DO THINGS YOUR WAY.</h1>');
		return;
	// If turn was even number (e.g. 0), the click was Player 1's.
	// Add move to array, add player's symbol to column, tell other player it's their turn.
	} else if(turnCount %2 === 0) {
	 	grid[row][col] = 1;
	 	currentPlayerSymbol = playerOneSymbol;
		$(this).append(currentPlayerSymbol)
			.css('border-color', 'red');
		if (winCheck(1) === true) {
			$('.game-message').empty()
				.append('<h1>' + player1Name + ' wins!</h1>')
				.css('color', 'red');
		} else {
			$('.game-message').empty().append('<h1>' + player2Name + '\'s turn</h1>');	
		}
	// Else, its Player 2's click. Same as above.
	 } else {
	 	grid[row][col] = 2;
	 	currentPlayerSymbol = playerTwoSymbol;
		$(this).append(currentPlayerSymbol)
			.css('border-color', 'blue');
		if (winCheck(2) === true) {
			$('.game-message').empty()
				.append('<h1>' + player2Name + ' wins!</h1>')
				.css('color', 'blue');
		} else {
			$('.game-message').empty().append('<h1>' + player1Name + '\'s turn</h1>');	
		}
	 };
	 // Record that player took a turn.
	 turnCount++;
});

// DETERMINE WHO WON

function winCheck(i) {
	if (
		(i === grid[0][0] && i === grid[0][1] && i === grid[0][2]) ||
		(i === grid[1][0] && i === grid[1][1] && i === grid[1][2]) ||
		(i === grid[2][0] && i === grid[2][1] && i === grid[2][2]) ||

		(i === grid[0][0] && i === grid[1][0] && i === grid[2][0]) ||
		(i === grid[0][1] && i === grid[1][1] && i === grid[2][1]) ||
		(i === grid[0][2] && i === grid[1][2] && i === grid[2][2]) ||

		(i === grid[0][0] && i === grid[1][1] && i === grid[2][2]) ||
		(i === grid[0][2] && i === grid[1][1] && i === grid[2][0])
		) {
		return true;

	} else {
		return false;
	}
}



// });