const Surprise = require('../models/Surprise');
const crypto = require('crypto');

// Helper: generate a unique slug with retry logic
const generateUniqueSlug = async () => {
  const maxAttempts = 5;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    // Generate a random 8-character hex string
    const slug = crypto.randomBytes(4).toString('hex');
    const existing = await Surprise.findOne({ slug });
    if (!existing) return slug;
  }
  throw new Error('Could not generate a unique slug after multiple attempts');
};

// @desc    Create a new surprise
// @route   POST /api/surprises
// @access  Public
const createSurprise = async (req, res) => {
  try {
    const { name, message, senderName, theme, isPremium, revealDate } = req.body;

    // Basic validation (mongoose will also validate)
    if (!name || !message || !senderName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate a unique slug
    const slug = await generateUniqueSlug();

    const surprise = new Surprise({
      name,
      message,
      senderName,
      theme: theme || 'default',
      isPremium: isPremium || false,
      slug,
      revealDate: revealDate || null,
    });

    const createdSurprise = await surprise.save();

    // Return only the slug (as per requirement)
    res.status(201).json({ slug: createdSurprise.slug });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get a surprise by its slug
// @route   GET /api/surprises/:slug
// @access  Public
const getSurpriseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const surprise = await Surprise.findOne({ slug });

    if (!surprise) {
      return res.status(404).json({ error: 'Surprise not found' });
    }

    res.status(200).json(surprise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createSurprise,
  getSurpriseBySlug,
};