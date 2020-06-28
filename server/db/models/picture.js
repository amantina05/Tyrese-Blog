const Sequelize = require('sequelize')
const db = require('../db')

const Picture = db.define('picture', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  pictureUrl: {
    type: Sequelize.STRING,
    defaultValues: ''
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Picture
