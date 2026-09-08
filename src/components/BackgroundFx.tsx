import React, { useEffect, useRef } from 'react';

export const BackgroundFx: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle floating dust/particles
    const particleCount = Math.min(width < 768 ? 30 : 60, 80);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.3 ? '#94a3b8' : '#ff6b00',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deepest obsidian background gradient */}
      <div className="absolute inset-0 bg-[#05070a]" />

      {/* Cyber Grid Lines & Film Grain */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute inset-0 noise-overlay opacity-70 pointer-events-none" />

      {/* Top Right Orange Nebula Glow */}
      <div 
        className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #ff6b00 0%, #ff3b00 40%, transparent 70%)' }}
      />

      {/* Bottom Left Deep Amber Glow */}
      <div 
        className="absolute top-[45%] -left-[15%] w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #ff8533 0%, #b84500 45%, transparent 75%)' }}
      />

      {/* Center Subtle Radial Vignette */}
      <div 
        className="absolute bottom-0 right-[20%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #ff6b00 0%, transparent 70%)' }}
      />

      {/* Canvas for fine particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};
