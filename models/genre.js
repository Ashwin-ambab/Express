module.exports = (sequelize,DataTypes) => {
  const Genre = sequelize.define("Genre",{
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Genre.associate = models => {
    Genre.belongsTo(models.Book,{
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Genre;
}
















// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Genre extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Genre.init({
//     Name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Genre',
//   });
//   return Genre;
// };