"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Favorite extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Favorite.belongsTo(models.User, {
				foreignKey: {
					name: "userId",
					allowNull: false,
				},
			});
			Favorite.belongsTo(models.Animal, {
				foreignKey: {
					name: "animalId",
					allowNull: false,
				},
			});
		}
	}
	Favorite.init(
		{
			userId: DataTypes.INTEGER,
			animalId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Favorite",
		}
	);
	return Favorite;
};
