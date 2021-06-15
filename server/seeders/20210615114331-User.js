"use strict";
const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync("123456", salt);
		const users = [
			{
				email: "admin@admin.com",
				password: hash,
				updatedAt: new Date(),
				createdAt: new Date(),
			},
		];
		await queryInterface.bulkInsert("Users", users);
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
