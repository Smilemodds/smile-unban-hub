import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmed K.",
      rating: 5,
      text: "My WhatsApp was banned for 3 months and I thought I lost everything. MR SMILE MODDERS helped me get it back in just 2 days! Amazing service!",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Sarah M.",
      rating: 5,
      text: "Professional service! They generated the perfect appeal letter and my permanent ban was lifted. Worth every penny!",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "John D.",
      rating: 5,
      text: "I was skeptical at first but this really works. Got my business WhatsApp account back after permanent ban. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "Maria R.",
      rating: 5,
      text: "Fast and reliable! The team knows exactly what to do. My account was restored within 24 hours.",
      date: "3 weeks ago"
    },
    {
      id: 5,
      name: "David L.",
      rating: 5,
      text: "Tried multiple services before finding MR SMILE MODDERS. They're the only ones that actually work!",
      date: "1 month ago"
    },
    {
      id: 6,
      name: "Lisa P.",
      rating: 5,
      text: "Excellent customer service and results. My family WhatsApp group is back online thanks to them!",
      date: "1 month ago"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 glow-text">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who got their WhatsApp accounts back
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground">(2,847 reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="shadow-card hover:shadow-tech transition-all duration-300 hover:scale-105 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2,847+</div>
            <p className="text-muted-foreground">Accounts Recovered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <p className="text-muted-foreground">Average Recovery Time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};