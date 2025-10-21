import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    fullName: "",
    dateOfBirth: "",
    address: ""
  });

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setLoading(true);
      try {
        const { error } = await supabase
          .from('profiles')
          .update({
            phone: formData.phone,
            full_name: formData.fullName,
            date_of_birth: formData.dateOfBirth,
            address: formData.address,
            kyc_verified: true
          })
          .eq('id', user?.id);

        if (error) throw error;

        toast({
          title: "Profile updated!",
          description: "Your information has been saved successfully."
        });
        setStep(3);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Flow
          </h1>
          <p className="text-muted-foreground">Instant Payment. Global Currency. Zero Wait.</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <CardTitle>
                {step === 1 && "Create Account"}
                {step === 2 && "Verify Identity"}
                {step === 3 && "Setup Complete"}
              </CardTitle>
              <span className="text-sm text-muted-foreground">Step {step}/3</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {step === 1 && (
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>
            )}

            {step === 2 && (
              <>
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Quick KYC Verification</p>
                  <p className="font-semibold">Identity verification required</p>
                </div>
                <div>
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    id="fullname"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St, City, Country"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <Button variant="outline" className="w-full">
                  Upload ID Document
                </Button>
              </>
            )}

            {step === 3 && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">You're All Set!</h3>
                <p className="text-muted-foreground mb-6">
                  Your account is ready. Start sending money globally in seconds.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Instant Transfers</p>
                      <p className="text-sm text-muted-foreground">Send money worldwide in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Multi-Currency</p>
                      <p className="text-sm text-muted-foreground">Hold and manage multiple currencies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Low Fees</p>
                      <p className="text-sm text-muted-foreground">Minimal network fees on all transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button variant="hero" className="w-full" onClick={handleNext} disabled={loading}>
              {loading ? "Saving..." : (step < 3 ? "Continue" : "Go to Dashboard")}
            </Button>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;