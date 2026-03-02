const mongoose = require('mongoose');

const surpriseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Recipient name is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Birthday message is required'],
    },
    senderName: {
      type: String,
      required: [true, 'Sender name is required'],
      trim: true,
    },
    theme: {
      type: String,
      default: 'default',
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    revealDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

module.exports = mongoose.model('Surprise', surpriseSchema);