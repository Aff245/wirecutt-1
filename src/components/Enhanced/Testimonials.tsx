import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      location: 'Jakarta',
      rating: 5,
      text: 'Platform ini benar-benar game changer! AI recommendation-nya sangat akurat dan membantu saya menemukan laptop perfect untuk bisnis. Hemat waktu dan budget.',
      avatar: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=100',
      purchase: 'MacBook Air M3'
    },
    {
      name: 'Sari Dewi',
      role: 'Content Creator',
      location: 'Bandung',
      rating: 5,
      text: 'Review expert-nya sangat detail dan trustworthy. Berkat platform ini, saya bisa upgrade gear photography dengan confidence. ROI content creation saya meningkat 300%!',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
      purchase: 'Sony A7 IV + Lens Kit'
    },
    {
      name: 'Rizki Ahmad',
      role: 'Software Developer',
      location: 'Surabaya',
      rating: 5,
      text: 'Price comparison real-time dan alert system-nya amazing. Dapat deal iPhone 15 Pro dengan hemat 15% dari harga market. Customer service juga responsive banget.',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100',
      purchase: 'iPhone 15 Pro Max'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Testimoni Pengguna Setia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lebih dari 500,000 pengguna mempercayai platform kami untuk keputusan pembelian yang cerdas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                </div>
                <Quote className="h-6 w-6 text-blue-200" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-blue-600 font-medium">
                  ✓ Verified Purchase: {testimonial.purchase}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-semibold text-gray-900">4.9/5</span>
                <span className="text-gray-500 ml-1">rating</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-gray-700">
                <span className="font-semibold">500K+</span> pengguna puas
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-gray-700">
                <span className="font-semibold">99.8%</span> kepuasan customer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

