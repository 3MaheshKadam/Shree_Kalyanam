"use client"
import QuickRegistrationForm from '@/components/QuickRegistrationForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-24 pb-12 flex items-center justify-center px-4">
                <div className="w-full max-w-4xl flex flex-col items-center">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
                        <p className="text-gray-600">Join our community and find your perfect partner</p>
                    </div>
                    {/* Centered Form with removed left padding since it's standalone */}
                    <div className="w-full flex justify-center [&>div]:lg:pl-0 [&>div]:w-full [&>div]:max-w-lg">
                        <QuickRegistrationForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
