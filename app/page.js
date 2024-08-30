"use client";

import AuthHeader from "@/components/AuthHeader";
import ContactUs from "@/components/ContactUs";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import How from "@/components/How";
import ImageSection from "@/components/ImageSection";
import DiscoverTrending from "@/components/DiscoverTrending";
import Why from "@/components/Why";

export default function LandingPage() {
  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center">
      <AuthHeader />
      <FirstSection />
      <ImageSection />
      <DiscoverTrending />
      <Why />
      <How />
      <ContactUs />
      <Footer />
    </main>
  );
}
