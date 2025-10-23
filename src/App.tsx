import { Construction, Mail, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fadeIn">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>
          <Construction className="w-24 h-24 text-blue-400 mx-auto relative z-10 animate-bounce" strokeWidth={1.5} />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Under Development
          </h1>
          <p className="text-xl text-slate-300 max-w-md mx-auto">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-slate-200 font-medium">Coming Soon</span>
          </div>

        </div>

        <div className="pt-12 space-y-3">
          <div className="w-64 h-2 bg-slate-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-progress"></div>
          </div>
          <p className="text-sm text-slate-400">Building the future...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
