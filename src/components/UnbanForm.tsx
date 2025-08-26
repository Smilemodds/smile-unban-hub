import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, Send, CheckCircle, ArrowLeft } from "lucide-react";

interface UnbanFormProps {
  onBack?: () => void;
}

export const UnbanForm = ({ onBack }: UnbanFormProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [banReason, setBanReason] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const unbanPlans = [
    { id: "1", name: "Single Account Recovery", price: "$15", accounts: 1 },
    { id: "2", name: "Dual Account Recovery", price: "$25", accounts: 2 },
    { id: "3", name: "Triple Account Recovery", price: "$35", accounts: 3 },
    { id: "4", name: "Quad Recovery Package", price: "$45", accounts: 4 },
    { id: "5", name: "Penta Recovery Bundle", price: "$55", accounts: 5 },
    { id: "6", name: "Hexa Recovery Suite", price: "$65", accounts: 6 },
    { id: "7", name: "Septa Recovery Pro", price: "$75", accounts: 7 },
    { id: "8", name: "Octa Recovery Elite", price: "$85", accounts: 8 },
    { id: "9", name: "Nona Recovery Master", price: "$95", accounts: 9 },
    { id: "10", name: "Ultimate Recovery Package", price: "$100", accounts: 10 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlan || !phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please select a recovery plan and enter your phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate processing
    setTimeout(() => {
      const selectedPlanData = unbanPlans.find(plan => plan.id === selectedPlan);
      
      const emailSubject = `WhatsApp Account Recovery Request - ${selectedPlanData?.name}`;
      const emailBody = `
Dear WhatsApp Support Team,

I am writing to request the recovery of my WhatsApp account(s) that have been permanently banned.

Recovery Plan: ${selectedPlanData?.name}
Number of Accounts: ${selectedPlanData?.accounts}
Phone Number: ${phoneNumber}
Ban Reason: ${banReason || "Not specified"}

Additional Information:
${additionalInfo || "None provided"}

I believe this ban was issued in error and would greatly appreciate your assistance in reviewing my case. I am a legitimate user who respects WhatsApp's terms of service and community guidelines.

Thank you for your time and consideration.

Best regards,
${phoneNumber}
      `.trim();

      const mailtoLink = `mailto:support@whatsapp.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Review Generated Successfully!",
        description: "Your email client will open with the recovery request. Send it to WhatsApp support.",
      });

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      {onBack && (
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-primary/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      )}

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 glow-text">Choose Your Recovery Plan</h2>
        <p className="text-xl text-muted-foreground">Select the number of accounts you need to recover</p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {unbanPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedPlan === plan.id
                ? "border-primary bg-primary/10 glow-green"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <Badge variant={selectedPlan === plan.id ? "default" : "secondary"} className="mb-2">
                  {plan.accounts} {plan.accounts === 1 ? "Account" : "Accounts"}
                </Badge>
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <p className="text-2xl font-bold text-primary mt-2">{plan.price}</p>
              </div>
              {selectedPlan === plan.id && (
                <CheckCircle className="w-6 h-6 text-primary mx-auto" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Form */}
      {selectedPlan && (
        <Card className="shadow-card slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Account Recovery Form
            </CardTitle>
            <CardDescription>
              Please provide your banned account details for review generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (with country code)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+254XXXXXXXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Ban Reason (if known)</Label>
                <Select value={banReason} onValueChange={setBanReason}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ban reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spam">Spam/Bulk messaging</SelectItem>
                    <SelectItem value="harassment">Harassment</SelectItem>
                    <SelectItem value="fake-account">Fake account</SelectItem>
                    <SelectItem value="terms-violation">Terms violation</SelectItem>
                    <SelectItem value="unknown">Unknown/Not specified</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Additional Information (Optional)</Label>
                <Textarea
                  id="additional"
                  placeholder="Provide any additional context about your ban..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-lg py-4"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Generate Recovery Email
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
