const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  pool.query('SELECT * FROM genres')
    .then(dbRes => {
      res.send(dbRes.rows)
    })
    .catch(err => {
      console.log('genres router', err)
      res.sendStatus(500)
    })
});

// get genre names for a certain movie by movie id
router.get('/:movieId', (req, res) => {

  // joins junction table, selects for all genres that match on movie ID
  const queryText = `
  SELECT * FROM genres
	  JOIN movies_genres ON movies_genres.genre_id = genres.id
	  WHERE movies_genres.movie_id = $1;
  `

  pool.query(queryText, [req.params.movieId])
    .then(dbRes => {
      res.send(dbRes.rows);
    }).catch(err => {
      res.sendStatus(500);
    })
})

module.exports = router;