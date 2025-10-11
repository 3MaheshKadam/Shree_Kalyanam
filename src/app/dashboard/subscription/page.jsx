// "use client";
// import { useState, useEffect } from "react";
// import {
//   Crown,
//   Check,
//   Star,
//   Heart,
//   MessageCircle,
//   Eye,
//   Shield,
//   Zap,
//   Gift,
//   Trophy,
//   Sparkles,
//   Users,
//   Clock,
//   X,
//   Loader2,
//   AlertCircle,
// } from "lucide-react";
// import { useSession } from "@/context/SessionContext";
// import { useRouter } from "next/navigation";
// import Razorpay from "razorpay";
// export default function DynamicSubscriptionPlans() {
//   const { user } = useSession();
//   const router = useRouter();

//   const [plans, setPlans] = useState([]);
//   const [freePlan, setFreePlan] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [currentSubscription, setCurrentSubscription] = useState(null);
//   const [isSubscribing, setIsSubscribing] = useState(false);
//   const [activeButtonId, setActiveButtonId] = useState(null);
//   const fetchUserDatanew = async () => {
//     console.log("hello");
//     try {
//       const res = await fetch(`/api/users/${user?.id}`);
//       const darta = await res.json();
//       console.log("Response from API:", darta.subscription);
//       setCurrentSubscription({
//         subscriptionId: darta.subscription.subscriptionId,
//         plan: darta.subscription.plan,
//       });
//     } catch (err) {
//       console.log("Error fetching user data:", err);
//     }
//   };
//   useEffect(() => {
//     fetchUserDatanew();
//   }, []);
//   // Fetch plans and current subscription
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("/api/subscription");
//         if (!response.ok) {
//           throw new Error("Failed to fetch subscription plans");
//         }
//         const data = await response.json();

//         // Find the free plan
//         const freePlan = data.find(
//           (plan) =>
//             plan.price === 0 ||
//             plan.price === "0" ||
//             plan.name?.toLowerCase().includes("free")
//         );

//         const paidPlans = data.filter((plan) => plan !== freePlan);

//         setFreePlan(freePlan || null);
//         setPlans(paidPlans);

//         // Set current subscription if user has one
//         if (user?.user?.subscription) {
//           setCurrentSubscription(user.user.subscription);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//         setIsLoaded(true);
//       }
//     };

//     fetchPlans();
//   }, [user]);
//   const handleSubscription = async (plan, e) => {
//     e.stopPropagation();
//     e.preventDefault();

//     try {
//       setActiveButtonId(plan._id);
//       setIsSubscribing(true);
//       console.log(user.id, "user id");
//       // 1. Create Razorpay Order
//       const res = await fetch("/api/payment/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           amount: plan.price * 100,
//           userId: user?.id,
//           planId: plan._id,
//           currentSubscriptionId: currentSubscription?.subscriptionId || null,
//         }),
//       });

//       const order = await res.json();

//       // 2. Configure Razorpay checkout
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: order.currency,
//         name: "shreekalyanam Subscription",
//         description: plan.name,
//         order_id: order.id,
//         handler: async function (response) {
//           console.log("✅ Payment response:", response);

//           // ✅ 3. Update subscription on success
//           const updateRes = await fetch("/api/users/update-plan", {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               userId: user.id,
//               plan: plan.name,
//               razorpay_payment_id: response.razorpay_payment_id,
//               planId: plan._id,
//               currentSubscriptionId:
//                 currentSubscription?.subscriptionId || null,
//             }),
//           });

//           const updateResult = await updateRes.json();
//           if (updateRes.ok) {
//             setCurrentSubscription({
//               subscriptionId: plan._id,
//               plan: plan.name,
//             });
//             router.push("/payment-success");
//           } else {
//             throw new Error(
//               updateResult.message || "Failed to update subscription"
//             );
//           }
//         },
//         prefill: {
//           name: user?.name || "Aniket Dahire",
//           email: user?.email || "aniket@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       // Initialize Razorpay
//       const razorpay = new window.Razorpay(options);

