import React from 'react';
import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, onAdd }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="text-3xl">{tech.icon}</div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-500">
            {tech.badge}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
        <p className="text-gray-500 text-xs mt-2 line-clamp-3 leading-relaxed">
          {tech.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
          <span className="border border-gray-100 rounded px-2 py-0.5">{tech.category}</span>
          <span>{tech.level}</span>
          <span className="flex items-center text-amber-500 font-semibold">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          className="w-full bg-gray-900 hover:bg-black text-white text-xs font-semibold py-2.5 rounded-lg transition"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};