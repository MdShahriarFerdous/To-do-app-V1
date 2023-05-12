exports.getDate = function () {
	const today = new Date(); //it will give the latest date
	const options = { weekday: "short", day: "numeric", month: "long" };
	return today.toLocaleDateString("en-US", options);
};

// arrow function
// const getDate =  () => {
// 	const today = new Date(); //it will give the latest date
// 	const options = { weekday: "short", day: "numeric", month: "long" };
// 	return today.toLocaleDateString("en-US", options);
// }

// this is for only weekday
exports.weekDay = function () {
	const today = new Date(); //it will give the latest date
	const options = { weekday: "long" };
	return today.toLocaleDateString("en-US", options);
};