//       // Handle Payment Failure (IMPORTANT: Close the modal)
//       razorpay.on("payment.failed", function (response) {
//         console.error("❌ Payment failed:", response.error);
//         razorpay.close(); // <-- THIS CLOSES THE POPUP IMMEDIATELY
//         window.location.href = "/payment-failure";
//       });

//       // Open Razorpay modal
//       razorpay.open();
//     } catch (err) {
//       console.error("❌ Error in handleSubscription:", err);
//       alert(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setActiveButtonId(null);
//       setIsSubscribing(false);
//     }
//   };

//   // Get plan configuration based on name
//   const getPlanConfig = (planName) => {
//     const configs = {
//       Gold: {
//         icon: Crown,
//         color: "from-yellow-400 to-yellow-600",
//         bgColor: "bg-yellow-100",
//         textColor: "text-yellow-600",
//         badgeColor: "bg-yellow-500",
//         emoji: "👑",
//       },
//       Premium: {
//         icon: Crown,
//         color: "from-rose-500 to-pink-500",
//         bgColor: "bg-rose-100",
//         textColor: "text-rose-600",
//         badgeColor: "bg-rose-500",
//         emoji: "💎",
//       },
//       Free: {
//         icon: Gift,
//         color: "from-gray-400 to-gray-600",
//         bgColor: "bg-gray-100",
//         textColor: "text-gray-600",
//         badgeColor: "bg-gray-500",
//         emoji: "🆓",
//       },
//     };

//     if (!planName) return configs["Premium"];
//     if (planName.toLowerCase().includes("gold")) return configs["Gold"];
//     if (planName.toLowerCase().includes("premium")) return configs["Premium"];
//     if (planName.toLowerCase().includes("free")) return configs["Free"];
//     return configs["Premium"];
//   };

//   // Format price display
//   const formatPrice = (price) => {
//     if (price === 0 || price === "0") return "0";
//     return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
//   };

//   // Get duration text
//   const getDurationText = (duration) => {
//     if (duration === 30) return "month";
//     if (duration === 60) return "2 months";
//     if (duration === 90) return "3 months";
//     if (duration === 180) return "6 months";
//     if (duration === 365) return "12 months";
//     return `${duration} days`;
//   };

//   if (loading) {
//     return (
//      <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="text-center">
//         {/* Simple Spinner */}
//         <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mx-auto mb-4"></div>
        
//         {/* Loading Text */}
//         <p className="text-gray-600 text-lg">Loading Subscription Plans</p>
//       </div>
//     </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-amber-50/30 p-6 flex items-center justify-center">
//         <div className="text-center">
//           <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">
//             Error Loading Plans
//           </h2>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-amber-50/30 p-6">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full mb-6">
//             <Crown className="w-10 h-10 text-rose-500" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Choose Your Perfect Plan
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Unlock premium features and find your perfect match faster with our
//             subscription plans
//           </p>
//         </div>

//         {/* Plans Grid */}
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
//           {/* Free Plan */}
//           {freePlan && (
//             <div key={freePlan._id} className="relative">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden">
//                 <div className="relative z-10">
//                   <div className="text-center mb-8">
//                     <div className="flex justify-center mb-4">
//                       <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
//                         <Gift className="w-8 h-8 text-gray-500" />
//                       </div>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       🆓 {freePlan.name}
//                     </h3>
//                     <div className="flex items-center justify-center space-x-2">
//                       <span className="text-4xl font-bold text-gray-600">
//                         ₹{formatPrice(freePlan.price)}
//                       </span>
//                       <span className="text-gray-600">/forever</span>
//                     </div>
//                   </div>

//                   <div className="space-y-4 mb-8">
//                     {freePlan.features?.map((feature, idx) => (
//                       <div key={idx} className="flex items-center space-x-3">
//                         <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
//                           <Check className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <span className="text-gray-600">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     disabled
//                     className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white py-4 rounded-xl font-bold text-lg cursor-not-allowed"
//                   >
//                     {currentSubscription?.subscriptionId === freePlan._id
//                       ? "🎉 Currently Active"
//                       : "Free Plan"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Paid Plans */}
//           {plans.map((plan) => {
//             const config = getPlanConfig(plan.name);
//             const IconComponent = config.icon;
//             const isCurrentPlan =
//               currentSubscription?.subscriptionId === plan._id;
//             const isButtonLoading =
//               isSubscribing && activeButtonId === plan._id;

