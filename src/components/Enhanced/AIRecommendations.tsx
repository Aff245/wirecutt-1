import React, { useState } from 'react';
import { Bot, Sparkles, Filter, ArrowRight } from 'lucide-react';

const AIRecommendations = () => {
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const budgetRanges = [
    { value: 'under-1m', label: 'Under Rp 1M' },
    { value: '1m-5m', label: 'Rp 1M - 5M' },
    { value: '5m-10m', label: 'Rp 5M - 10M' },
    { value: 'above-10m', label: 'Above Rp 10M' }
  ];

  const categories = [
    { value: 'smartphones', label: 'Smartphones' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'headphones', label: 'Headphones' },
    { value: 'cameras', label: 'Cameras' },
    { value: 'smart-home', label: 'Smart Home' },
    { value: 'gaming', label: 'Gaming' }
  ];

  const aiRecommendations = [
    {
      title: "Perfect for Content Creators",
      description: "Based on your preference for video editing and photography",
      products: ["MacBook Pro M3", "Sony A7 IV", "Adobe Creative Suite"],
      confidence: 96
    },
    {
      title: "Best Value Gaming Setup",
      description: "Optimized for 1440p gaming within your budget",
      products: ["RTX 4070 Graphics Card", "AMD Ryzen 7", "32GB DDR5 RAM"],
      confidence: 92
    },
    {
      title: "Productivity Powerhouse",
      description: "AI-selected for maximum productivity and efficiency",
      products: ["Dell XPS 13", "Magic Keyboard", "USB-C Hub"],
      confidence: 89
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Bot className="h-4 w-4 mr-2" />
            AI-Powered Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Personalized Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes millions of reviews, specifications, and user preferences to find your perfect match
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Sparkles className="h-6 w-6 text-blue-600 mr-3" />
            Get Your AI Recommendations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Budget Range</label>
              <div className="grid grid-cols-2 gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedBudget(range.value)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedBudget === range.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>Generate AI Recommendations</span>
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiRecommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-600">{rec.confidence}% Match</span>
                </div>
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">{rec.title}</h4>
              <p className="text-gray-600 mb-4">{rec.description}</p>
              
              <div className="space-y-2 mb-6">
                {rec.products.map((product, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <ArrowRight className="h-3 w-3 text-blue-600 mr-2" />
                    {product}
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 py-3 rounded-lg font-semibold hover:from-blue-100 hover:to-purple-100 transition-all duration-200">
                View Recommendations
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;

