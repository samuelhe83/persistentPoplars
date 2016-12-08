//a model is a table in sequelize
//sequelize automatically creates id field as primary key
var Sequelize = require('sequelize');
var sequelize = new Sequelize('persistentPoplar'); 

//Company table
var Company = sequelize.define('company', {})

//Users table
var Users = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

Users.hasOne(Company, {foreign_key: 'company_id'});


var Proposal = sequelize.define('proposal', {
  description: Sequelize.STRING,
  stage: Sequelize.INTEGER //make it so it can only be 0-3
}, {
  timestamps: true
})

Proposal.hasOne(Company, {foreign_key: 'company_id'});
Proposal.hasOne(Users, {foreign_key: 'admin'}); 