//             return (
//               <div key={plan._id} className="relative">
//                 <div
//                   className={`bg-white rounded-2xl p-8 shadow-2xl border border-rose-100/50 relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
//                     !plan.isActive ? "opacity-70" : ""
//                   }`}
//                 >
//                   <div className="relative z-10 pt-6">
//                     <div className="text-center mb-8">
//                       <div className="flex justify-center mb-4">
//                         <div
//                           className={`w-16 h-16 ${config.bgColor} rounded-full flex items-center justify-center`}
//                         >
//                           <IconComponent
//                             className={`w-8 h-8 ${config.textColor}`}
//                           />
//                         </div>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                         {config.emoji} {plan.name}
//                       </h3>
//                       <div className="flex items-center justify-center space-x-2">
//                         <span
//                           className={`text-4xl font-bold ${config.textColor}`}
//                         >
//                           ₹{formatPrice(plan.price)}
//                         </span>
//                         <span className="text-gray-600">
//                           /{getDurationText(plan.durationInDays)}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="space-y-4 mb-8">
//                       {plan.features?.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-3">
//                           <div
//                             className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${config.bgColor}`}
//                           >
//                             <Check className={`w-4 h-4 ${config.textColor}`} />
//                           </div>
//                           <span className="text-gray-900 font-medium">
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mb-4">
//                       <span
//                         className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                           plan.isActive
//                             ? "bg-green-100 text-green-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         <div
//                           className={`w-2 h-2 rounded-full mr-2 ${
//                             plan.isActive ? "bg-green-500" : "bg-red-500"
//                           }`}
//                         ></div>
//                         {plan.isActive ? "Active" : "Inactive"}
//                       </span>
//                     </div>

//                     <button
//                       onClick={(e) => handleSubscription(plan, e)}
//                       disabled={
//                         !plan.isActive || isButtonLoading || isCurrentPlan
//                       }
//                       className={`w-full bg-gradient-to-r ${
//                         config.color
//                       } text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-200 shadow-lg ${
//                         !plan.isActive || isButtonLoading || isCurrentPlan
//                           ? "opacity-50 cursor-not-allowed"
//                           : ""
//                       }`}
//                     >
//                       {isButtonLoading ? (
//                         <Loader2 className="w-5 h-5 animate-spin mx-auto" />
//                       ) : isCurrentPlan ? (
//                         "🎉 Currently Active"
//                       ) : (
//                         "Subscribe Now"
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* FAQ Section */}
//         <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100/50">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-gray-900 mb-2">
//                 Can I change my subscription plan?
//               </h3>
//               <p className="text-gray-600">
//                 Yes! When you subscribe to a new plan, your current subscription
//                 will be automatically replaced.
//               </p>
//             </div>
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-gray-900 mb-2">
//                 Is my payment information secure?
//               </h3>
//               <p className="text-gray-600">
//                 Absolutely! We use industry-standard encryption and work with
//                 trusted payment providers.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-2">
//                 What happens when I change plans?
//               </h3>
//               <p className="text-gray-600">
//                 Your new plan will take effect immediately, replacing your
//                 current subscription.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import {
  Crown,
  Check,
  Gift,
  AlertCircle,
  Loader2,
  Sparkles,
  Heart,
} from "lucide-react";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";

