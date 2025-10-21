import { ArrowLeft, User, Shield, CreditCard, Bell, Globe, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const navigate = useNavigate();

  const settingsOptions = [
    { icon: User, title: "Profile", description: "Update your personal information", action: () => {} },
    { icon: Shield, title: "Security & 2FA", description: "Manage security settings", action: () => {} },
    { icon: CreditCard, title: "Linked Bank Accounts", description: "Manage payment methods", action: () => {} },
    { icon: Bell, title: "Notifications", description: "Configure alerts and notifications", action: () => {} },
    { icon: Globe, title: "Language & Region", description: "Change app language and currency", action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="animate-fade-in space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {settingsOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={option.action}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-full">
                      <option.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{option.title}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                  <ArrowLeft className="h-5 w-5 rotate-180 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive transaction alerts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Biometric Login</p>
                  <p className="text-sm text-muted-foreground">Use fingerprint or face ID</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Get updates via email</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Help Center
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Contact Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Terms & Privacy
              </Button>
            </CardContent>
          </Card>

          <Button variant="destructive" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Settings;