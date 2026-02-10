"use client"
import React from 'react';
import Image from 'next/image';
import { Heart, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function PlatformIntro() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/people/people3.png"
                                alt="Happy Couple"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-pink-50 rounded-full text-pink-500">
                                        <Heart size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="font-serif text-xl font-bold text-secondary">A lifetime of happiness</p>
                                        <p className="text-secondary/60 text-sm mt-1">Join our community of happy families.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/10 rounded-[3rem] -z-10 bg-primary/5 offset-4"></div>
                        <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-2xl opacity-60"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Welcome to Shree Kalyanam</h4>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-secondary leading-tight mb-6">
                            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Love</span> Begins <br />
                            and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Families</span> Unite
                        </h2>

                        <p className="text-lg text-secondary/70 leading-relaxed mb-8 font-light">
                            We understand that marriage is not just about two individuals, but the union of two families.
                            Our platform combines advanced technology with traditional values to help you find a partner
                            who matches not just your preferences, but your soul.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Verified Profiles with Strict Privacy Control",
                                "AI-Powered Matchmaking for Better Compatibility",
                                "Dedicated Relationship Managers"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                                    <CheckCircle2 size={20} className="text-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="group px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                            Discover More
                            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
