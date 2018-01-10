const { jest: jestConfig } = require('kcd-scripts/config')

module.exports = Object.assign(jestConfig, {
  collectCoverageFrom: ['components/**/*.+js', 'pages/**/*.+js'],
  moduleFileExtensions: ['js'],
})
