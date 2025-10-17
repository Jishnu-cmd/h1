import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TimerDisplay from "@/components/TimerDisplay";
import GameForms from "@/components/GameForms";
import { useTimer } from "@/components/TimerContext";
import { getElapsedTime, GAME_DURATION } from "@/utils/timeUtils";

const Success = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { timeLeft } = useTimer();
  
  const elapsedTime = getElapsedTime(GAME_DURATION, timeLeft);

  useEffect(() => {
    // Trigger celebration animation
    setTimeout(() => setShowCelebration(true), 500);
  }, []);

  const resetGame = () => {
    // Clear any cookies and reset
    document.cookie = "extraction_route=; path=/; max-age=0";
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen matrix-bg flex items-center justify-center bg-background relative overflow-hidden">
      {/* Celebration Background Effect */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="success-glow absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
        </div>
      )}

      <div className="container max-w-4xl px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Success Header */}
          <div className="space-y-6">
            <div className={`transition-all duration-1000 ${showCelebration ? 'scale-110' : 'scale-100'}`}>
              <h1 className="text-7xl font-bold glow-text mb-4">
                MISSION
              </h1>
              <h1 className="text-7xl font-bold text-secondary matrix-text">
                ACCOMPLISHED
              </h1>
            </div>
            
            <div className="phase-indicator success-glow">
              OPERATION COMPLETE
            </div>
          </div>

          {/* Success Message */}
          <div className="terminal space-y-6 text-left max-w-3xl mx-auto">
            <div className="text-lg border-b border-primary/30 pb-2">
              <span className="text-primary">THE PROFESSOR</span> - Final Transmission
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-primary font-semibold text-lg">
                🎉 Congratulations, elite hackers! You've successfully pulled off 
                the greatest digital operation in history!
              </p>
              
              <p>
                Your team demonstrated exceptional skills across all disciplines:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-primary">Web Security</span>: Found hidden elements using browser inspection</li>
                <li><span className="text-secondary">Digital Forensics</span>: Intercepted console communications</li>
                <li><span className="text-accent">Algorithm Design</span>: Solved pathfinding through the digital maze</li>
                <li><span className="text-primary">Optimization</span>: Maximized value extraction with knapsack algorithms</li>
                <li><span className="text-secondary">Cryptography</span>: Decoded Base64 extraction routes from cookies</li>
              </ul>
              
              <p>
                The digital rupees are now safely in your possession. The bank's 
                quantum encryption proved no match for your combined expertise 
                and teamwork.
              </p>
              
              <p className="text-accent text-center font-semibold">
                "Sometimes the most sophisticated security can be beaten by 
                clever thinking and persistence."
              </p>
              
              <p className="text-secondary">
                Thank you for participating in <strong>LE' Red Mask: The Digital Rupee Operation</strong>. 
                Your journey through web technologies, algorithms, and cybersecurity 
                concepts showcases the skills every modern developer needs.
              </p>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="terminal text-center p-4">
              <div className="text-2xl font-bold text-primary">5/5</div>
              <div className="text-sm text-muted-foreground">Phases Completed</div>
            </div>
            <div className="terminal text-center p-4">
              <div className="text-2xl font-bold text-secondary">₹∞</div>
              <div className="text-sm text-muted-foreground">Digital Rupees Extracted</div>
            </div>
            <div className="terminal text-center p-4">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Mission Success Rate</div>
            </div>
          </div>

          {/* Credits */}
          <div className="terminal space-y-4 max-w-2xl mx-auto">
            <h3 className="text-primary font-semibold text-center">Event Credits</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>Created by:</strong> Team acm vvitu</p>
              <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, React, Tailwind CSS</p>
              <p><strong>Inspired by:</strong> Escape rooms, cybersecurity challenges, and algorithmic thinking</p>
              <p><strong>Special Thanks:</strong> All participants who made this event memorable!</p>
            </div>
          </div>

          {/* Winner Form */}
          {showForm ? (
            <div className="space-y-6">
              <GameForms formType="winner" timeElapsed={elapsedTime} />
              <div className="flex justify-center">
                <Button 
                  variant="cyber-secondary" 
                  size="lg"
                  onClick={() => setShowForm(false)}
                >
                  Hide Form
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
                FILL THE WINNER FORM
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={resetGame}
              >
                Play Again
              </Button>
            </div>
          )}

          {/* Fun GIF/Video placeholder */}
          <div className="terminal p-8 max-w-md mx-auto">
            <div className="text-center space-y-4">
              <div className="text-6xl">🎭</div>
              <p className="text-sm text-muted-foreground">
                "The perfect operation is not about the money.<br />
                It's about the challenge."
              </p>
              <div className="text-xs text-accent">
                - The Professor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;