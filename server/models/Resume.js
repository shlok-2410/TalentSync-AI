const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    matchScore: { type: Number, required: true },
    analysis: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);