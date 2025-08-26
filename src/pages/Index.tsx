import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { UnbanForm } from "@/components/UnbanForm";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-tech">
      {!showForm ? (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <ReviewsSection />
        </>
      ) : (
        <div className="pt-20">
          <UnbanForm onBack={() => setShowForm(false)} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Index;
