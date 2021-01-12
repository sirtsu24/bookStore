const path = require('path') //path on node js moodul

module.exports = path.dirname(require.main.filename); //file  mis vastutab rakenduse töö eest. peaks olema server.js fail. directiory of the file respinsible for running the application
