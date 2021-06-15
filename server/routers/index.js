const router = require("express").Router();
const { User, Animal } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authentication = require("../middlewares/auth");

router.get("/", (req, res) => {
	res.status(200).json("hello");
});

router.post("/register", (req, res) => {
	const { email, password } = req.body;
	User.create({ email, password }).then((user) => {
		res.status(201).json({ id: user.id, email: user.email });
	});
});

router.post("/login", (req, res) => {
	const { email, password } = req.body;
	User.findOne({ where: { email } })
		.then((user) => {
			if (!user) req.status(404).json("Invalid email or password");
			const compare = bcrypt.compare(password, user.password);
			if (!compare) req.status(404).json("Invalid email or password");
			const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET);
			res.status(200).json({ id: user.id, email: user.email, token });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json("Internal server error");
		});
});

router.get("/animals", authentication, (req, res) => {
	Animal.findAll()
		.then((animals) => {
			res.status(200).json({ animals });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json("Internal server error");
		});
});

module.exports = router;
