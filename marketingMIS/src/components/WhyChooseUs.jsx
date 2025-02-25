import React from 'react';

const FeaturesSection = () => {        
    return (
        <section className="py-12 bg-white w-[100vw] sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#264653] sm:text-4xl xl:text-5xl">
                        Why Choose Mysore International School?
                    </h2>
                    <p className="mt-4 text-xl text-[#8A2E88] sm:mt-8">
                        The Future of Education Starts Here!
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-8 xl:mt-24">
                    <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center">
                            <svg className="w-8 h-8 text-[#8A2E88]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="9" y1="18" x2="15" y2="18"></line>
                                <line x1="10" y1="22" x2="14" y2="22"></line>
                                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-[#264653]">Future-Ready Curriculum</h3>
                        <p className="mt-4 text-base text-gray-600">
                            Blending academics, innovation, and real-world problem-solving for comprehensive development.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center">
                            <svg className="w-8 h-8 text-[#8A2E88]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-[#264653]">Leadership Development</h3>
                        <p className="mt-4 text-base text-gray-600">
                            Public speaking, critical thinking, and entrepreneurship training for tomorrow's leaders.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center">
                            <svg className="w-8 h-8 text-[#8A2E88]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-[#264653]">World-Class Sports Facilities</h3>
                        <ul className="mt-4 text-base text-gray-600 space-y-2 text-left pl-4">
                            <li>FIFA-Standard Football Field</li>
                            <li>NBA-Standard Basketball Court</li>
                            <li>ITF-Approved Tennis Courts</li>
                            <li>Professional Cricket Nets</li>
                            <li>4-Lane Professional Running Track</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center">
                            <svg className="w-8 h-8 text-[#8A2E88]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 12h-4"></path>
                                <path d="M18 8v8"></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-[#264653]">Personalized Attention</h3>
                        <p className="mt-4 text-base text-gray-600">
                            Low student-to-teacher ratio ensuring focused learning and individual growth.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center">
                            <svg className="w-8 h-8 text-[#8A2E88]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-[#264653]">Global Exposure</h3>
                        <p className="mt-4 text-base text-gray-600">
                            Preparing students for IITs, Ivy League, and beyond.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex justify-center">
                            <svg className="w-8 h-8 text-[#8A2E88]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-[#264653]">Proven Results</h3>
                        <p className="mt-4 text-base text-gray-600">
                            Consistently producing top-performing students with a track record of excellence.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg font-semibold text-[#E76F51]">
                        Limited Seats Available – Apply Now!
                    </p>
                    <button 
                        className="mt-6 px-6 py-3 bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white rounded-md flex items-center gap-2 mx-auto"
                        onClick={() => window.location.href = '#lead-capture'}
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Request More Info
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;