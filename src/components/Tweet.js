import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
	// document.querySelector(".submit").addEventListener("click", () => {
	// 	props.name = "changed";
	// });

	const deleteTweet = function () {
		setTweets(tweets.filter((t) => t.id !== tweet.id));
	};

	return (
		<div className="tweet">
			<h2>{name}</h2>
			<h3>{tweet}</h3>
			<button>Publish</button>
			<button onClick={deleteTweet}>Remove</button>
		</div>
	);
};

export default Tweet;
