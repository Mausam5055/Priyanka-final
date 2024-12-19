import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { AnimatedProfile } from './AnimatedProfile';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedProfile />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan">
            Hello, I'm Priyanka
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            BioTechnology Student & Creative Problem Solver
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <Button size="lg">View My Work</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};