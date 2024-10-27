import React from 'react'

function Contact() {
    return (
        <>
            <h1 className="mt-10 text-3xl font-bold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Contact Us</span>
            </h1>
            <section className="py-12">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid gap-6 text-center md:grid-cols-3">
                            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
                                <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="mt-4 text-lg font-semibold text-gray-900">+1-316-555-0116</p>
                                <p className="mt-1 text-gray-600">+1-446-526-0117</p>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
                                <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="mt-4 text-lg font-semibold text-gray-900">havenlap@gmail.com</p>
                                <p className="mt-1 text-gray-600">hvlaptop@gmail.com</p>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
                                <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="mt-4 text-lg font-semibold text-gray-900">125 Colombo Road, Kaluwella, Galle 80000</p>
                            </div>
                        </div>

                        <div className="mt-8 p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-center text-gray-900">Send us a message</h3>
                            <form action="#" method="POST" className="mt-8 space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <input type="text" placeholder="Your Name" className="block w-full px-4 py-3 border rounded-md focus:ring-blue-600 focus:border-blue-600" />
                                    <input type="email" placeholder="Email Address" className="block w-full px-4 py-3 border rounded-md focus:ring-blue-600 focus:border-blue-600" />
                                    <input type="tel" placeholder="Phone Number" className="block w-full px-4 py-3 border rounded-md focus:ring-blue-600 focus:border-blue-600" />
                                    <input type="text" placeholder="Your Address" className="block w-full px-4 py-3 border rounded-md focus:ring-blue-600 focus:border-blue-600" />
                                </div>
                                <textarea placeholder="Message" className="w-full h-40 px-4 py-3 border rounded-md focus:ring-blue-600 focus:border-blue-600"></textarea>
                                <button type="submit" className="w-full px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
