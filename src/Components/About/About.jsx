import React from 'react'
import about from '../../assets/about-us-img.png'

function About() {
    return (
        <>
            <h1 class="mt-5 text-3xl font-bold text-gray-900 text-center dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">About Us</span></h1>
            <section class="py-10 ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div class="relative mb-12">
                            <img class="w-full rounded-md" src={about} alt="" />

                            <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                                <div class="overflow-hidden bg-white rounded">
                                    <div class="px-10 py-6">
                                        <div class="flex items-center">
                                            <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">100%</p>
                                            <p class="pl-6 text-sm font-medium text-black sm:text-lg">Customer Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                                <svg class="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Empowering Your Digital Journey</h2>
                            <p class="mt-6 text-lg leading-relaxed text-justify text-gray-600">At Laptop Haven, we simplify your tech experience with top-quality laptops and exceptional service. Whether you need the latest innovations or trusted brands, we’re here to help you find the perfect fit. Discover performance, style, and support—your journey to excellence starts here.</p>
                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Contact Us </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About