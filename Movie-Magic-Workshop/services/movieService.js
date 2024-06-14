const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

  // return [...movies];
  // return Array.form(movies);


  // TODO: filter result in mongoDB
exports.search = async (title, genre, year) => {
  let result = await Movie.find().lean();

  if (title){
    result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }

  if (genre) {
    result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }

  if (year) {
    result = result.filter(movie => movie.year === year);
  }
  
  return result;
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');
 

exports.create =(movieData) => Movie.create(movieData);

exports.attach = (movieId, castId) => {
  // const movie = await this.getOne(movieId)

  // TODO: validate if castId exists
  // TODO: validate if cast is already added:
  // movie.casts.push(castId);

  // return movie.save();

  return Movie.findByIdAndUpdate(movieId, { $push: {casts: castId } });
}