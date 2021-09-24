import { useState, useEfect } from "react";
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
	//you have to import it from react as well,
	//it has such structure:
	//then if you update it with second fucntion(setName in this case)
	// it will rerender just part of UI that uses that state
	//
	//then you can pass down state and stateSetter to modify it

	//if you need to access state from sibling component,
	//then you have to uplift state and then pass to those 2 siblings

	//the problem with updaing state is that you should do it based on porps.key
	//the reason for that - is we have miltiple objects that are siblings
	//
	//for generating random props.key we use UUID

	//
	// for CSS create a separate file and then import it to App.js
	//or
	// you can use css modules, so jsut write for example: App.module.css
	//then import it in App.js: import s from '...App.module.css'
	//and then use 's' as object

	//useEfect
	//is used to run specific functionality whenever something happens
	// useEfect(() => {
	// 	console.log("I am running function");
	// }, []);
	//
	//then in [] you can pass objects, so fcuntion will be rub each time those objects are updated

	let name = "Denys";
	// const [name, setName] = useState("Denys");
	const [tweets, setTweets] = useState([]);

	return (
		<div>
			<h1>Hello {name}</h1>
			<CreateTweet
				name={name}
				tweets={tweets}
				setTweets={setTweets}
			></CreateTweet>
			<TweetList name={name} tweets={tweets} setTweets={setTweets}></TweetList>
		</div>
	);
}

export default App;
