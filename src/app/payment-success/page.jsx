"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Download, Heart, Sparkles, Star, Users, Shield, Zap } from "lucide-react";

export default function PaymentSuccess({
  userName = "Valued Member",
  planName = "Premium",
  amount = "2,999",
  transactionId = "TXN-2025-0624-001"
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [showRedirect, setShowRedirect] = useState(false);
  const [activeMessage, setActiveMessage] = useState(0);

  const successMessages = [
    "Payment Successful! 🎉",
    "Welcome to Shree Kalyanam! 💎",
    "Your Journey Begins! ✨"
  ];

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % successMessages.length);
    }, 2500);

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setShowRedirect(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(messageTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleDashboardRedirect = () => {
    window.location.href = '/dashboard/subscription';
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-secondary/5 flex items-center justify-center p-4 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-150 + mousePosition.x * 0.5}px, ${-150 + mousePosition.y * 0.5
              }px)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${100 - mousePosition.x * 0.3}px, ${100 - mousePosition.y * 0.3
              }px)`,
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-white/50 to-primary/10 rounded-full blur-2xl transition-transform duration-1500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />

        {/* Floating Decorations */}
        <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: "0.2s" }}>
          <Heart className="w-6 h-6 text-secondary/50" />
        </div>
        <div className="absolute top-32 right-32 animate-bounce" style={{ animationDelay: "0.8s" }}>
          <Star className="w-5 h-5 text-primary/50" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: "1.2s" }}>
          <Sparkles className="w-7 h-7 text-primary/50" />
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: "0.6s" }}>
          <Shield className="w-4 h-4 text-secondary/50" />
        </div>
        <div className="absolute top-40 right-1/4 animate-bounce" style={{ animationDelay: "1.8s" }}>
          <Zap className="w-5 h-5 text-primary/50" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Success Card */}
        <div className="relative group">
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-white/20 to-secondary/30 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700"></div>

          <div className="relative bg-gradient-to-br from-white/90 via-primary/5 to-secondary/5 backdrop-blur-xl rounded-3xl border border-primary/20 p-6 sm:p-8 text-center hover:from-white/95 hover:via-primary/10 hover:to-secondary/10 transition-all duration-700 shadow-2xl hover:shadow-primary/20">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-white/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            <div className="relative z-10">
              {/* Success Icon with Enhanced Ripple Animation */}
              <div className="mb-6 flex justify-center mt-4">
                <div className="relative">
                  {/* Enhanced Ripple Animation Layers */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-secondary/15 rounded-full animate-ping" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}></div>
                  </div>

                  {/* Enhanced Celebration Confetti */}
                  <div className="absolute -top-8 -left-8 animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="absolute -top-6 right-4 animate-bounce" style={{ animationDelay: '0.8s' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse shadow-lg"></div>
                  </div>

                  {/* Modern Success Circle with Gradient */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary-light to-primary rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-primary/50">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                      <CheckCircle
                        className="w-12 h-12 text-white animate-pulse relative z-10"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Dynamic Success Messages */}
              <div className="mb-6">
                <div className="relative h-12 mb-4">
                  {successMessages.map((message, index) => (
                    <h1
                      key={index}
                      className={`absolute inset-0 text-2xl sm:text-3xl font-bold transition-all duration-700 flex items-center justify-center ${index === activeMessage
                          ? "opacity-100 transform translate-y-0 scale-100"
                          : "opacity-0 transform translate-y-4 scale-95"
                        }`}
                    >
                      <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-lg">
                        {message}
                      </span>
                    </h1>
                  ))}
                </div>

                <p className={`text-lg mb-6 transition-all duration-700 ${isHovered ? "text-secondary drop-shadow-lg" : "text-secondary/80"
                  }`}>
                  Welcome to {planName}, {userName}!
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="mb-6">
                {/* Primary Dashboard Button */}
                <button
                  onClick={handleDashboardRedirect}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary hover:from-secondary hover:via-primary hover:to-secondary rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center space-x-2 text-white font-semibold">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                  <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                  <span className="text-xs text-primary-dark">Secure</span>
                </div>
                <div className="text-center p-3 bg-gradient-to-b from-secondary/10 to-primary/10 rounded-xl border border-secondary/20">
                  <Zap className="w-5 h-5 text-secondary mx-auto mb-1" />
                  <span className="text-xs text-secondary-dark">Fast</span>
                </div>
                <div className="text-center p-3 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                  <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                  <span className="text-xs text-primary-dark">Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Brand */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-lg">
              Shree Kalyanam
            </span>
          </h2>
          <p className="text-secondary text-sm font-medium">
            Thank you for choosing us! 💚
          </p>
        </div>
      </div>

      {/* Enhanced Corner Decorations */}
      <div className="absolute top-6 right-6 text-primary/40 animate-pulse">
        <Heart className="w-8 h-8 drop-shadow-lg" />
      </div>
      <div
        className="absolute bottom-6 left-6 text-secondary/40 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <Sparkles className="w-6 h-6 drop-shadow-lg" />
      </div>
      <div
        className="absolute top-1/4 left-6 text-primary/40 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        <Star className="w-5 h-5 drop-shadow-lg" />
      </div>
      <div
        className="absolute bottom-1/4 right-6 text-secondary/40 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      >
        <Shield className="w-6 h-6 drop-shadow-lg" />
      </div>
    </div>
  );
}