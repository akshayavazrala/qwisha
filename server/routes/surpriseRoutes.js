const express = require('express');
const router = express.Router();
const {
  createSurprise,
  getSurpriseBySlug,
} = require('../controllers/surpriseController');

// POST /api/surprises
router.post('/', createSurprise);

// GET /api/surprises/:slug
router.get('/:slug', getSurpriseBySlug);

module.exports = router;