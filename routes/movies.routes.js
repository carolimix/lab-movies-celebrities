const Movie = require("../models/Movie.model");
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");


router.get("/movies/create", (req, res) =>{ 
  Celebrity.find()
  .then((allTheCelebsFromDB) => {
    res.render("movies/new-movie", { celebrities: allTheCelebsFromDB });
  })
  .catch((error) => {
    console.log("Error while getting the celebs from the DB: ", error);
    next(error);
  });
})

router.post("/movies/create", (req, res, next) => {
  const {title, genre, plot, cast} = req.body;
  
  Movie.create({title, genre, plot, cast})
  .then(() => res.redirect("/movies"))
  .catch((error) => res.redirect("movies/new-movie"));
});


router.get("/movies", (req, res, next) => {
    return Movie.find()
      .then((allTheMoviesFromDB) => {
        res.render("movies/movies", { movies: allTheMoviesFromDB });
      })
      .catch((error) => {
        console.log("Error while getting the movies from the DB: ", error);
            next(error);
      });
  });



//get movie details usar .populate("cast").then(movie) => rendermovies/movie/details
//delete movie
//edit movie


module.exports = router;