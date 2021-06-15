"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Favorite, {
				foreignKey: {
					name: "userId",
					allowNull: false,
				},
			});
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: {
						args: true,
						msg: "Email not valid",
					},
					notEmpty: {
						args: true,
						msg: "Email cannot be empty",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "Password cannot be empty",
					},
					len: {
						args: [6, 32],
						msg: "Password min 6 chars and max 32 chars",
					},
				},
			},
		},
		{
			hooks: {
				beforeCreate(user) {
					const salt = bcrypt.genSaltSync(10);
					const hash = bcrypt.hashSync(String(user.password), salt);
					user.password = hash;
					return user;
				},
			},
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
