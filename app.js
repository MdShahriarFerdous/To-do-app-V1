const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// two array variables
const lists = ["Buy food", "Cook food", "Eat food"];
const workItem = [];

// set templating view engine
app.set("view engine", "ejs");

// routing start
app.get("/", (req, res) => {
	const day = date.getDate();
	res.render("list", { titleBar: day, incomingData: lists });
});

app.post("/", (req, res) => {
	const nlist = req.body.item;

	if (req.body.list === "Work List") {
		workItem.push(nlist);
		res.redirect("/work");
	} else {
		lists.push(nlist);
		res.redirect("/");
	}

	//button will give resonse to home route
});

app.get("/work", function (req, res) {
	res.render("list", { titleBar: "Work List", incomingData: workItem });
});

// No need because the form input is coming to the home route
// app.post("/work", function (req, res) {
// 	const nlist = req.body.item;
// 	workItem.push(nlist);
// 	res.redirect("/work");
// });

app.get("/about", function (req, res) {
	res.render("about");
});

app.listen(3000, () => {
	console.log("Server is working");
});
