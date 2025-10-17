import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import TimerDisplay from "@/components/TimerDisplay";

const Phase2 = () => {
  const [accessKey, setAccessKey] = useState("");
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Log the access key to console
    console.log("%c🔐 INTERNAL COMMS INTERCEPTED", "color: #00ff41; font-size: 16px; font-weight: bold;");
    console.log("%cAccess Key: oslo-808", "color: #00ffff; font-size: 14px;");
    console.log("%c[SECURED CHANNEL] Use this key to bypass communications monitoring", "color: #00ff41; font-size: 12px;");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessKey.toLowerCase().trim() === "oslo-808") {
      toast({
        title: "Communications Bypassed",
        description: "Internal monitoring disabled successfully!",
      });
      navigate("/phase3");
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid access key. Check your intelligence sources.",
        variant: "destructive",
      });
    }
  };

  // Auto-show hint after 5 minutes
  setTimeout(() => setShowHint(true), 300000);

  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background">
      <div className="container max-w-4xl px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="phase-indicator">
              PHASE 2: BYPASS COMMUNICATIONS
            </div>
            <h1 className="text-4xl font-bold glow-text">
              Disable Internal Monitoring
            </h1>
            <TimerDisplay />
          </div>

          {/* Mission */}
          <div className="terminal space-y-6 text-left max-w-3xl mx-auto">
            <div className="text-lg border-b border-primary/30 pb-2">
              <span className="text-primary">THE PROFESSOR</span> - Secure Channel
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Outstanding work on Phase 1! You've successfully breached the perimeter. 
                Now we need to disable their internal communications monitoring before 
                we can proceed deeper into their system.
              </p>
              
              <p>
                Our hackers have been intercepting the bank's internal communications. 
                The admin access key should be transmitted through their "debug channels" - 
                places where developers typically leave traces of their work.
              </p>
              
              <p className="text-secondary font-semibold">
                Your task: Listen in on their internal communications and find the admin access key.
              </p>
              
              <p className="text-accent">
                💡 Pro tip: Most web applications leak information through developer tools. 
                Check the console for any intercepted transmissions.
              </p>
            </div>
          </div>

          {/* System Monitor */}
          <div className="terminal space-y-6 max-w-3xl mx-auto">
            <div className="text-lg border-b border-secondary/30 pb-2">
              <span className="text-secondary">NETWORK MONITOR</span> - Listening for transmissions...
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div className="matrix-text">
                [SCANNING] Internal communication channels...
              </div>
              <div className="matrix-text">
                [DETECTED] Administrative traffic on secure channel
              </div>
              <div className="matrix-text">
                [INTERCEPT] Attempting to decode transmission...
              </div>
              <div className="text-primary">
                [SUCCESS] Administrative credentials located in debug stream
              </div>
              <div className="text-accent">
                [INFO] Check console output for intercepted data
              </div>
            </div>
          </div>

          {/* Input Form */}
          <div className="terminal max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Enter Access Key:
                </label>
                <input
                  type="text"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="cyber-input w-full"
                  placeholder="admin-key-###"
                  autoComplete="off"
                />
              </div>
              
              <Button type="submit" variant="cyber" className="w-full">
                Bypass Communications
              </Button>
            </form>
          </div>

          {/* Hint System */}
          {showHint && (
            <div className="terminal max-w-2xl mx-auto border-accent/30">
              <div className="text-accent font-semibold mb-2">💡 HINT</div>
              
            </div>
          )}

          {/* Progress */}
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              Phase 2 of 5 • Communications monitoring in progress...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase2;