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
      // Set the extraction route cookie
      const successUrl = window.location.origin + "/success";
      const encodedUrl = btoa(successUrl);
      document.cookie = `extraction_route=${encodedUrl}; path=/; max-age=3600`;
      
      setKeySubmitted(true);
      toast({
        title: "Key Accepted",
        description: "Escape route encrypted in transaction logs!",
      });
    } else {
      toast({
        title: "Invalid Key",
        description: "Incorrect combined key. Check your previous solutions.",
        variant: "destructive",
      });
    }
  };

  const findExtractionRoute = () => {
    // Get the cookie value
    const cookies = document.cookie.split(';');
    const extractionCookie = cookies.find(cookie => 
      cookie.trim().startsWith('extraction_route=')
    );
    
    if (extractionCookie) {
      const encodedUrl = extractionCookie.split('=')[1];
      try {
        const decodedUrl = atob(encodedUrl);
        // Extract the path from the URL and navigate using React Router
        const url = new URL(decodedUrl);
        navigate(url.pathname);
      } catch (error) {
        // Fallback: navigate directly to success page
        navigate('/success');
      }
    } else {
      toast({
        title: "Route Not Found",
        description: "No extraction route found in transaction logs.",
        variant: "destructive",
      });
    }
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
            /* Escape Instructions */
            <div className="terminal space-y-6 max-w-3xl mx-auto">
              <div className="text-lg border-b border-accent/30 pb-2">
                <span className="text-accent">EXTRACTION PROTOCOL</span> - Escape Route Encrypted
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-primary font-semibold">
                  ✅ Master key verified! Escape route has been encrypted and stored securely.
                </p>
                
                <p>
                  For your security, I've hidden your extraction route in the bank's 
                  transaction logs. This ensures the route can't be 
                  intercepted by their security systems.
                </p>
                
                <p className="text-secondary">
                  To complete your escape: Access the browser's transaction logs and 
                  look for the "extraction_route" entry. The route is Base64 encoded 
                  for additional security.
                </p>
              </div>
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="cyber-secondary" 
                  onClick={findExtractionRoute}
                  className="w-full"
                >
                  Find Extraction Route
                </Button>
                
                <div className="text-center space-y-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      console.log('Navigating to success page...');
                      navigate('/success');
                    }}
                    className="text-sm w-full"
                  >
                    🚀 Complete Mission (Direct Route)
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Use this if the extraction route doesn't work
                  </p>
                </div>
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