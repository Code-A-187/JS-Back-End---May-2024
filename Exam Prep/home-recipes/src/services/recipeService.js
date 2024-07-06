const { Recipe } = require('../models/Recipe')


async function getAll() {
    return Recipe.find().lean();
};

async function getRecent() {
    return Recipe.find().sort( { $natural: -1}).limit(3).lean();
};

async function searchRecipes(title) {
    const query = {};

    if (title) {
        query.title = new RegExp(title, 'i'); // Case insensitive search
    }

    return Recipe.find(query).lean();
}

async function getById(id) {

    return Recipe.findById(id).lean();
};

async function create(data, ownerId) {
    
    const record = new Recipe ({
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        description: data.description,
        image: data.image,
        owner: ownerId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Recipe.findById(id);


    if (! record) {
        throw new ReferenceError('Record not found' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }
        record.title = data.title,
        record.ingredients = data.ingredients,
        record.instructions = data.instructions,
        record.description = data.description,
        record.image= data.image,

    await record.save();

    return record;
}

async function addRecommend(recipeId, userId) {

    const record = await Recipe.findById(recipeId);

    if (!record) {
        throw new ReferenceError('Record not found' + id);
    }

    if (record.owner.toString() == userId) {
        throw new Error('Cannot recommend your own publication');
    }

    if(record.recommendList.find(v => v.toString() == userId )) {
        throw new Error ('Only one recomendation is allowed per recipe');
    }

    record.recommendList.push(userId);
    await record.save();
    
    return record;
};


async function deleteById(id, userId) {
    const record = await Recipe.findById(id);


    if (!record) {
        throw new ReferenceError('Record not found' + id);
    }

    if (record.owner.toString() != userId) {
        throw new Error('Access denied');
    }

    await Recipe.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getRecent,
    searchRecipes,
    getById,
    create,
    update,
    addRecommend,
    deleteById,
}
