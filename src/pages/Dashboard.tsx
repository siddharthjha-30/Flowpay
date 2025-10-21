import { ArrowUpRight, ArrowDownRight, Send, QrCode, Settings, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const recentTransactions = [
    { id: 1, type: "sent", recipient: "Sarah Chen", amount: "$250.00", currency: "USD", time: "2 hours ago", status: "confirmed" },
    { id: 2, type: "received", recipient: "John Doe", amount: "$1,200.00", currency: "USD", time: "5 hours ago", status: "confirmed" },
    { id: 3, type: "sent", recipient: "Maria Garcia", amount: "€180.50", currency: "EUR", time: "1 day ago", status: "confirmed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Flow
          </h1>
          <Button variant="ghost" size="icon" onClick={() => navigate("/settings")}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-fade-in">
          {/* Balance Card */}
          <Card className="mb-8 bg-gradient-to-br from-card via-card to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-4xl font-bold">$5,432.18</p>
                <p className="text-sm text-muted-foreground">≈ ₹4,52,000 INR</p>
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="hero" className="flex-1" onClick={() => navigate("/send")}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Money
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => navigate("/receive")}>
                  <QrCode className="mr-2 h-4 w-4" />
                  Receive
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="hover:border-primary/50 transition-all cursor-pointer" onClick={() => navigate("/wallet")}>
              <CardContent className="pt-6">
                <Wallet className="h-8 w-8 mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Multi-Currency</h3>
                <p className="text-sm text-muted-foreground">Manage your wallets</p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-all cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold">24h</span>
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="font-semibold mb-1">+$1,450</h3>
                <p className="text-sm text-muted-foreground">Trading volume</p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-all cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-3">5</div>
                <h3 className="font-semibold mb-1">Active Transactions</h3>
                <p className="text-sm text-muted-foreground">In progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/transaction/${tx.id}`)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${tx.type === "sent" ? "bg-red-500/20" : "bg-green-500/20"}`}>
                        {tx.type === "sent" ? (
                          <ArrowUpRight className="h-4 w-4 text-red-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {tx.type === "sent" ? "Sent to" : "Received from"} {tx.recipient}
                        </p>
                        <p className="text-sm text-muted-foreground">{tx.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${tx.type === "sent" ? "text-red-500" : "text-green-500"}`}>
                        {tx.type === "sent" ? "-" : "+"}
                        {tx.amount}
                      </p>
                      <p className="text-sm text-muted-foreground">{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;