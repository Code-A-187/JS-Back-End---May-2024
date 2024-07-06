// TODO import routers

const { homeRouter } = require("../controllers/homeController")
const { userRouter } = require('../controllers/userController')
const { stoneRouter } = require('../controllers/stoneController')

function configRoutes(app) {
    app.use(homeRouter)
    app.use(userRouter)
    app.use(stoneRouter)
    // TODO register routers
}

module.exports = { configRoutes }
