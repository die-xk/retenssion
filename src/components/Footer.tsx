import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/logo.svg" alt="Retenssion Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-gray-900">retenssion</span>
              </a>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Helping SaaS companies reduce churn and grow revenue through AI-powered retention strategies.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              {['Features', 'Pricing', 'Demo', 'Case Studies'].map((item) => (
                <li key={item}>
                  <a href={item === 'Features' ? '/retention-metrics' : item === 'Pricing' ? '/pricing' : item === 'Demo' ? '/demo' : '/api'} className="text-base text-gray-600 hover:text-indigo-600">
                    {item}
                  </a>
                </li>

              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {['Blog', 'Careers', 'Terms', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-base text-gray-600 hover:text-indigo-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {['Community', 'Contact', 'Help Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-base text-gray-600 hover:text-indigo-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} retenssion. All rights reserved. 
            <br />
            Made with ❤️ in Kosovo 🇽🇰
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;