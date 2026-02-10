"use client";
import React, { useState, useEffect } from "react";
import { XCircle, ArrowRight, RefreshCw, AlertTriangle, Zap, Shield, CreditCard } from "lucide-react";

export default function PaymentFailure({
  userName = "Valued Member",
  planName = "Premium",
  amount = "2,999",
  transactionId = "TXN-2025-0624-001",
  errorMessage = "Payment could not be processed"
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeMessage, setActiveMessage] = useState(0);

  const failureMessages = [
    "Payment Failed 💳",
    "Let's Try Again! 🔄",
    "We're Here to Help! 💪"
  ];

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % failureMessages.length);
    }, 2500);
    return () => clearInterval(messageTimer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleRetryPayment = () => window.location.href = '/dashboard/subscription';
  const handleGoHome = () => window.location.href = '/dashboard';

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-4 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-2xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-100 + mousePosition.x * 0.3}px, ${-100 + mousePosition.y * 0.3
              }px)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${50 - mousePosition.x * 0.2}px, ${50 - mousePosition.y * 0.2
              }px)`,
          }}
        />


        {/* Minimal Floating Decorations */}
        <div className="absolute top-16 left-16 animate-bounce opacity-30" style={{ animationDelay: "0.2s" }}>
          <AlertTriangle className="w-4 h-4 text-secondary" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce opacity-30" style={{ animationDelay: "0.8s" }}>
          <RefreshCw className="w-4 h-4 text-primary" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce opacity-30" style={{ animationDelay: "1.2s" }}>
          <CreditCard className="w-4 h-4 text-secondary" />
        </div>
      </div>

      {/* Main Content - Reduced Size */}
      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Compact Failure Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-white/15 to-primary/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>

          <div className="relative bg-gradient-to-br from-white/90 via-secondary/5 to-primary/5 backdrop-blur-xl rounded-3xl border border-secondary/20 p-10 text-center hover:from-white/95 hover:via-secondary/10 hover:to-primary/10 transition-all duration-500 shadow-xl hover:shadow-secondary/20">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/10 via-white/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

            <div className="relative z-10">
              {/* Compact Failure Icon */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {/* Simplified Ripple Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                  </div>

                  {/* Fewer Floating Indicators */}
                  <div className="absolute -top-2 -right-1 animate-bounce" style={{ animationDelay: '0.3s' }}>
                    <AlertTriangle className="w-3 h-3 text-secondary opacity-80" />
                  </div>
                  <div className="absolute -bottom-1 -left-2 animate-bounce" style={{ animationDelay: '1s' }}>
                    <RefreshCw className="w-3 h-3 text-primary opacity-80" />
                  </div>

                  {/* Compact Failure Circle */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary via-secondary to-primary rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                      <XCircle
                        className="w-8 h-8 text-white animate-pulse relative z-10"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Dynamic Messages */}
              <div className="mb-4">
                <div className="relative h-8 mb-3">
                  {failureMessages.map((message, index) => (
                    <h1
                      key={index}
                      className={`absolute inset-0 text-3xl font-bold transition-all duration-500 flex items-center justify-center ${index === activeMessage
                          ? "opacity-100 transform translate-y-0 scale-100"
                          : "opacity-0 transform translate-y-2 scale-95"
                        }`}
                    >
                      <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                        {message}
                      </span>
                    </h1>
                  ))}
                </div>

                <p className={`text-base mb-4 transition-all duration-500 ${isHovered ? "text-secondary" : "text-secondary/80"
                  }`}>
                  Don't worry {userName}!
                </p>
              </div>

              {/* Compact Error Details */}
              <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-3 mb-4 border border-secondary/10">
                <p className="text-secondary text-xs mb-1"><strong>Error:</strong> {errorMessage}</p>
                <p className="text-secondary/80 text-xs">ID: {transactionId}</p>
              </div>

              {/* Compact Action Buttons */}
              <div className="space-y-2 mb-4">
                {/* Primary Retry Button */}
                <button
                  onClick={handleRetryPayment}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-secondary via-primary to-secondary hover:from-secondary hover:via-secondary hover:to-primary rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-secondary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center justify-center space-x-2 text-white font-semibold text-sm">
                    <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    <span>Try Again</span>
                  </span>
                </button>

                {/* Compact Home Button */}
                <button
                  onClick={handleGoHome}
                  className="w-full text-secondary hover:text-secondary/80 text-xs font-medium transition-colors duration-300 py-1"
                >
                  <span className="flex items-center justify-center space-x-1">
                    <span>Go to Homepage</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              </div>

              {/* Compact Support Features */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-gradient-to-b from-secondary/5 to-primary/5 rounded-lg border border-secondary/10">
                  <Shield className="w-4 h-4 text-secondary mx-auto mb-1" />
                  <span className="text-xs text-secondary">Secure</span>
                </div>
                <div className="text-center p-2 bg-gradient-to-b from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                  <RefreshCw className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-xs text-primary-dark">Retry</span>
                </div>
                <div className="text-center p-2 bg-gradient-to-b from-secondary/5 to-primary/5 rounded-lg border border-secondary/10">
                  <CreditCard className="w-4 h-4 text-secondary mx-auto mb-1" />
                  <span className="text-xs text-secondary">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Footer Brand */}
        <div className="text-center mt-5">
          <h2 className="text-xl font-bold mb-1">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Shree Kalyanam
            </span>
          </h2>
          <p className="text-secondary/80 text-xs font-medium">
            We're here to help! 💪
          </p>
        </div>
      </div>
    </div>
  );
}