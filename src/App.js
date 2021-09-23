import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
	//here you can write normal js
	//you can access then passed paremter by props.nameOfparam
	//you can pass componets down the tree, but
	//you cant pass it up or to siblings

	//to add handlers you can write function and then add on+(name of event)
	//

	//STATE:
	//
	let name = "Denys";

	const clickHandler = function (name) {
		console.log(`hello ${name}`);
	};

	return (
		<div>
			<h1>Hello React</h1>
			{/* <CreateTweet name={name}></CreateTweet>
			<TweetList name={name}></TweetList> */}
			<button onClick={() => clickHandler("Denys")}>click me</button>
		</div>
	);
}

export default App;
