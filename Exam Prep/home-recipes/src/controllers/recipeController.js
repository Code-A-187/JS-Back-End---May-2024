const { Router } = require("express");

const { body, validationResult } = require('express-validator')
const { parseError } = (require('../util'));

const { isUser } = require('../middlewares/guards')
const { getById, create, update, deleteById, addRecommend } = require('../services/recipeService')

const recipeRouter = Router()

recipeRouter.get('/create', isUser(), (req, res) => {
    res.render('create')
});

recipeRouter.post('/create', isUser(), 
    body('title').trim().isLength({ min: 2}).withMessage('Title should be at least 2 characters'),
    body('description').trim().isLength().isLength({ min: 10, max: 100}).withMessage('Description should be between 10 and 100 characters long'),
    body('ingredients').trim().isLength({ min: 10, max: 200 }).withMessage('Ingredients should be between 10 and 200 characters long'),
    body('instructions').trim().isLength({ min: 10 }).withMessage('Instuctions should be at least 10 characters long'),
    body('image').trim().isURL().withMessage('Instuctions should be URL'),
    
    async (req, res) => {
        const userId = req.user._id;

        try{
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(req.body, userId);

            res.redirect('/catalog')

        } catch(err) {
            res.render('create', { data: req.body, errors: parseError(err).errors} )

        }
    
    });

recipeRouter.get('/edit/:id', isUser(), async (req, res) => {
        const id = req.params.id;

        const recipe = await getById(id)

        if(!recipe) {
            res.status(404).res.render('404');
            return;
        }

        if (recipe.owner.toString() != req.user._id) {
            res.redirect('/login')
        }

        res.render('edit', { data: recipe })
    });    

recipeRouter.post('/edit/:recipeId', isUser(), 
    body('title').trim().isLength({ min: 2}).withMessage('Title should be at least 2 characters'),
    body('description').trim().isLength().isLength({ min: 10, max: 100}).withMessage('Description should be between 10 and 100 characters long'),
    body('ingredients').trim().isLength({ min: 10, max: 200 }).withMessage('Ingredients should be between 10 and 200 characters long'),
    body('instructions').trim().isLength({ min: 10 }).withMessage('Instuctions should be at least 10 characters long'),
    body('image').trim().isURL().withMessage('Instuctions should be URL'),
    
    async (req, res) => {
        const recipeId = req.params.recipeId
        const userId = req.user._id;

        try{
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(recipeId, req.body, userId);

            res.redirect('/catalog/' + recipeId);

        } catch(err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors} )

        }
    
    });


recipeRouter.get('/delete/:id', isUser(), async (req, res) => {
        const id = req.params.id;

        try{
           
            await deleteById(id, req.user._id);
        } catch(err) {
            if (err.message == 'Access deied') {
                res.redirect('/login')
                return;
            }
        }
        res.redirect('/catalog');
}); 

recipeRouter.get('/recommend/:recipeId', isUser(), async (req, res) => {
    const recipeId = req.params.recipeId
    const userId = req.user._id;

    try{

        const result = await addRecommend(recipeId, userId);

        res.redirect('/catalog/' + recipeId);

    } catch(err) {
        res.render('details', { errors: parseError(err).errors} )

    }
});

module.exports = { recipeRouter}
