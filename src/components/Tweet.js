import React from "react";

const Tweet = () => {
	// document.querySelector(".submit").addEventListener("click", () => {
	// 	props.name = "changed";
	// });
	// console.log(document.querySelector(".submit"));

	return (
		<div className="tweet">
			<h2>Name</h2>
			<h3>This is tweet</h3>
			<button>Publish</button>
			<button>Remove</button>
		</div>
	);
};

export default Tweet;
