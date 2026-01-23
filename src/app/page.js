import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickRegistrationForm from "@/components/QuickRegistrationForm";
import SearchMatchesWidget from "@/components/SearchMatchesWidget";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProfiles from "@/components/FeaturedProfiles";
import SuccessStories from "@/components/SuccessStories";
import MembershipPlans from "@/components/MembershipPlans";
import AppDownload from "@/components/AppDownload";
import UserTestimonials from "@/components/UserTestimonials";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <QuickRegistrationForm /> */}
      <SearchMatchesWidget />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedProfiles />
      {/* <SuccessStories /> */}

      <AppDownload />
      <UserTestimonials />

      <BlogPreview />
      <MembershipPlans />
      <Footer />
    </>
  );
}
