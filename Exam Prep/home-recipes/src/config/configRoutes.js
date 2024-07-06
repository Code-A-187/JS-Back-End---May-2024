// TODO import routers

const { homeRouter } = require("../controllers/homeController");
const { recipeRouter } = require("../controllers/recipeController");
const { userRouter } = require("../controllers/userController")

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(recipeRouter)

    app.get('*', (req, res) => {
       res.render('404');
    });
}

module.exports = { configRoutes }
