import { motion } from 'framer-motion';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 mt-20 border-t border-border/10"
    >
      <div className="container flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Priyanka Nath Mazumdar. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Designed & Built with ❤️ by Priyanka
        </p>
      </div>
    </motion.footer>
  );
};