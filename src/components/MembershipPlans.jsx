"use client"
import React, { useState, useEffect } from 'react';
import { Check, Crown, Star, Sparkles, X } from 'lucide-react';

const plans = [
    {
        name: "Free",
        price: "₹0",
        duration: "Unlimited",
        features: [
            "Create Profile",
            "Browse Profiles",
            "Send Interest (Limited)",
            "Shortlist Profiles",
            "View Contact Numbers",
            "Priority Support"
        ],
        available: [true, true, true, true, false, false],
        cta: "Get Started",
        popular: false,
        theme: "gray"
    },
    {
        name: "Gold",
        price: "₹2,500",
        duration: "3 Months",
        features: [
            "All Free Features",
            "Send Unlimited Messages",
            "View Contact Numbers",
            "Profile Highlighter",
            "Priority Support",
            "Relationship Manager"
        ],
        available: [true, true, true, true, true, false],
        cta: "Choose Gold",
        popular: true,
        theme: "yellow"
    },
    {
        name: "Platinum",
        price: "₹5,000",
        duration: "6 Months",
        features: [
            "All Gold Features",
            "Dedicated Relationship Manager",
            "Background Verification",
            "Highlighted Profile",
            "Advanced Privacy Settings",
            "Profile Boost"
        ],
        available: [true, true, true, true, true, true],
        cta: "Choose Platinum",
        popular: false,
        theme: "purple"
    }
];

export default function MembershipPlans() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/10">
                        <Crown size={14} className="fill-current" />
                        Premium Plans
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 font-serif">
                        Unlock Your <span className="text-primary italic">Love Story</span>
                    </h2>
                    <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
                        Choose a membership plan designed to help you find your perfect match with ease and confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2
                            ${plan.popular
                                    ? 'bg-[#fff9f0] border-2 border-yellow-400 shadow-2xl scale-105 z-10'
                                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                                }
                            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 uppercase tracking-wide">
                                    <Sparkles size={14} className="animate-pulse" /> Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8 pt-4">
                                <h3 className={`text-xl font-bold mb-2 uppercase tracking-widest ${plan.popular ? 'text-yellow-600' : 'text-gray-400'}`}>{plan.name}</h3>
                                <div className={`text-5xl font-serif font-bold mb-2 ${plan.popular ? 'text-secondary' : 'text-secondary'}`}>
                                    {plan.price}
                                    <span className="text-lg text-gray-400 font-sans font-medium">/{plan.duration}</span>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gray-100 mb-8"></div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-center text-sm ${plan.available && plan.available[i] === false ? 'opacity-40 line-through decoration-gray-400' : 'opacity-100'}`}>
                                        <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-500'}`}>
                                            {plan.available && plan.available[i] === false ? <X size={14} /> : <Check size={14} strokeWidth={3} />}
                                        </div>
                                        <span className="text-secondary/80 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2
                                ${plan.popular
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-[1.02]'
                                    : 'bg-white text-secondary hover:bg-gray-50 border-2 border-gray-100'
                                }`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
