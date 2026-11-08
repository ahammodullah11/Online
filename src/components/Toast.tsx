import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-gray-900 text-white text-sm px-4 py-3 rounded-xl shadow-xl transition-all border border-gray-800">
  <span className="flex items-center justify-center w-6 h-6 bg-white text-pink-600 rounded-full mr-3 text-xs font-bold">
    ✓
  </span>
  <span className="font-medium">{message}</span>
  <button onClick={onClose} className="ml-4 text-pink-200 hover:text-white font-bold">
    ✕
  </button>
</div>
  );
};