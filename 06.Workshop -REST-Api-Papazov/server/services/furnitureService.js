const Furniture = require('../models/Furniture');

exports.getAll = async () => {
  try {
    return await Furniture.find();
  } catch (err) {
    console.error('Error in furnitureService.getAll:', err);
    throw new Error('Failed to fetch furniture items');
  }
};

exports.getOne = async (furnitureId) => Furniture.findById(furnitureId)

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);
