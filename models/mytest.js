'use strict';
module.exports = (sequelize, DataTypes) => {
  var MyTest = sequelize.define('MyTest', {
    testname: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return MyTest;
};
