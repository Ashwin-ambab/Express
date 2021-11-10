module.exports = (sequelize,DataTypes) => {
  const Author = sequelize.define("Author",{
      Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Author.associate = models => {
    Author.belongsTo(models.Book,{
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Author;
}













// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Book.init({
//     BookName: DataTypes.STRING,
//     published: DataTypes.NUMBER
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   return Book;
// };






















// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Author extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Author.init({
//     Name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Author',
//   });
//   return Author;
// };