export default function DynamicSubscriptionPlans() {
  const { user } = useSession();
  const router = useRouter();

  const [plans, setPlans] = useState([]);
  const [freePlan, setFreePlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState(null);

  // Fetch user subscription data
  const fetchUserSubscription = async () => {
    try {
      const res = await fetch(`/api/users/${user?.id}`);
      const data = await res.json();
      setCurrentSubscription({
        subscriptionId: data.subscription.subscriptionId,
        plan: data.subscription.plan,
      });
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchUserSubscription();
    }
  }, [user?.id]);

  // Fetch subscription plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/subscription");
        if (!response.ok) {
          throw new Error("Failed to fetch subscription plans");
        }
        const data = await response.json();

        // Separate free plan from paid plans
        const freePlan = data.find(
          (plan) =>
            plan.price === 0 ||
            plan.price === "0" ||
            plan.name?.toLowerCase().includes("free")
        );
        const paidPlans = data.filter((plan) => plan !== freePlan);

        setFreePlan(freePlan || null);
        setPlans(paidPlans);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // Handle subscription with Razorpay
  const handleSubscription = async (plan, e) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      setActiveButtonId(plan._id);
      setIsSubscribing(true);

      // Create Razorpay Order
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: plan.price * 100,
          userId: user?.id,
          planId: plan._id,
          currentSubscriptionId: currentSubscription?.subscriptionId || null,
        }),
      });

      const order = await res.json();

      // Configure Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "shreekalyanam Subscription",
        description: plan.name,
        order_id: order.id,
        handler: async function (response) {
          // Update subscription on success
          const updateRes = await fetch("/api/users/update-plan", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.id,
              plan: plan.name,
              razorpay_payment_id: response.razorpay_payment_id,
              planId: plan._id,
              currentSubscriptionId: currentSubscription?.subscriptionId || null,
            }),
          });

          const updateResult = await updateRes.json();
          if (updateRes.ok) {
            setCurrentSubscription({
              subscriptionId: plan._id,
              plan: plan.name,
            });
            router.push("/payment-success");
          } else {
            throw new Error(
              updateResult.message || "Failed to update subscription"
            );
          }
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: user?.phone || "9999999999",
        },
        theme: {
          color: "#ec4899", // Using pink-500 as primary color
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        razorpay.close();
        window.location.href = "/payment-failure";
      });

      razorpay.open();
    } catch (err) {
      console.error("Error in handleSubscription:", err);
      alert(err.message || "Something went wrong. Please try again.");
    } finally {
      setActiveButtonId(null);
      setIsSubscribing(false);
    }
  };

  // Plan configuration with romantic color palette
  const getPlanConfig = (planName) => {
    const configs = {
      Gold: {
        icon: Crown,
        gradient: "from-amber-400 to-yellow-500",
        bgColor: "bg-amber-50",
        textColor: "text-amber-600",
        borderColor: "border-amber-200",
        badgeColor: "bg-amber-500",
        emoji: "👑",
        glow: "shadow-amber-200/50",
      },
      Premium: {
        icon: Sparkles,
        gradient: "from-rose-500 to-pink-600",
        bgColor: "bg-rose-50",
        textColor: "text-rose-600",
        borderColor: "border-rose-200",
        badgeColor: "bg-rose-500",
        emoji: "💎",
        glow: "shadow-rose-200/50",
      },
      Free: {
        icon: Gift,
        gradient: "from-slate-400 to-slate-600",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
        borderColor: "border-slate-200",
        badgeColor: "bg-slate-500",
        emoji: "🆓",
        glow: "shadow-slate-200/50",
      },
    };

    if (!planName) return configs.Premium;
    const name = planName.toLowerCase();
    if (name.includes("gold")) return configs.Gold;
    if (name.includes("premium")) return configs.Premium;
    if (name.includes("free")) return configs.Free;
    return configs.Premium;
  };

  // Format price display
  const formatPrice = (price) => {
    if (price === 0 || price === "0") return "0";
    return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
  };

  // Get duration text
  const getDurationText = (duration) => {
    const durations = {
      30: "month",
      60: "2 months",
      90: "3 months",
      180: "6 months",
      365: "year",
    };
    return durations[duration] || `${duration} days`;
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-50/60 via-white to-purple-50/40">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-200 border-t-rose-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg font-medium">Loading Plans...</p>
          <p className="text-slate-500 text-sm mt-2">Finding your perfect match</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-purple-50/30 p-6 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100">
          <AlertCircle className="w-16 h-16 text-rose-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Something Went Wrong
          </h2>
          <p className="text-slate-600 mb-6 max-w-md">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/60 via-white to-purple-50/40 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-6 shadow-lg border border-rose-200/50">
            <Heart className="w-10 h-10 text-rose-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Find Your Perfect Match
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Unlock premium features and connect with your soulmate faster through our carefully crafted plans
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8">
          {/* Free Plan */}
          {freePlan && (
            <div key={freePlan._id} className="flex flex-col h-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200/60 hover:border-rose-200/80 transition-all duration-300 flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                      <Gift className="w-8 h-8 text-slate-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {freePlan.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-slate-700">
                      ₹{formatPrice(freePlan.price)}
                    </span>
                    <span className="text-slate-600 text-lg">/forever</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {freePlan.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200">
                        <Check className="w-4 h-4 text-slate-500" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  disabled
                  className="w-full bg-gradient-to-r from-slate-400 to-slate-600 text-white py-4 rounded-xl font-bold text-lg cursor-not-allowed opacity-80 mt-auto"
                >
                  {currentSubscription?.subscriptionId === freePlan._id
                    ? "✨ Currently Active"
                    : "Free Forever"}
                </button>
              </div>
            </div>
          )}

          {/* Paid Plans */}
          {plans.map((plan) => {
            const config = getPlanConfig(plan.name);
            const IconComponent = config.icon;
            const isCurrentPlan = currentSubscription?.subscriptionId === plan._id;
            const isButtonLoading = isSubscribing && activeButtonId === plan._id;

            return (
              <div key={plan._id} className="flex flex-col h-full">
                <div
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border ${config.borderColor}/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex-1 flex flex-col ${
                    !plan.isActive ? "opacity-60 grayscale" : ""
                  } ${config.glow}`}
                >
                  {/* Popular Badge for Premium */}
                  {plan.name.toLowerCase().includes("premium") && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6 pt-4">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-16 h-16 ${config.bgColor} rounded-full flex items-center justify-center border ${config.borderColor}`}
                      >
                        <IconComponent className={`w-8 h-8 ${config.textColor}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {config.emoji} {plan.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className={`text-4xl font-bold ${config.textColor}`}>
                        ₹{formatPrice(plan.price)}
                      </span>
                      <span className="text-slate-600 text-lg">
                        /{getDurationText(plan.durationInDays)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 flex-1">
                    {plan.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${config.bgColor} border ${config.borderColor}`}
                        >
                          <Check className={`w-4 h-4 ${config.textColor}`} />
                        </div>
                        <span className="text-slate-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        plan.isActive
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-rose-100 text-rose-800 border border-rose-200"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          plan.isActive ? "bg-emerald-500" : "bg-rose-500"
                        }`}
                      ></div>
                      {plan.isActive ? "Available" : "Coming Soon"}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleSubscription(plan, e)}
                    disabled={!plan.isActive || isButtonLoading || isCurrentPlan}
                    className={`w-full bg-gradient-to-r ${config.gradient} text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl mt-auto ${
                      !plan.isActive || isButtonLoading || isCurrentPlan
                        ? "opacity-50 cursor-not-allowed hover:scale-100"
                        : "hover:scale-105"
                    }`}
                  >
                    {isButtonLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                    ) : isCurrentPlan ? (
                      "🎉 Currently Active"
                    ) : (
                      "Start Your Journey"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-rose-100/50 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-b border-rose-100 pb-4">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Heart className="w-4 h-4 text-rose-500 mr-2" />
                  Can I change my plan later?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yes! Upgrade anytime to unlock more features. Your new plan starts immediately.
                </p>
              </div>
              <div className="border-b border-rose-100 pb-4">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Heart className="w-4 h-4 text-rose-500 mr-2" />
                  Is my payment secure?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Absolutely! We use Razorpay with bank-level encryption to keep your data safe.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-rose-100 pb-4">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Heart className="w-4 h-4 text-rose-500 mr-2" />
                  What happens when I upgrade?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Immediate access to premium features. We'll prorate your subscription fairly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Heart className="w-4 h-4 text-rose-500 mr-2" />
                  Can I cancel anytime?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yes, cancel anytime. Your subscription will remain active until the end of your billing period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}