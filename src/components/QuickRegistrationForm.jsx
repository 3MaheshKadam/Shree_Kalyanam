"use client"
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, X, Shield, RotateCcw } from 'lucide-react';
import { useSession } from '@/context/SessionContext';
import { useRouter } from 'next/navigation';

export default function QuickRegistrationForm() {
  const router = useRouter();
  const { login } = useSession();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    lookingFor: '',
    dob: '',
    email: '',
    mobile: ''
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Timer for OTP resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name is too short';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
        break;
      case 'mobile':
        if (!value.trim()) error = 'Mobile is required';
        else if (!/^\d{10,15}$/.test(value)) error = 'Invalid mobile number';
        break;
      case 'dob':
        if (!value) error = 'Date of birth is required';
        else {
          const dobDate = new Date(value);
          const minDate = new Date();
          minDate.setFullYear(minDate.getFullYear() - 100);
          const maxDate = new Date();
          maxDate.setFullYear(maxDate.getFullYear() - 18);

          if (dobDate < minDate) error = 'Invalid date (too old)';
          else if (dobDate > maxDate) error = 'You must be at least 18 years old';
        }
        break;
      case 'gender':
      case 'lookingFor':
        if (!value) error = 'This field is required';
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSendOTP = async () => {
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formData.mobile })
      });

      const data = await response.json();

      if (data.success) {
        setStep(3);
        setResendTimer(30);
      } else {
        setErrors({ submit: data.message || 'Failed to send OTP' });
      }
    } catch (err) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setErrors({ otp: 'Please enter complete 6-digit OTP' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // 1. Verify OTP
      const verifyRes = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: formData.mobile,
          otp: otpString
        })
      });

      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        throw new Error(verifyData.error || 'OTP verification failed');
      }

      // 2. Update Profile with collected data
      const updateRes = await fetch('/api/users/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: verifyData.userId,
          name: formData.name,
          gender: formData.gender,
          dob: formData.dob,
          email: formData.email,
          // Add other fields mapping if necessary
        })
      });

      if (!updateRes.ok) {
        console.error('Profile update failed');
        // Retrieve userId even if update fails? 
        // We'll proceed to login anyway, but user data might be incomplete.
      }

      // 3. Login
      await login(verifyData.userId);
      router.push('/dashboard/profile/me'); // Redirect to profile setup

    } catch (err) {
      console.error(err);
      setErrors({ otp: err.message || 'Verification failed' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOTPChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`reg-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`reg-otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const nextStep = () => {
    let isValid = true;
    const currentStepFields = step === 1 ? ['name', 'gender', 'lookingFor'] : ['dob', 'email', 'mobile'];

    currentStepFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        setErrors(prev => ({ ...prev, [field]: error }));
        isValid = false;
      }
    });

    if (isValid) {
      if (step === 2) {
        handleSendOTP();
      } else {
        setStep(prev => prev + 1);
      }
    }
  };

  return (
    <div className="w-full lg:w-auto lg:pl-8">
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-rose-50 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Find Your Match Today
        </h2>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8 px-4">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                ${step >= stepNumber ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-600'} 
                ${step === stepNumber ? 'ring-4 ring-rose-100' : ''}`}>
                {step > stepNumber ? <Check size={14} /> : stepNumber}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${step >= stepNumber ? 'text-rose-600' : 'text-gray-400'}`}>
                {stepNumber === 1 ? 'Basics' : stepNumber === 2 ? 'Contact' : 'Verify'}
              </span>
            </div>
          ))}
          {/* Progress Bar Background */}
          <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-200 -z-0 mx-10 hidden sm:block"></div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-rose-200 focus:border-rose-500`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Male', 'Female'].map((gender) => (
                    <label key={gender} className={`flex items-center justify-center py-2 px-3 border rounded-lg cursor-pointer transition-colors ${formData.gender === gender ? 'bg-rose-50 border-rose-200 text-rose-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-sm font-medium">{gender}</span>
                    </label>
                  ))}
                </div>
                {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Looking For</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Male', 'Female'].map((option) => (
                    <label key={option} className={`flex items-center justify-center py-2 px-3 border rounded-lg cursor-pointer transition-colors ${formData.lookingFor === option ? 'bg-rose-50 border-rose-200 text-rose-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="lookingFor"
                        value={option}
                        checked={formData.lookingFor === option}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-sm font-medium">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.lookingFor && <p className="mt-1 text-xs text-red-600">{errors.lookingFor}</p>}
              </div>

              <button type="button" onClick={nextStep} className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all font-medium flex items-center justify-center">
                Continue <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.dob ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-rose-200 focus:border-rose-500`}
                />
                {errors.dob && <p className="mt-1 text-xs text-red-600">{errors.dob}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-rose-200 focus:border-rose-500`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-rose-200 focus:border-rose-500`}
                  placeholder="10 digit number"
                />
                {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
              </div>

              {errors.submit && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{errors.submit}</div>
              )}

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)} className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Back</button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all font-medium flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Verify Mobile'}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield size={20} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Verify OTP</h3>
                <p className="text-sm text-gray-500 mt-1">Sent to +91 {formData.mobile}</p>
              </div>

              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`reg-otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-10 text-center text-lg font-bold border border-gray-300 rounded-lg focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    maxLength={1}
                  />
                ))}
              </div>

              {errors.otp && (
                <p className="text-center text-red-500 text-sm">{errors.otp}</p>
              )}

              <button
                onClick={handleVerifyOTP}
                disabled={isSubmitting}
                type="button"
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all font-medium shadow-md disabled:opacity-70"
              >
                {isSubmitting ? 'Verifying...' : 'Complete Registration'}
              </button>

              <div className="text-center space-y-2">
                <button
                  type="button"
                  onClick={handleSendOTP}
                  disabled={resendTimer > 0 || isSubmitting}
                  className="text-sm text-rose-600 hover:text-rose-700 font-medium disabled:text-gray-400"
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                </button>
                <div>
                  <button type="button" onClick={() => setStep(2)} className="text-sm text-gray-500 hover:text-gray-700">Change Number</button>
                </div>
              </div>
            </div>
          )}
        </form>

        <p className="text-[10px] text-gray-400 mt-6 text-center">
          By registering, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
}