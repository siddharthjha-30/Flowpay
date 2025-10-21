import { ArrowLeft, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const Transaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Transaction Details</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="animate-fade-in space-y-6">
          <Card className="bg-gradient-to-br from-green-500/10 to-primary/10 border-green-500/30">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Transaction Confirmed</h2>
              <p className="text-4xl font-bold text-green-500 mb-2">$250.00</p>
              <p className="text-sm text-muted-foreground">Sent to Sarah Chen</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transaction Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Status</span>
                <span className="font-semibold text-green-500">Confirmed</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Date & Time</span>
                <span className="font-semibold">Dec 23, 2025 14:32</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Transaction ID</span>
                <span className="font-mono text-sm">TX{id}ABC123</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Network</span>
                <span className="font-semibold">Ethereum</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Network Fee</span>
                <span className="font-semibold">$0.50</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Confirmations</span>
                <span className="font-semibold">12/12</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blockchain Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Block Hash</p>
                <p className="font-mono text-xs break-all">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb4A1234567890abcdef
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View on Block Explorer
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Transaction;