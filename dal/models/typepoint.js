'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypePoint = sequelize.define('TypePoint', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  TypePoint.associate = function(models) {
    // TypePoint.hasMany(models.Point, {
    //    foreignKey: 'typePointId',
    //    as: 'typepoints'
    // })
  };
  return TypePoint;
};