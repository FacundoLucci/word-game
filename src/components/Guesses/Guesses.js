import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guesses({ guesses, answer }) {
	const numOfGuesses = range(NUM_OF_GUESSES_ALLOWED);
	const numOfGuessesLeft = numOfGuesses.length - guesses.length;
	console.log(numOfGuessesLeft);

	return (
		<div className="guess-results">
			{guesses.map((guess, index) => (
				<p className="guess" key={`${guess}-${index}`}>
					{checkGuess(guess, answer).map(
						({ letter, status }, index) => (
							<span
								className={`cell ${status}`}
								key={`${letter}-${index}`}
							>
								{letter}
							</span>
						)
					)}
				</p>
			))}
			{range(numOfGuessesLeft).map((guess, index) => (
				<p className="guess" key={`${guess}-${index}`}>
					{range(5).map((letter, index) => (
						<span
							className="cell"
							key={`${letter}-${index}`}
						></span>
					))}
				</p>
			))}
			{/*
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
				<p className="guess" key={`${guess}-${index}`}>
					{guesses[row].split("").map((letter, index) => (
						<span
							className="cell"
							key={`${letter}-${index}`}
						></span>
					))}
				</p>
			))}
          */}
		</div>
	);
}

export default Guesses;
