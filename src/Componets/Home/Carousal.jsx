import React from 'react';
import carousal1 from "../../assets/carousal1.jpg";
import carousal2 from "../../assets/carousal2.jpg";
import carousal3 from "../../assets/carousal3.jpg";
import carousal4 from "../../assets/carousal4.jpg";

function Carousal() {
    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-[90vh] overflow-hidden">
                    {/* Slide 1 */}
                    <div className="block duration-700 ease-in-out" data-carousel-item>
                        <img src={carousal1} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <h1 className="text-white text-8xl font-semibold">Latest Laptops</h1>
                        </div>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={carousal2} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <h1 className="text-white text-8xl font-semibold">Gamimg Laptops</h1>
                        </div>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={carousal3} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <h1 className="text-white text-8xl font-semibold">Student Laptops</h1>
                        </div>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={carousal4} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 4" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <h1 className="text-white text-8xl font-semibold">Business Laptops</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    );
}

export default Carousal;
