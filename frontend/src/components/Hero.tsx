import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="pt-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Lightning Fast Internet
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Stream, game, and work without interruption. Join thousands of satisfied customers!
            </p>
            <a 
              href="#plans" 
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              View Plans
            </a>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="Happy family using internet"
              className="rounded-lg shadow-xl w-full max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;