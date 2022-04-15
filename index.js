let user = {
	name: "Mike",
	friend: ["John", "Paul", "Jimmy"],
	families: [
		{ name: "David", age: 20 },
		{ name: "Ava", age: 25 },
	],
	location: {
		region: "England",
		country: "United Kingdom",
	},
	aboutMe: {
		status: "Single",
		pet: "Dog",
	},
};

// ! Q1 answer
const { aboutMe } = user;
// ! Q2 answer
const { location: {region:region2}} = user;
// ! Q3 answer
const {friend: [john]} = user;
// * alternately:
const {friend: {0: jo}} = user;
// ! Q4 answer
const {families: [{name}, {age}]} = user
