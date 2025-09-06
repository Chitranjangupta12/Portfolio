import React from 'react';

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated background particles */}
      <div className="particle w-4 h-4 bg-primary top-1/4 left-1/4" style={{ background: 'hsl(var(--primary))' }} />
      <div className="particle w-6 h-6 bg-secondary top-3/4 left-3/4" style={{ background: 'hsl(var(--secondary))' }} />
      <div className="particle w-3 h-3 bg-accent top-1/2 left-1/3" style={{ background: 'hsl(var(--accent))' }} />
      <div className="particle w-5 h-5 bg-primary top-1/3 right-1/4" style={{ background: 'hsl(var(--primary-glow))' }} />
      <div className="particle w-4 h-4 bg-secondary bottom-1/4 left-1/2" style={{ background: 'hsl(var(--secondary-glow))' }} />
      <div className="particle w-2 h-2 bg-accent bottom-1/3 right-1/3" style={{ background: 'hsl(var(--accent))' }} />
    </div>
  );
};

export default BackgroundParticles;