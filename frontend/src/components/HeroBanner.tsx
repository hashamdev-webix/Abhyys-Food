import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  overlay?: boolean;
}

const HeroBanner = ({ image, title, subtitle, children, overlay = true }: HeroBannerProps) => {
  return (
    <section className="relative min-h-[60vh] xl:min-h-[70vh] 2xl:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
        {overlay && <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/80" />}
      </div>
      <div className="relative z-10 container mx-auto px-4 xl:px-6 2xl:px-8 py-16 xl:py-20 2xl:py-24 text-center">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary-foreground mb-4 xl:mb-6 2xl:mb-8 leading-tight">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-primary-foreground/95 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-8 xl:mb-10 2xl:mb-12 leading-relaxed">
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
