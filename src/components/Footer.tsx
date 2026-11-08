import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="bg-pink-500 text-white font-bold rounded-lg px-2 py-1 text-xs">DS</div>
              <span className="font-bold text-lg text-gray-900">Dev<span className="text-pink-500">Stack</span></span>
            </div>
            <p className="text-xs text-gray-400">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex space-x-4 text-xs text-gray-400 pt-2">
              <a href="#" className="hover:text-gray-600">GitHub</a>
              <a href="#" className="hover:text-gray-600">Twitter</a>
              <a href="#" className="hover:text-gray-600">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};