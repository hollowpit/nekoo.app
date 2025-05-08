
'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create gradient spots
    const spots = [];
    const createSpots = () => {
      // More spots for a denser effect
      const numberOfSpots = 15;
      spots.length = 0;
      
      // Colors from the image - more vibrant and saturated
      const colors = [
        'rgba(0, 255, 80, 0.7)',   // Bright Green
        'rgba(0, 150, 255, 0.7)',  // Bright Blue
        'rgba(255, 0, 150, 0.7)',  // Magenta
        'rgba(170, 0, 255, 0.7)',  // Purple
        'rgba(255, 50, 100, 0.7)', // Pink/Red
        'rgba(0, 200, 180, 0.7)',  // Teal
        'rgba(120, 255, 0, 0.7)',  // Lime
      ];
      
      for (let i = 0; i < numberOfSpots; i++) {
        spots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Much larger radius to match the image
          radius: Math.random() * 400 + 350,
          color: colors[Math.floor(Math.random() * colors.length)],
          // Slower movement for larger blobs
          vx: (Math.random() * 0.4 - 0.2),
          vy: (Math.random() * 0.4 - 0.2),
        });
      }
    };
    
    // Draw the gradient background
    const drawBackground = () => {
      // Start with a semi-transparent white background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Use screen blend mode for more vibrant overlaps
      ctx.globalCompositeOperation = 'screen';
      
      // Create gradient with multiple color spots
      for (const spot of spots) {
        const gradient = ctx.createRadialGradient(
          spot.x, spot.y, 0,
          spot.x, spot.y, spot.radius
        );
        
        // More gradual fade for a softer look
        gradient.addColorStop(0, spot.color);
        gradient.addColorStop(0.6, spot.color.replace('0.7', '0.3'));
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move spots
        spot.x += spot.vx;
        spot.y += spot.vy;
        
        // Bounce off edges with padding
        const padding = spot.radius * 0.3;
        if (spot.x < -padding || spot.x > canvas.width + padding) {
          spot.vx = -spot.vx;
        }
        if (spot.y < -padding || spot.y > canvas.height + padding) {
          spot.vy = -spot.vy;
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawBackground();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    createSpots();
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10" 
      style={{ background: 'white' }}
    />
  );
}
