const add = function (a, b) {
	console.log(arguments);
	return a + b;
}
// const add = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// }

console.log(add(2,3));


const user = {
	name : "Hadrien Matringe",
	cities : ["Paris", "Nicosia", "Copenhagen"],
	printPlacesILived(){
		// console.log(this.name);
		// console.log(this.cities);
		// const that = this;
		// this.cities.forEach((city) => {
		// 	console.log(this.name + " lived in " + city);
		// });

		this.cities.map ((city) => console.log(this.name + " has lived in " + city + "!"));
	}
}

user.printPlacesILived();

const multiplier = {
	numbers : [3,4,5],
	multiplyBy : 10,
	multiply(){
		return this.numbers.map ((number) => number * this.multiplyBy);
	}
}
console.log(multiplier.multiply());