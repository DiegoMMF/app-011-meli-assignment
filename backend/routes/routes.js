const getProductDescription = require('../functions/getProductDescription');
const getSearchResults = require('../functions/getSearchResults');

const router = require('express').Router();

// TODO #12
router.get("/items", getSearchResults);
router.get("/items/:id", getProductDescription);

module.exports = router;