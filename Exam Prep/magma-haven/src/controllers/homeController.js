const { Router } = require("express");
const { login } = require("../services/userService");
const { createToken } = require("../services/jwtService");


// TODO replace with real router according to exam
const homeRouter  = Router();

homeRouter.get('/', async (req, res) => {
    console.log(req.user);

    // This code creates a token and saves it in cookie
    // const result = await login ('John', '123456');
    // const token = createToken(result)

    // res.cookie('token', token);

    res.render('home');
});

module.exports = { homeRouter };