import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Zap } from "lucide-react";
import techBackground from "@/assets/tech-background.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const handleFollowChannel = () => {
    window.open("https://whatsapp.com/channel/0029VaesBAXJJhzefVszDu3h", "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tech Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${techBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-tech/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 tech-dots opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 slide-up">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
            WhatsApp
            <span className="text-primary"> Unban </span>
            Tool
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Professional WhatsApp Account Recovery Service
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your permanently banned WhatsApp account back with our advanced review system. 
            Trusted by thousands of users worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card float">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Recovery</h3>
            <p className="text-muted-foreground">Quick processing within 24-48 hours</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card float" style={{ animationDelay: "0.2s" }}>
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
            <p className="text-muted-foreground">Professional appeal letters to WhatsApp</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card float" style={{ animationDelay: "0.4s" }}>
            <ExternalLink className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Success Rate</h3>
            <p className="text-muted-foreground">95% success rate for permanent bans</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onGetStarted}
            className="text-lg px-8 py-4"
          >
            Start Recovery Process
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleFollowChannel}
            className="text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Follow Our Channel
          </Button>
        </div>

        {/* Developer Credit */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Developed by <span className="text-primary font-semibold">MR SMILE</span>
          </p>
        </div>
      </div>
    </div>
  );
};