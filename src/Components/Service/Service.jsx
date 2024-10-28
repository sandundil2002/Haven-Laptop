import React from 'react';
import service1 from '../../assets/warranty.png';
import service2 from '../../assets/tailored-solutions.png';
import service3 from '../../assets/home-delivery.png';
import Brands from '../Service/Brands'

function Service() {
  return (
    <>
      <h1 className="mt-10 text-4xl font-bold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Our Services</span>
      </h1>
      <section className="py-12 sm:py-16 dark:bg-gray-900">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {[{
              image: service1, title: 'Warranty Claim', description: 'Haven Laptops Warranty Section provides a customer-friendly service to ensure a fair experience. We save your time and assets with fast, reliable service thanks to our local suppliers.'
            },
            {
              image: service2, title: 'Tailored Solutions', description: 'If your requirements go beyond what the market offers, we’ll help meet them. We cross borders to source and deliver specialized solutions to you.'
            },
            {
              image: service3, title: 'Home Delivery', description: 'Haven Laptops delivers to every corner of Sri Lanka. Our quick, streamlined process brings top-quality tech right to your doorstep.'
            }].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform hover:scale-105 transition-transform duration-300">
                <img className="w-full h-56 object-cover rounded-t-lg" src={service.image} alt={service.title} />
                <h3 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Brands />
    </>
  );
}

export default Service;
