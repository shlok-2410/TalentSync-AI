const { GoogleGenerativeAI } = require('@google/generative-ai');

const getAIAnalysis = async (resumeText) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        You are a Senior Technical Recruiter. Analyze this resume text:
        "${resumeText}"
        
        Return exactly this format:
        Score: [0-100]
        Feedback: [Short 2 sentence overview]
        Skills: [Comma separated list of top 3 detected skills]
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    // Add this in your controller to debug
    console.log("AI Response:", responseText);

    return responseText;

};

module.exports = { getAIAnalysis };