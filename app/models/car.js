// Example model


module.exports = (sequelize, DataTypes) => {

  const Car = sequelize.define('Car', {
    mark: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Car;
};

