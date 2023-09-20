const express = require('express');
const router = express.Router();

// route   Get api/posts
// @desc    Test route
// @access  public
router.get('/', (req, res) => res.send('Posts     route'));

module.exports = router;
