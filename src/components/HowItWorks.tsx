import React from 'react';
import { CheckCircle, Code, Monitor, BarChart } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Step 1: Configure</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Using our intuitive dashboard, drag-and-drop to set the exact triggers:
            </p>
            <ul className=" list-inside text-gray-600 mb-4">
              <li><CheckCircle className="inline w-4 h-4 text-green-600" /> After page load</li>
              <li><CheckCircle className="inline w-4 h-4 text-green-600" /> Scroll percentage</li>
              <li><CheckCircle className="inline w-4 h-4 text-green-600" /> Specific button clicks</li>
              <li><CheckCircle className="inline w-4 h-4 text-green-600" /> Exit-intent</li>
            </ul>
            <p className="text-gray-600">
              Customize the widget's appearance to match your brand.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Monitor className="w-8 h-8 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Step 2: Deploy</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Embed our one-line JavaScript snippet on your site.
            </p>
            <p className="text-gray-600">
              Our script automatically monitors user behavior and displays the feedback form when conditions are met.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <BarChart className="w-8 h-8 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Step 3: Analyze</h3>
            </div>
            <p className="text-gray-600 mb-4">
              View real-time responses, filter by sentiment, and export data—all from a clean, powerful dashboard.
            </p>
            <p className="text-gray-600">
              Integrations with support tools ensure every urgent feedback point is immediately addressed.
            </p>
          </div>
        </div>

        {/* Visual Cue */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Visual Summary</h4>
          <img 
            src="/path/to/your/flowchart.png" 
            alt="How It Works Flowchart" 
            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 