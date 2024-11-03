import React from 'react';
import { Globe2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe2 className="h-6 w-6" />
          <h1 className="text-xl font-bold">Translation Dashboard</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-indigo-200 transition-colors">Dashboard</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-200 transition-colors">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}