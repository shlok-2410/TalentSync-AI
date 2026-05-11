import { Upload, File, X } from 'lucide-react';

const UploadCard = ({ file, setFile, onUpload, loading }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
      <div 
        className={`border-2 border-dashed rounded-xl py-12 px-4 flex flex-col items-center justify-center transition-all ${
          file ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-blue-300'
        }`}
      >
        {!file ? (
          <>
            <Upload className="w-12 h-12 text-slate-400 mb-4" />
            <p className="text-slate-600 font-medium text-center">Click to upload or drag and drop</p>
            <p className="text-slate-400 text-xs mt-1 italic">PDF only (Max 5MB)</p>
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              onChange={(e) => setFile(e.target.files[0])}
              accept=".pdf"
            />
          </>
        ) : (
          <div className="flex items-center gap-4 w-full px-4">
            <div className="p-3 bg-blue-600 rounded-lg text-white">
              <File size={24} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-semibold text-slate-700 truncate">{file.name}</p>
              <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <button onClick={() => setFile(null)} className="text-slate-400 hover:text-red-500">
              <X size={20} />
            </button>
          </div>
        )}
      </div>

      <button 
        onClick={onUpload}
        disabled={!file || loading}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all disabled:bg-slate-200 disabled:shadow-none flex justify-center items-center gap-2"
      >
        {loading ? "Analyzing Resume..." : "Scan & Analyze"}
      </button>
    </div>
  );
};

export default UploadCard;