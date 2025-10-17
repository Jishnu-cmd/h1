import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import TimerDisplay from "@/components/TimerDisplay";

const Phase5 = () => {
  const [combinedKey, setCombinedKey] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [keySubmitted, setKeySubmitted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (combinedKey.trim() === "741") {
      setKeySubmitted(true);
      toast({
        title: "Key Accepted",
        description: "Extraction successful! Mission complete!",
      });
    } else {
      toast({
        title: "Invalid Key",
        description: "Incorrect combined key. Check your previous solutions.",
        variant: "destructive",
      });
    }
  };

  const proceedToSuccess = () => {
    navigate('/success');
  };

  // Auto-show hint after 5 minutes
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 300000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background">
      <div className="container max-w-4xl px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="phase-indicator">
              PHASE 5: EXTRACTION
            </div>
            <h1 className="text-4xl font-bold glow-text">
              The Great Escape
            </h1>
            <TimerDisplay />
          </div>

          {/* Mission */}
          <div className="terminal space-y-6 text-left max-w-3xl mx-auto">
            <div className="text-lg border-b border-primary/30 pb-2">
              <span className="text-primary">THE PROFESSOR</span> - Final Transmission
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Exceptional work, team! You've successfully cracked their vault and extracted 
                the maximum value possible. But we're not done yet - now comes the most 
                critical phase: <span className="text-destructive">the escape</span>.
              </p>
              
              <p>
                Throughout this operation, you've collected key fragments from each phase:
              </p>
              
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><span className="text-primary">Phase 3 (Maze)</span>: First key fragment = 7</li>
                <li><span className="text-secondary">Phase 4 (Vault)</span>: Second key fragment = 41</li>
              </ul>
              
              <p className="text-accent font-semibold">
                Your task: Combine these fragments (7 + 41 = ?) to create the master extraction key.
              </p>
              
              <p>
                Once verified, I'll encrypt your escape route in the bank's transaction logs 
                for security. You'll need to find and decode it to complete your escape.
              </p>
            </div>
          </div>

          {/* Input Form */}
          {!keySubmitted ? (
            <div className="terminal max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Enter Combined Key:
                  </label>
                  <input
                    type="text"
                    value={combinedKey}
                    onChange={(e) => setCombinedKey(e.target.value)}
                    className="cyber-input w-full"
                    placeholder="Combined key..."
                    autoComplete="off"
                  />
                </div>
                
                <Button type="submit" variant="cyber" className="w-full">
                  Submit Extraction Key
                </Button>
              </form>
            </div>
          ) : (
            /* Mission Complete */
            <div className="terminal space-y-6 max-w-3xl mx-auto">
              <div className="text-lg border-b border-accent/30 pb-2">
                <span className="text-accent">EXTRACTION COMPLETE</span> - Mission Successful
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-primary font-semibold">
                  ✅ Master key verified! Extraction successful!
                </p>
                
                <p>
                  Congratulations! You've successfully completed all phases of the operation.
                  The team has escaped safely with maximum value extracted from the vault.
                </p>
                
                <p className="text-secondary">
                  Click below to proceed to the mission debrief and submit your completion form.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="cyber-primary" 
                  onClick={proceedToSuccess}
                  className="w-full text-lg py-3"
                >
                  🚀 Complete Mission & Submit Form
                </Button>
              </div>
            </div>
          )}

          {/* Hint System */}
          {showHint && (
            <div className="terminal max-w-2xl mx-auto border-accent/30">
              <div className="text-accent font-semibold mb-2">💡 HINT</div>
            </div>
          )}

          {/* Progress */}
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              Phase 5 of 5 • Final extraction in progress...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase5;