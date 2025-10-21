import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe, Zap, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-glow animate-gradient-shift">
              Flow
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Instant Payment. Global Currency. Zero Wait.
            </p>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              Send and receive money instantly across borders using blockchain-backed stablecoins and seamless fiat on/off ramps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
              <Button variant="hero" size="lg" onClick={() => navigate("/auth")} className="text-lg">
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/dashboard")} className="text-lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Flow?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Transfers</h3>
              <p className="text-muted-foreground">
                Send money globally in seconds with blockchain technology
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Currency</h3>
              <p className="text-muted-foreground">
                Hold and manage multiple currencies and stablecoins in one wallet
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-muted-foreground">
                Bank-grade security with blockchain transparency
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
              <p className="text-muted-foreground">
                Minimal network fees on all international transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future of Payments?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users already sending money instantly across the globe
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate("/auth")} className="text-lg">
            Create Your Account
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Flow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
