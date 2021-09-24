import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }) => {
	return (
		<div>
			{tweets.map((tweet) => {
				// console.log(tweets);
				return (
					<Tweet
						name={name}
						key={tweet.id}
						tweet={tweet}
						tweets={tweets}
						setTweets={setTweets}
					></Tweet>
				);
			})}
		</div>
	);
};

export default TweetList;
