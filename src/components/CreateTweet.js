import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ tweets, setTweets }) => {
	const [text, setText] = useState("");

	const showText = function (e) {
		e.preventDefault();
		setTweets([...tweets, { id: uuidv4(), tweet: text }]);
		setText("");
	};

	const saveChange = function (e) {
		setText(e.target.value);
	};

	return (
		<form className="createTweet" onSubmit={showText}>
			<textarea
				onChange={saveChange}
				cols="30"
				rows="10"
				value={text}
			></textarea>
			<button className="submit">Submit</button>
		</form>
	);
};

export default CreateTweet;
