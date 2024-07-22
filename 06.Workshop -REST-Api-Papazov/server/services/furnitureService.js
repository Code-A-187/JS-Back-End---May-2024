const Furniture = require('../models/Furniture');

exports.getAll = async () => {
  try {
    return await Furniture.find();
  } catch (err) {
    console.error('Error in furnitureService.getAll:', err);
    throw new Error('Failed to fetch furniture items');
  }
};

exports.create = (furnitureData) => Furniture.create(furnitureData);

