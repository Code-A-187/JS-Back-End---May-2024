const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

  // return [...movies];
  // return Array.form(movies);


  // TODO: filter result in mongoDB
exports.search = (title, genre, year) => {
  let query = {};

  if (title){
    // result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    query.title = new RegExp(title, 'i');
  }

  if (genre) {
    // result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    query.genre = genre.toLowerCase()
  }

  if (year) {
    // result = result.filter(movie => movie.year === year);
    query.year = year
  }
  
  return Movie.find(query)
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