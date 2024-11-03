import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 px-6 mt-auto">
      <div className="container mx-auto text-center text-gray-600">
        <p>© {new Date().getFullYear()} Translation Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
}