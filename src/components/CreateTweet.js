import React from "react";

const CreateTweet = () => {
	return (
		<form className="createTweet">
			<textarea cols="30" rows="10"></textarea>
			<button className="submit">Submit</button>
		</form>
	);
};

export default CreateTweet;
