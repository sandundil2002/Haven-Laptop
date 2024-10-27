import React from 'react'
import product1 from '../../assets/product-1.jpg'
import product2 from '../../assets/product-2.jpg'
import product3 from '../../assets/product-3.jpg'
import product4 from '../../assets/product-4.jpg'
import product5 from '../../assets/product-5.jpg'
import product6 from '../../assets/product-6.jpg'
import product7 from '../../assets/product-7.jpg'
import product8 from '../../assets/product-8.jpg'
import product9 from '../../assets/product-9.jpg'

function Products() {
    return (
        <>
            <h1 class="mt-10 text-3xl font-bold text-gray-900 text-center dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Products</span></h1>
            <section class="bg-white">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product1} alt="product-1" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Student </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Microsoft Surface </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This laptop is a sleek and powerful laptop. It features a vibrant display, long battery life, and strong performance. Powered by the latest Intel Core processors, it handles demanding tasks with ease. Perfect for work, study, or creative pursuits, it's a versatile and stylish choice.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase">$1250 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product2} alt="product-2" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Latest </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> MacBook Pro </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a high-performance laptop known for its sleek design, powerful processors, and stunning display. It offers long battery life, a comfortable keyboard, and a large trackpad. Perfect for professionals, creatives, and students alike, the MacBook Pro delivers a seamless user experience.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $2500 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product3} alt="product-3" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Business </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Asus Zenbook Duo  </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a unique laptop with a secondary touchscreen display, perfect for multitasking and creative work. It offers powerful performance, a sleek design, and a comfortable keyboard. However, its innovative design comes at a premium price. </p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $2000 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product4} alt="product-4" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Student </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Dell XPS </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a premium ultrabook known for its stunning display, powerful performance, and sleek design. It offers long battery life, a comfortable keyboard, and a precise touchpad. Perfect for professionals, students, and creative individuals, the XPS 13 delivers a top-notch computing experience.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $1500 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product5} alt="product-5" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Latest </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Lenovo Yoga </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a sleek and powerful laptop known for its long battery life and lightweight design.
                                It offers a vibrant display, comfortable keyboard, and decent performance for everyday tasks and light content creation.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $1200 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product6} alt="product-6" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Student </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Acer Aspire </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a budget-friendly laptop designed for everyday tasks. It offers a decent display, comfortable keyboard, and long battery life. However, its performance might be limited, especially for demanding tasks.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $500 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product7} alt="product-7" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Student </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Asus ProArt </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">The Asus ProArt PX13 is a powerful and versatile 2-in-1 laptop designed for creative professionals.
                                It features a stunning OLED touchscreen display, powerful AMD Ryzen AI processor, and dedicated NVIDIA GeForce RTX graphics.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $2000 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product8} alt="product-8" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Business </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Apple MacBook Air M3 </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a sleek and powerful laptop known for its stunning display, long battery life, and silent operation. Powered by the M3 chip, it delivers impressive performance for everyday tasks and creative work.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $1000 USD </span>
                        </div>

                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="rounded-md object-cover w-full h-full" src={product9} alt="product-9" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Student </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> Lenovo Duet </a>
                            </p>
                            <p class="mt-4 text-gray-600 text-justify">This is a versatile 2-in-1 Chromebook that offers a detachable keyboard for flexibility.
                                It features a vibrant 11-inch 2K touchscreen, long battery life, and decent performance for everyday tasks.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> $300 USD </span>
                        </div>
                    </div>
                </div>
            </section><br /><br />
        </>
    )
}

export default Products