// components/CircleMovement.tsx
'use client';
import { useEffect } from 'react';

export default function CircleMovement() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.section-hero');
    if (!hero) return;

    const circles = [
      { x: 30, y: 70, targetX: 30, targetY: 70, speed: 0.01 + Math.random() * 0.005 },
      { x: 70, y: 30, targetX: 70, targetY: 30, speed: 0.01 + Math.random() * 0.005 },
    ];

    function setNewTarget(circle: typeof circles[0]) {
      circle.targetX = 10 + Math.random() * 80;
      circle.targetY = 10 + Math.random() * 80;
    }

    function animateCircles() {
      circles.forEach(circle => {
        circle.x += (circle.targetX - circle.x) * circle.speed;
        circle.y += (circle.targetY - circle.y) * circle.speed;

        if (Math.abs(circle.x - circle.targetX) < 0.5 && Math.abs(circle.y - circle.targetY) < 0.5) {
          setNewTarget(circle);
        }
      });

      hero.style.setProperty('--circle1-pos', `${circles[0].x}% ${circles[0].y}%`);
      hero.style.setProperty('--circle2-pos', `${circles[1].x}% ${circles[1].y}%`);

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return null; 
}