import { FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <FileText className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800">
          TalentSync<span className="text-blue-600">AI</span>
        </h1>
      </div>
      <div className="flex gap-4">
        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          v1.0 Beta
        </span>
      </div>
    </nav>
  );
};

export default Navbar;