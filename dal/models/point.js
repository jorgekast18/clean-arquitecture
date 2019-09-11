'use strict';
module.exports = (sequelize, DataTypes) => {
  const Point = sequelize.define('Point', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    // typePointId: DataTypes.STRING
  }, {});
  Point.associate = function(models) {
    Point.belongsTo(models.TypePoint);
  };
  return Point;
};