"use client"
import React from 'react';
import { Apple, Play } from 'lucide-react';

export default function AppDownloadCTA() {
    return (
        <section className="bg-white py-16 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">

                    {/* Background Blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center md:text-left max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                            Ready to find your <span className="text-primary italic">Soulmate?</span>
                        </h2>
                        <p className="text-secondary/70 text-lg">
                            Download the Shree Kalyanam app today and take the first step towards your happily ever after.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap justify-center gap-4">
                        <button className="flex items-center gap-3 px-6 py-3 bg-secondary text-white rounded-xl hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                            <Apple size={24} className="group-hover:text-white" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-wider opacity-80">Download on the</p>
                                <p className="text-sm font-bold">App Store</p>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 px-6 py-3 bg-white text-secondary border border-secondary/10 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group">
                            <Play size={24} className="fill-secondary group-hover:fill-secondary" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-wider opacity-60">Get it on</p>
                                <p className="text-sm font-bold">Google Play</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
