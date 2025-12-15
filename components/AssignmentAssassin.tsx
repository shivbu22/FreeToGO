import React, { useState } from 'react';
import { generateGrindSchedule } from '../services/geminiService';
import { TripTask } from '../types';
import { Bot, CheckCircle, Lock, Unlock, Loader2, FileText } from 'lucide-react';

const AssignmentAssassin: React.FC = () => {
  const [syllabusText, setSyllabusText] = useState('');
  const [tasks, setTasks] = useState<TripTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleAssassinate = async () => {
    if (!syllabusText.trim()) return;
    setLoading(true);
    const generatedTasks = await generateGrindSchedule(syllabusText);
    setTasks(generatedTasks);
    setLoading(false);
    setShowSchedule(true);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="py-16 px-4 md:px-12 bg-charcoal relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neonLime/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Input Section */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Bot className="text-neonLime w-12 h-12" />
            Assignment <span className="text-neonLime">Assassin</span>
          </h2>
          <p className="text-gray-400 mb-8 font-mono">
            "We help you finish, so you can start." Paste your syllabus below. Our AI will generate a Grind Schedule linked to travel rewards.
          </p>

          <div className="clay-card p-6">
            <textarea
              className="w-full h-48 bg-black/50 border border-gray-700 rounded-lg p-4 text-white focus:border-neonLime focus:ring-1 focus:ring-neonLime outline-none transition-all font-mono text-sm resize-none"
              placeholder="Paste syllabus text here (e.g., 'Econ 101 Midterm due Friday, History Essay due Monday...')"
              value={syllabusText}
              onChange={(e) => setSyllabusText(e.target.value)}
            />
            <button
              onClick={handleAssassinate}
              disabled={loading || !syllabusText}
              className="mt-4 w-full bg-neonLime hover:bg-green-400 text-black font-bold py-4 rounded-lg uppercase tracking-widest transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : <FileText />}
              {loading ? 'Analyzing Pain...' : 'Generate Grind Schedule'}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex-1 flex flex-col justify-center">
          {!showSchedule ? (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-800 rounded-2xl min-h-[300px]">
              <p className="text-gray-600 font-mono text-center">
                Waiting for syllabus data...<br/>
                <span className="text-xs text-gray-700">Don't let the Dean catch you.</span>
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-2">Your Ticket to Freedom</h3>
              {tasks.map((task) => (
                <div 
                    key={task.id} 
                    onClick={() => toggleTask(task.id)}
                    className={`p-4 rounded-xl border-l-4 transition-all cursor-pointer flex items-center gap-4 ${
                        task.completed 
                        ? 'bg-neonLime/10 border-neonLime' 
                        : 'bg-gray-900 border-gray-700 hover:bg-gray-800'
                    }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      task.completed ? 'border-neonLime bg-neonLime' : 'border-gray-500'
                  }`}>
                      {task.completed && <CheckCircle className="w-4 h-4 text-black" />}
                  </div>
                  
                  <div className="flex-1">
                      <p className={`font-bold ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>{task.task}</p>
                      <p className="text-xs text-red-400 font-mono">Due: {task.deadline}</p>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                      {task.completed ? <Unlock className="w-4 h-4 text-neonLime" /> : <Lock className="w-4 h-4 text-gray-500" />}
                      <span className={`text-xs font-bold ${task.completed ? 'text-neonLime' : 'text-gray-500'}`}>{task.reward}</span>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-neonCyan/10 border border-neonCyan/30 rounded-lg text-center">
                  <p className="text-neonCyan font-bold uppercase text-sm tracking-widest">
                      {tasks.filter(t => t.completed).length}/{tasks.length} TASKS COMPLETE
                  </p>
                  <div className="w-full h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-neonCyan transition-all duration-500" 
                        style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }} 
                      />
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentAssassin;