import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [win, setWin] = React.useState("");

	return (
		<div>
			<Guesses guesses={guesses} answer={answer} />
			<GuessInput
				guesses={guesses}
				setGuesses={setGuesses}
				win={win}
				setWin={setWin}
				answer={answer}
			/>
			{win == "yes" && (
				<Banner
					style="happy banner"
					win={win}
					guesses={guesses}
					answer={answer}
				/>
			)}
			{win == "no" && (
				<Banner
					style="sad banner"
					win={win}
					guesses={guesses}
					answer={answer}
				/>
			)}
		</div>
	);
}

export default Game;
