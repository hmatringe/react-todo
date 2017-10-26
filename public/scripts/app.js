"use strict";

var app = {
	title: "The title",
	subtitle: "This is my subtitle",
	options: ["A", "B", "C"]
};
function getSubtitle(subtitle) {
	if (subtitle) {
		return React.createElement(
			"h3",
			null,
			subtitle
		);
	}
}
function getOptions(options) {
	if (options && options.length > 0) {
		return React.createElement(
			"p",
			null,
			"Here are your options: ",
			options
		);
	} else {
		return React.createElement(
			"p",
			null,
			"No options"
		);
	}
}

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	getSubtitle(app.subtitle),
	getOptions(app.options),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"a todo"
		),
		React.createElement(
			"li",
			null,
			"a todo"
		),
		React.createElement(
			"li",
			null,
			"a todo"
		),
		React.createElement(
			"li",
			null,
			"a todo"
		),
		React.createElement(
			"li",
			null,
			"a todo"
		)
	)
);

var appRoot = document.getElementById('app');
var user = {
	name: "Hadrien Matringe",
	age: 34,
	location: "Paris"
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

};var count = 0;

var addOne = function addOne() {
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	if (count > 0) {
		count--;
	}
	renderCounterApp();
};

var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {

	var template3 = React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			null,
			"count: ",
			count
		),
		React.createElement(
			"button",
			{ onClick: addOne },
			"+1"
		),
		React.createElement(
			"button",
			{ onClick: minusOne },
			"-1"
		),
		React.createElement(
			"button",
			{ onClick: reset },
			"reset"
		)
	);

	ReactDOM.render(template3, appRoot);
};

renderCounterApp();
