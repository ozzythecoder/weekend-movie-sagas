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

module.exports = router;