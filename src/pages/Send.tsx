import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Send = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const conversionRate = 1.12;
  const networkFee = 0.5;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Send Money</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="animate-fade-in space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recipient</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="recipient">Email, Phone, or Wallet Address</Label>
                <Input
                  id="recipient"
                  placeholder="Enter recipient details"
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="amount">You Send</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" className="min-w-24">
                    {currency} <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Conversion Rate</span>
                  <span className="font-medium">1 USD = {conversionRate} EUR</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Network Fee</span>
                  <span className="font-medium">${networkFee}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Recipient Gets</span>
                    <span className="font-bold text-primary">
                      {amount ? `€${(parseFloat(amount) * conversionRate - networkFee).toFixed(2)}` : "€0.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Estimated Arrival</p>
              <p className="text-2xl font-bold">Instant</p>
              <p className="text-sm text-muted-foreground mt-1">
                Blockchain confirmations typically take 2-5 minutes
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => navigate("/dashboard")}>
              Cancel
            </Button>
            <Button variant="hero" className="flex-1">
              Confirm & Send
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Send;