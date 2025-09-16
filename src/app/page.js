import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickRegistrationForm from "@/components/QuickRegistrationForm";
import SearchMatchesWidget from "@/components/SearchMatchesWidget";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProfiles from "@/components/FeaturedProfiles";
import SuccessStories from "@/components/SuccessStories";
import AppDownload from "@/components/AppDownload";
import UserTestimonials from "@/components/UserTestimonials";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <QuickRegistrationForm /> */}
      <SearchMatchesWidget />
      <FeaturedProfiles />

      <WhyChooseUs />
            <HowItWorks/>

      {/* <SuccessStories /> */}
      <AppDownload />
      <UserTestimonials />
      {/* <BlogPreview /> */}
      <Footer />
    </>
  );
}
