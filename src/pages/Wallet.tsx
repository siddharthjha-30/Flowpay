import { ArrowLeft, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

  const currencies = [
    { code: "USD", name: "US Dollar", balance: "3,245.18", equivalent: "$3,245.18", change: "+2.5%", trending: "up" },
    { code: "EUR", name: "Euro", balance: "1,850.00", equivalent: "$2,072.00", change: "+1.2%", trending: "up" },
    { code: "GBP", name: "British Pound", balance: "450.00", equivalent: "$582.75", change: "-0.8%", trending: "down" },
    { code: "INR", name: "Indian Rupee", balance: "45,000", equivalent: "$540.00", change: "+0.3%", trending: "up" },
    { code: "USDT", name: "Tether USD", balance: "500.00", equivalent: "$500.00", change: "0.0%", trending: "up" },
    { code: "USDC", name: "USD Coin", balance: "250.00", equivalent: "$250.00", change: "0.0%", trending: "up" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Multi-Currency Wallet</h1>
          </div>
          <Button variant="hero" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Currency
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-fade-in space-y-6">
          <Card className="bg-gradient-to-br from-card via-card to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2">$7,189.93</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-semibold">+4.2% (24h)</span>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-lg font-semibold mb-4">Your Currencies</h2>
            <div className="space-y-3">
              {currencies.map((currency) => (
                <Card key={currency.code} className="hover:border-primary/50 transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="font-bold text-primary">{currency.code.slice(0, 1)}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{currency.code}</p>
                          <p className="text-sm text-muted-foreground">{currency.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{currency.balance}</p>
                        <p className="text-sm text-muted-foreground">{currency.equivalent}</p>
                        <div className="flex items-center gap-1 justify-end mt-1">
                          {currency.trending === "up" ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500" />
                          )}
                          <span className={`text-xs ${currency.trending === "up" ? "text-green-500" : "text-red-500"}`}>
                            {currency.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Convert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Instantly convert between currencies at real-time rates
              </p>
              <Button variant="default" className="w-full">
                Start Converting
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Wallet;