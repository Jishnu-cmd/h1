import React from "react";

interface GameFormProps {
  formType: 'start' | 'winner' | 'abortive';
  timeElapsed?: string;
}

const GameForms: React.FC<GameFormProps> = ({ formType, timeElapsed }) => {
  const getFormUrl = () => {
    switch (formType) {
      case 'start':
        return "https://forms.gle/R8eX9BhSWFxdpMe69";
      
      case 'winner':
        if (timeElapsed) {
          return `https://docs.google.com/forms/d/e/1FAIpQLScBmHp0-Sg72zfsN3MpOJ0M_4qe8AeP75mLAMCIGo12hsqGMg/viewform?usp=pp_url&entry.2039261618=${encodeURIComponent(timeElapsed)}`;
        }
        return "https://forms.gle/Y5wC6J4tHr4Cm8kf8";
      
      case 'abortive':
        if (timeElapsed) {
          return `https://docs.google.com/forms/d/e/1FAIpQLScNwQjuhxzLPUm0yIIb3JbUW1QxeY3EeQmSV5U_GVIwcwNH4A/viewform?usp=pp_url&entry.964646701=${encodeURIComponent(timeElapsed)}`;
        }
        return "https://forms.gle/mDRBTcLHL8LzfD2Z8";
      
      default:
        return "";
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'start':
        return "Register for LE' Red Mask";
      case 'winner':
        return "Victory Form - Operation Completed!";
      case 'abortive':
        return "Mission Failed - Time Expired";
      default:
        return "Form";
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'start':
        return "Fill out this form to register for the LE' Red Mask challenge.";
      case 'winner':
        return `Congratulations! You completed the operation in ${timeElapsed}. Fill out the victory form.`;
      case 'abortive':
        return `Time ran out after ${timeElapsed}. Fill out the form to record your attempt.`;
      default:
        return "";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="terminal space-y-4 mb-6">
        <h3 className="text-xl font-semibold text-primary text-center">
          {getFormTitle()}
        </h3>
        <p className="text-muted-foreground text-center">
          {getFormDescription()}
        </p>
      </div>
      
      <div className="w-full h-[600px] border border-primary/30 rounded-lg overflow-hidden">
        <iframe
          src={getFormUrl()}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title={getFormTitle()}
          className="w-full h-full"
        >
          Loading form...
        </iframe>
      </div>
    </div>
  );
};

export default GameForms;