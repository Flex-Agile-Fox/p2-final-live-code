"use strict";
let animals = require("../animals.json");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		animals = animals.map((a) => {
			return {
				...a,
				updatedAt: new Date(),
				createdAt: new Date(),
			};
		});

		queryInterface.bulkInsert("Animals", animals);
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
		queryInterface.bulkDelete("Animals", null, {});
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
