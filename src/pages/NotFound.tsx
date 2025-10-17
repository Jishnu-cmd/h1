import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GameForms from "@/components/GameForms";
import { useTimer } from "@/components/TimerContext";
import { getElapsedTime, GAME_DURATION } from "@/utils/timeUtils";

const NotFound = () => {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [isTimeExpired, setIsTimeExpired] = useState(false);
  const { timeLeft } = useTimer();
  
  const elapsedTime = getElapsedTime(GAME_DURATION, timeLeft);

  useEffect(() => {
    // Check if this is a time expiration (timeLeft is 0 or very low)
    if (timeLeft <= 1) {
      setIsTimeExpired(true);
      setShowForm(true);
    }
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname, timeLeft]);

  const resetGame = () => {
    // Clear any cookies and reset
    document.cookie = "extraction_route=; path=/; max-age=0";
    window.location.href = "/";
  };

  // If time expired, show the game over screen with form
  if (isTimeExpired) {
    return (
      <div className="min-h-screen matrix-bg flex items-center justify-center bg-background relative">
        <div className="container max-w-4xl px-6">
          <div className="text-center space-y-8">
            {/* Game Over Header */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-destructive glow-text">
                TIME EXPIRED
              </h1>
              <h2 className="text-2xl text-secondary matrix-text">
                Mission Failed
              </h2>
              <div className="phase-indicator">
                OPERATION ABORTED
              </div>
            </div>

            {/* Failure Message */}
            <div className="terminal space-y-6 text-left max-w-3xl mx-auto">
              <div className="text-lg border-b border-destructive/30 pb-2">
                <span className="text-destructive">THE PROFESSOR</span> - Emergency Transmission
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-destructive font-semibold text-lg">
                  ⚠️ Security breach detected! The bank's quantum firewall has been activated.
                </p>
                
                <p>
                  Unfortunately, your team ran out of time after <span className="text-primary font-semibold">{elapsedTime}</span>. 
                  The bank's security protocols have locked down the system, and extraction is no longer possible.
                </p>
                
                <p>
                  While this mission didn't succeed, you've gained valuable experience in:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-primary">Web Security</span>: Browser inspection techniques</li>
                  <li><span className="text-secondary">Digital Forensics</span>: Console communication interception</li>
                  <li><span className="text-accent">Problem Solving</span>: Algorithmic thinking under pressure</li>
                  <li><span className="text-primary">Time Management</span>: Working efficiently in high-stakes scenarios</li>
                </ul>
                
                <p className="text-accent text-center font-semibold">
                  "Every failed operation teaches us something for the next one."
                </p>
              </div>
            </div>

            {/* Abortive Form */}
            {showForm ? (
              <div className="space-y-6">
                <GameForms formType="abortive" timeElapsed={elapsedTime} />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="cyber-secondary" 
                    size="lg"
                    onClick={() => setShowForm(false)}
                  >
                    Hide Form
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={resetGame}
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cyber-secondary" 
                  size="lg"
                  onClick={() => setShowForm(true)}
                >
                  FILL ATTEMPT FORM
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={resetGame}
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Regular 404 page for other routes
  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background">
      <div className="text-center terminal max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-destructive">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Access Denied - Unauthorized Route</p>
        <p className="text-muted-foreground mb-6">
          The path you're trying to access doesn't exist in our secure network.
        </p>
        <Button 
          variant="cyber" 
          onClick={resetGame}
        >
          Return to Base
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
