const colors = require("colors")

module.exports = (RoverTest, data) => {
     RoverTest.logger(colors.red(`:: ${data}`))
}