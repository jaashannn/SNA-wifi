import React from 'react';
import { Download, Upload, Check, Zap } from 'lucide-react';

const Plans: React.FC = () => {
  return (
    <div id="plans" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Perfect Plan</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Basic</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold">399</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Download className="w-5 h-5 text-blue-600 mr-3" />
                <span>100 Mbps Download</span>
              </div>
              <div className="flex items-center">
                <Upload className="w-5 h-5 text-blue-600 mr-3" />
                <span>20 Mbps Upload</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span>Unlimited Data</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Choose Basic
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 transform scale-105 border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Pro</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold">499</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Download className="w-5 h-5 text-blue-600 mr-3" />
                <span>500 Mbps Download</span>
              </div>
              <div className="flex items-center">
                <Upload className="w-5 h-5 text-blue-600 mr-3" />
                <span>100 Mbps Upload</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span>Unlimited Data</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span>24/7 Support</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Choose Pro
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Premium</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold">799</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-blue-600 mr-3" />
                <span>1 Gbps Download</span>
              </div>
              <div className="flex items-center">
                <Upload className="w-5 h-5 text-blue-600 mr-3" />
                <span>500 Mbps Upload</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span>Unlimited Data</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span>24/7 Priority Support</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span>Static IP Address</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Choose Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;