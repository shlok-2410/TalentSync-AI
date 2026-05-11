import { Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';

const AnalysisResults = ({ data }) => {
  if (!data) return null;

  return (
    <section className="max-w-5xl mx-auto pb-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Score Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-black text-blue-600 mb-1">85%</div>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Match Score</p>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="text-yellow-500" size={22} /> AI Analysis Feedback
          </h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/30">
             {data.textSnippet}
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
             <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
               <CheckCircle size={14}/> Strong Technical Skills
             </span>
             <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
               <AlertTriangle size={14}/> Add More Quantifiable Stats
             </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalysisResults;