const { Router } = require("express");
const {getRecent, getById, getAll, searchRecipes} = require('../services/recipeService');



// TODO replace with real router according to exam
const homeRouter  = Router();

homeRouter.get('/', async (req, res) => {
    const recipes = await getRecent();

    res.render('home', { recipes });
});

homeRouter.get('/catalog', async (req, res) => {
    const recipes = await getAll();

    res.render('catalog', { recipes });
});

homeRouter.get('/catalog/:id', async (req, res) => {
    
    const recipe = await getById(req.params.id);


    if(!recipe) {
        res.status(404).res.render('404');
        return;
    }

    recipe.recommends = recipe.recommendList.length;
    recipe.hasUser = res.locals.hasUser;
    recipe.isOwner = req.user?._id == recipe.owner.toString();
    recipe.hasRecommended = Boolean(recipe.recommendList.find(l => req.user?._id == l.toString()));
    
    res.render('details', { recipe });
});

homeRouter.get('/search', async (req, res) => {
    const { name } = req.query

    const recipes = await searchRecipes(name);

    res.render('search', { name, recipes });
});

module.exports = { homeRouter,  };
