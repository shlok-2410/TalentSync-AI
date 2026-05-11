import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import UploadCard from '../components/UploadCard';
import { Sparkles, BrainCircuit, Target } from 'lucide-react';

const Home = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('resume', file);

    try {
      // Note: Update URL to your server's address
      const res = await axios.post('http://localhost:5000/api/analyze', formData);
      setAnalysis(res.data);
    } catch (err) {
      alert("Error analyzing resume. Make sure the server is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Get Hired with <span className="text-blue-600">AI-Powered</span> Feedback.
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Our intelligent system scans your resume, extracts key skills, and gives you an instant "Hireability" score based on industry standards.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-blue-100 rounded-md"><BrainCircuit className="text-blue-600" size={20} /></div>
              <p className="text-slate-700 font-medium">Deep Semantic Parsing</p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-green-100 rounded-md"><Target className="text-green-600" size={20} /></div>
              <p className="text-slate-700 font-medium">Keyword Gap Analysis</p>
            </div>
          </div>
        </div>

        {/* Right Side: Upload UI */}
        <UploadCard 
          file={file} 
          setFile={setFile} 
          onUpload={handleUpload} 
          loading={loading} 
        />
      </div>

      {/* Analysis Results Display */}
      
{analysis && (
  <section className="max-w-5xl mx-auto pb-20 px-6">
    <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <Sparkles className="text-yellow-500" /> AI Insights
      </h3>
      {/* Display the Score */}
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Hireability Score</span>
        <div className="text-4xl font-black text-blue-600">{analysis.matchScore}/100</div>
      </div>
      {/* Display the Full Analysis */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 whitespace-pre-wrap text-slate-700">
        {analysis.analysis} 
      </div>
    </div>
  </section>
)}
      
    </div>
  );
};

export default Home;