//a model is a table in sequelize
//sequelize automatically creates id field as primary key
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var Promise = require('bluebird');
var sequelize = new Sequelize('persistentPoplar', 'root', ''); 

//Company table
var Company = sequelize.define('company', {
  name: Sequelize.STRING
});

//Users table
var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
}, {
  timestamps: true
})

User.beforeCreate(function(user, options){
  var hash = Promise.promisify(bcrypt.hash);
  return hash(user.password, 10)
  .then(function(hashedPW) {
    user.password = hashedPW;
  })
  .catch(function(err) {
  })
});

/*
User.beforeUpdate(function(userData, options){
  return hashPassword(userData, options);
});
*/

User.belongsTo(Company, {foreignKey: 'companyId'});
Company.hasMany(User, {foreignKey: 'companyId'});

//Proposal table
var Proposal = sequelize.define('proposal', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  stage: Sequelize.INTEGER //make it so it can only be 0-3
}, {
  timestamps: true
})

Proposal.belongsTo(Company, {foreign_key: 'companyId'});
Company.hasMany(Proposal, {foreign_key: 'companyId'});

// Establish adminUser-proposal link
Proposal.belongsTo(User, {foreign_key: 'admin'});
Company.hasMany(Proposal, {foreign_key: 'admin'});

//Proposal_User join table
var Proposal_User = sequelize.define('Proposal_User', {
  watch: Sequelize.BOOLEAN,
  support: Sequelize.BOOLEAN
});

Proposal.belongsToMany(User, {through: Proposal_User});
User.belongsToMany(Proposal, {through: Proposal_User});

sequelize.sync();

module.exports = {
  sequelize: sequelize,
  Company: Company,
  User: User,
  Proposal: Proposal,
  Proposal_User: Proposal_User
}