import { useState } from "react";
import { ArrowLeft, Copy, Share2, QrCode as QrCodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Receive = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const walletAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
    });
  };

  const shareAddress = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Flow Wallet Address",
        text: `Send me money on Flow: ${walletAddress}`,
      });
    } else {
      copyAddress();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Receive Money</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="animate-fade-in space-y-6">
          <Card className="bg-gradient-to-br from-card via-card to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Your Wallet QR Code</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl mb-6">
                <div className="w-48 h-48 flex items-center justify-center">
                  <QrCodeIcon className="w-40 h-40 text-background" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Share this QR code to receive payments instantly
              </p>
              <div className="flex gap-3 w-full">
                <Button variant="outline" className="flex-1" onClick={shareAddress}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Wallet Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-mono break-all mb-3">{walletAddress}</p>
                <Button variant="default" className="w-full" onClick={copyAddress}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Address
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Share this address with anyone who wants to send you money on Flow
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supported Currencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {["USD", "EUR", "GBP", "INR", "USDT", "USDC"].map((curr) => (
                  <div key={curr} className="bg-muted/50 p-3 rounded-lg text-center">
                    <p className="font-semibold">{curr}</p>
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

export default Receive;