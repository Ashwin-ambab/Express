module.exports = (sequelize,DataTypes) => {
  const Book = sequelize.define("Book",{
    BookName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Book.associate = models => {
    Book.hasMany(models.Author,{
      onDelete: "CASCADE"
    });

    Book.hasMany(models.Genre,{
      onDelete: "cascade"
    });
  }

  return Book;
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