import React from 'react';
import { Zap, Check, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SNA?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Experience blazing fast speeds with our fiber-optic network.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Check className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
            <p className="text-gray-600">99.9% uptime guarantee with 24/7 network monitoring.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Our dedicated team is here to help you 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;