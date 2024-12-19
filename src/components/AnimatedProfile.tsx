import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AnimatedProfile = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerHeight / 2 - e.pageY) / 25;
      const y = (window.innerWidth / 2 - e.pageX) / 25;
      setRotate({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative w-64 h-64 mx-auto mb-8"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="w-full h-full rounded-full overflow-hidden border-4 border-neon-blue shadow-lg"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 75,
          damping: 15
        }}
      >
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan opacity-30 blur-md -z-10 animate-pulse" />
    </motion.div>
  );
};