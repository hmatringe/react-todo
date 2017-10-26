const app = {
	title : "The title",
	subtitle : "This is my subtitle",
	options : ["A","B","C"]
}
function getSubtitle(subtitle) {
	if (subtitle) {
		return <h3>{subtitle}</h3>;
	}
}
function getOptions(options) {
	if (options && options.length > 0 ) {
		return <p>Here are your options: {options}</p>;
	}	else {
		return <p>No options</p>;
	}
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{getSubtitle(app.subtitle)}
		{getOptions(app.options)}
		<ol>
			<li>a todo</li>
			<li>a todo</li>
			<li>a todo</li>
			<li>a todo</li>
			<li>a todo</li>
		</ol>
	</div>
);


const appRoot = document.getElementById('app');
const user = {
name : "Hadrien Matringe",
age : 34,
location : "Paris"
}
// function getLocation(location) {
// 	if (location){
// 		return <p>City: {location}</p>;
// 	}
// }
// const template2 = (
// 	<div>
// 		<h1>{user.name ? user.name : "noname"}</h1>
// 		<p>Age: {user.age}</p>
// 		{getLocation(user.location)}
// 	</div>
// );

let count = 0

const addOne = () => {
	count ++;
	renderCounterApp();
};

const minusOne = () => {
	if (count > 0) {
		count --;
	}
	renderCounterApp();
}

const reset = () => {
	count = 0;
	renderCounterApp();
};

const renderCounterApp = () => {

	const template3 = (
		<div>
			<div>count: {count}</div>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);

	ReactDOM.render(template3,appRoot);
};

renderCounterApp();



