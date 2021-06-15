const { User } = require("../models");
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
	const { access_token } = req.headers;
	try {
		const verify = jwt.verify(access_token, process.env.JWT_SECRET);
		if (!verify) {
			res.status(404).json("Invalid email / password");
		}
		User.findByPk(verify.id)
			.then((user) => {
				if (!user) {
					res.status(404).json("Invalid email / password");
				}
				next();
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json("Internal server error");
			});
	} catch (error) {
		console.log(error);
		res.status(500).json("Internal server error");
	}
};

module.exports = { authentication };
