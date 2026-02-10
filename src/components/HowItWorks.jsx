"use client"
import React, { useState, useEffect } from 'react';
import { UserPlus, Search, MessageCircleHeart, Gem } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Create Your Profile",
        description: "Register for free and set up your profile.",
        icon: UserPlus,
        color: "text-white",
        bg: "bg-blue-500"
    },
    {
        id: "02",
        title: "Search Matches",
        description: "Browse through thousands of verified profiles.",
        icon: Search,
        color: "text-white",
        bg: "bg-purple-500"
    },
    {
        id: "03",
        title: "Connect & Chat",
        description: "Send requests and chat securely.",
        icon: MessageCircleHeart,
        color: "text-white",
        bg: "bg-pink-500"
    },
    {
        id: "04",
        title: "Get Married",
        description: "Find your soulmate and begin your journey.",
        icon: Gem,
        color: "text-white",
        bg: "bg-orange-500"
    }
];

export default function HowItWorks() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                <div className={`flex flex-col md:flex-row items-end justify-between mb-16 gap-6 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="max-w-xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Simple Steps</span>
                        <h2 className="text-4xl font-serif font-bold text-secondary">
                            How <span className="text-primary">Shree Kalyanam</span> Works
                        </h2>
                    </div>
                    <p className="text-secondary/60 max-w-md text-right md:text-left">
                        We have simplified the matchmaking process to make it easy for you to find your life partner.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Color Bar Left */}
                            <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${step.bg}`}></div>

                            {/* Number Watermark */}
                            <span className="absolute top-4 right-6 text-6xl font-black text-gray-50 select-none group-hover:text-gray-100 transition-colors duration-300">
                                {step.id}
                            </span>

                            <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                <step.icon size={24} strokeWidth={2} />
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                                {step.description}
                            </p>


                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
