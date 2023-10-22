import React from "react";

function Banner({ style, win, guesses, answer }) {
	return (
		<div className={style}>
			{win == "yes" ? (
				<p>
					<strong>Congratulations Audrey, you're beautiful!</strong>{" "}
					And,you got it in <strong>{guesses.length} guesses</strong>.
				</p>
			) : (
				<p>
					Sorry Audrey, you lose! The correct answer is{" "}
					<strong>{answer}</strong>.
				</p>
			)}
		</div>
	);
}

export default Banner;
