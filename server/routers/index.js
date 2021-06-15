const router = require("express").Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
	res.status(200).json("hello");
});

router.post("/register", (req, res) => {
	const { email, password } = req.body;
	User;
});

module.exports = router;
