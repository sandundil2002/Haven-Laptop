import React from 'react';
import dell from '../../assets/dell.png';
import msi from '../../assets/msi.png';
import asus from '../../assets/asus.png';
import acer from '../../assets/acer.png';
import lenovo from '../../assets/lenovo.png';
import samsung from '../../assets/samsung.png';

function Brands() {
    return (
        <>
            <section className="py-10 dark:bg-gray-900">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-6 items-center">
                        {[dell, asus, msi, acer, lenovo, samsung].map((brand, index) => (
                            <div
                                key={index}
                                className="transform transition duration-300 ease-in-out scale-105 shadow-lg p-4 rounded-lg bg-white dark:bg-gray-800"
                            >
                                <img className="w-auto h-14 mx-auto object-contain" src={brand} alt="Brand Logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Brands;
