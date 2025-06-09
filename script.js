/* TOP orientations

store the gameboard as an array inside of a gameboard object

get the work in the console before of the UI

logic to check if the game has ended

function that allows the player to add marks in a specific spot on the board + logic that keep players from marking spots that are already taken
*/

/* how the game should run

frame{
    name of the game;
    select which marker the player wants to use;
    gameboard with 9 places (buttons)
    restart button
        blank space
    footer with the owner credits
}

arrowed function{
    user selects its marker ->
        - two buttons for this selector;
        - event listener and code to switch the markers;

    -> board resets ->
        - with an empty gameboard, 09 buttons and event listener for the player and computer actions;

    -> player add his marker to a specific location in the gameboard ->
        - player add his marker through an event listener;
        - the code verifies if the location is already taken > if it is, either do nothing or warns the player, if it isnt, the code follows;
        - the code gets his marker, transform the specific div in a div with his marker and transforms it in a non-button thing, occupying it;
        - might be interesting to set a value to the element such as (0 for blank, 1 for user, 2 for computer);

    -> computer add his marker to another location in the game board ->
        - the computer add his marker to a random empty location in the game board;
        - the code gets his marker, transform the specific div in a div with his marker and transforms it in a non-button thing, occupying it;

    -> this goes until one of them completes the requirements (line in a column, line in a row or line in a diagonal) ->
        - requirements: row, column or diagonal;

    -> it is announced if the game had a winner or if it ended with a draw ->
        - "Player/Computer Won with a `row`, `column` or `diagonal`";

    -> with the announce, a button comes up asking for a reset or a continue to play ->
        - button and event listener for both buttons;
        - path in case user chooses the reset;
        - path in case user chooses to continue;

    -> with the reset, the game resets / with the continue to play, the game stores the score of both and resets to a new round ->
}
*/