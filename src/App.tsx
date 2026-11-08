import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { TechCard } from './components/TechCard';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { technologiesData } from './data/technologies';
import type { Technology } from './types';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToStack = (tech: Technology) => {
    if (!selectedStack.some(t => t.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
      showToast(`${tech.name} added to your stack successfully!`);
    } else {
      showToast(`${tech.name} is already in your stack!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar onShowToast={showToast} />
      
      <main className="flex-grow">
        <Banner onShowToast={showToast} />

        {/* Technologies Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Explore the <span className="text-pink-500">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tech Cards Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technologiesData.map((tech) => (
                <TechCard key={tech.id} tech={tech} onAdd={handleAddToStack} />
              ))}
            </div>

            {/* Selected Stack Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
                <h3 className="font-bold text-gray-900 mb-1">Your Stack</h3>
                <p className="text-xs text-gray-400 mb-4">No technologies selected yet.</p>

                {selectedStack.length === 0 ? (
                  <div className="border-2 border-dashed border-gray-100 rounded-xl p-8 text-center text-xs text-gray-400">
                    Your stack is empty.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedStack.map((tech) => (
                      <div key={tech.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg text-xs">
                        <span className="font-semibold text-gray-700">{tech.icon} {tech.name}</span>
                        <span className="text-gray-400 text-[10px]">{tech.category}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;