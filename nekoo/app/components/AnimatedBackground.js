
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
      const numberOfSpots = 10;
      spots.length = 0;
      
      // Colors from the image (pastel and vibrant colors with white theme)
      const colors = [
        '#FF61D8', // Pink
        '#5D85FF', // Blue
        '#00C2FF', // Cyan
        '#00FFB3', // Mint
        '#FFDD00', // Yellow
        '#FF6B00', // Orange
        '#FF3373', // Red
        '#9D6FFF'  // Purple
      ];
      
      for (let i = 0; i < numberOfSpots; i++) {
        spots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 300 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() * 0.8 - 0.4) * 1.5, // 1.5x faster
          vy: (Math.random() * 0.8 - 0.4) * 1.5, // 1.5x faster
        });
      }
    };
    
    // Use predefined colors
    function getRandomColor() {
      const colors = [
        '#FF61D8', // Pink
        '#5D85FF', // Blue
        '#00C2FF', // Cyan
        '#00FFB3', // Mint
        '#FFDD00', // Yellow
        '#FF6B00', // Orange
        '#FF3373', // Red
        '#9D6FFF'  // Purple
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Draw the gradient background
    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient with multiple color spots
      for (const spot of spots) {
        const gradient = ctx.createRadialGradient(
          spot.x, spot.y, 0,
          spot.x, spot.y, spot.radius
        );
        
        gradient.addColorStop(0, spot.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move spots
        spot.x += spot.vx;
        spot.y += spot.vy;
        
        // Bounce off edges
        if (spot.x < -spot.radius || spot.x > canvas.width + spot.radius) {
          spot.vx = -spot.vx;
        }
        if (spot.y < -spot.radius || spot.y > canvas.height + spot.radius) {
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
    />
  );
}
