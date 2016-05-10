$(function(){
var playerOneSymbol = 'X';
var playerTwoSymbol = 'O';
var playerTurns = 0;
var currentPlayerSymbol;

$('.column').on('click', function() {
	 if(playerTurns %2 === 0) {
	 	currentPlayerSymbol = playerOneSymbol;
		$(this).append(currentPlayerSymbol)
			.css('border-color', 'red');
	 } else {
	 	currentPlayerSymbol = playerTwoSymbol;
		$(this).append(currentPlayerSymbol)
			.css('border-color', 'blue');
	
	 };
	 playerTurns++;
});


changeTurn();
console.log(playerTurns);




});

// $('.column').on('click', function(){
//   $(this).append('O')
//     .css('border-color', 'blue');
//	$('.player-status').replaceWith('<h1>Player 1\'s turn</h1>');
// });

})