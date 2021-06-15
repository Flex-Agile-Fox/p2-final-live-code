"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint("Favorites", {
			fields: ["userId"],
			type: "foreign key",
			name: "Favorites_userId_Users",
			references: {
				//Required field
				table: "Users",
				field: "id",
			},
			onDelete: "cascade",
			onUpdate: "cascade",
		});
		await queryInterface.addConstraint("Favorites", {
			fields: ["animalId"],
			type: "foreign key",
			name: "Favorites_animalId_Animals",
			references: {
				//Required field
				table: "Animals",
				field: "id",
			},
			onDelete: "cascade",
			onUpdate: "cascade",
		});
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint(
			"Favorites",
			"Favorites_userId_Users"
		);
		await queryInterface.removeConstraint(
			"Favorites",
			"Favorites_animalId_Animals"
		);
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
