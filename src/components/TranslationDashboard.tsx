import React, { useState } from 'react';
import { Save, RotateCcw, ChevronDown } from 'lucide-react';
import axios from 'axios';

const CMS_KEYS = [
  'Name',
  'Location',
  'Gender',
  'Address',
  'Phone number',
  'Zip',
  'State',
  'Country',
  'Email',
  'Account Number'
];

const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'];

export default function TranslationDashboard() {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [translation, setTranslation] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSave = async () => {
    try {
      await axios.post('/api/translations', {
        key: selectedKey,
        language: selectedLanguage,
        translation
      });
      alert('Translation saved successfully!');
    } catch (error) {
      console.error('Error saving translation:', error);
      alert('Failed to save translation');
    }
  };

  const handleReset = () => {
    setTranslation('');
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 py-8">
        {/* Language Selector */}
        <div className="mb-8">
          <div className="relative w-64 mx-auto">
            <label 
              htmlFor="language-select" 
              className="block text-sm font-medium text-gray-700 mb-2 text-center"
            >
              Language
            </label>
            <button
              id="language-select"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span>{selectedLanguage}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {isDropdownOpen && (
              <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex space-x-8 h-[calc(100vh-300px)]">
          {/* CMS Keys Box */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">CMS Keys</h2>
            <div className="space-y-2">
              {CMS_KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedKey(key)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    selectedKey === key
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Translation Box */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Translation</h2>
            <textarea
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Enter translation here..."
            />
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleReset}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </button>
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}