import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guesses, setGuesses, win, setWin, answer }) {
	const [guessedLetters, setGuessedLetters] = React.useState("");
	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(e) => {
				e.preventDefault();
				console.log(guessedLetters);
				let nextGuesses = [];
				if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
					nextGuesses = [...guesses, guessedLetters];
					setGuesses(nextGuesses);
				}
				setGuessedLetters("");
				if (nextGuesses.includes(answer)) {
					setWin("yes");
				} else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
					setWin("no");
				}
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guessedLetters}
				onChange={(event) =>
					setGuessedLetters(event.target.value.toUpperCase())
				}
				pattern="[A-Za-z]{5}"
				title="Exactly 5 letters are required"
				maxLength="5"
				//only allow letters
				onKeyDown={(event) => {
					if (!/[A-Za-z]/.test(event.key)) {
						event.preventDefault();
					}
				}}
				disabled={win}
			/>
		</form>
	);
}

export default GuessInput;
