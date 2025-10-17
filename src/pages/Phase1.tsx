import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import TimerDisplay from "@/components/TimerDisplay";

const Phase1 = () => {
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 300000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "lisbon") {
      toast({
        title: "Access Granted",
        description: "Perimeter breached successfully!",
      });
      navigate("/phase2");
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid codename. Try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background">
      <div className="container max-w-4xl px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="phase-indicator">
              PHASE 1: INFILTRATION
            </div>
            <h1 className="text-4xl font-bold glow-text">
              Breach the Perimeter
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
                Excellent work getting this far. The bank's homepage is displaying normally 
                to avoid suspicion, but our intelligence suggests they're using invisible 
                ink techniques to hide access codes from prying eyes.
              </p>
              
              <p>
                Your task: <span className="text-primary">Find the hidden codename</span> on 
                the bank's homepage below. It's there, but hidden from normal view. 
                Think like a hacker - what techniques might reveal hidden text?
              </p>
              
              <p className="text-secondary font-semibold">
                Remember: The codename is the key to breaching their first firewall.
              </p>
            </div>
          </div>

          {/* Bank Homepage Simulation */}
          <div className="terminal space-y-6 max-w-3xl mx-auto">
            <div className="text-lg border-b border-secondary/30 pb-2">
              <span className="text-secondary">CENTRAL BANK</span> - Digital Services Portal
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Central Bank's secure digital currency platform. 
                Our quantum-encrypted <span className="invisible-text">    </span> systems ensure the highest level of security 
                for all digital rupee transactions.
              </p>
              
              <p>
                For authorized personnel only. Access requires proper credentials 
                and security clearance. All access attempts<span className="invisible-text">    </span> are logged and monitored.
              </p>
              
              <p>
                Our executive team includes CEO Sarah Mitchell, CTO David Chen, 
                and our head of security <span className="invisible-text">    </span> Maria Santos <span className="invisible-text">LISBON</span>.
              </p>
              
              <p>
                Contact us for more information <span className="invisible-text">    </span>about our secure banking solutions.
              </p>
            </div>
          </div>

          {/* Input Form */}
          <div className="terminal max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Enter Codename:
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="cyber-input w-full"
                  placeholder="Security codename..."
                  autoComplete="off"
                />
              </div>
              
              <Button type="submit" variant="cyber" className="w-full">
                Breach Firewall
              </Button>
            </form>
          </div>

          {/* Hint System */}
          {showHint && (
            <div className="terminal max-w-2xl mx-auto border-accent/30">
              <div className="text-accent font-semibold mb-2">💡 HINT</div>
              <p className="text-muted-foreground text-sm">
                Invisible ink technique: Try selecting all the text in the bank's homepage. 
                Sometimes text is hidden by making it the same color as the background.
                Look for text that might be disguised in the executive team section.
              </p>
            </div>
          )}

          {/* Progress */}
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              Phase 1 of 5 • Team infiltration in progress...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase1;