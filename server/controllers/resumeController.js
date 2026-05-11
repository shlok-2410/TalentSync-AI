const Resume = require('../models/Resume');
const pdfParse = require('pdf-parse');
const { getAIAnalysis } = require('../utils/aiHelper');

exports.analyzeResume = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: "Please upload a PDF" });

        // 1. Extract Text
        const pdfData = await pdfParse(req.file.buffer);
        console.log("PDF Text length:", pdfData.text.length);
        
        // 2. Get AI Analysis
        const aiResponse = await getAIAnalysis(pdfData.text);

        // 3. Simple regex to grab the score (Assumes AI followed format)
        const scoreMatch = aiResponse ? aiResponse.match(/Score:\s*(\d+)/) : null;
        const score = (scoreMatch && scoreMatch[1]) ? parseInt(scoreMatch[1]) : 0;

        // 4. Save to MongoDB
        const newEntry = await Resume.create({
            fileName: req.file.originalname,
            matchScore: score,
            analysis: aiResponse
        });

        res.status(200).json(newEntry);
    } catch (error) {
    console.error("Actual Server Error:", error); // This reveals the truth in your terminal!
    res.status(500).json({ error: error.message });
}
    
};