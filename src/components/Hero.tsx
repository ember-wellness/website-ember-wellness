import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import burnicolProduct from '@/assets/burnicol-product.png';

const stats = [
  { value: '30,000+', label: 'Lives Helped' },
  { value: 'All Types', label: 'Burn Wounds' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-light">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Dashed line decorations */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1920 1080">
        <path
          d="M-50 100 Q 200 50, 300 200 T 500 300"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
        />
        <path
          d="M1920 800 Q 1700 900, 1600 750 T 1400 850"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
        />
      </svg>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
            >
              <Shield size={16} />
              AYUSH Formulated • Natural Healing
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-[0.2em] text-primary mb-2"
            >
              TEAM EMBER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-2 tracking-tight"
            >
              <span className="text-gradient-ember">EMBER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl font-display font-semibold text-foreground mb-6"
            >
              Roots to Revolution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 mb-8"
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-foreground">
                <span className="text-primary">30,000+</span> Lives Helped
              </p>
              <p className="text-xl md:text-2xl font-display font-medium text-muted-foreground">
                Effective for <span className="text-primary">All Types</span> of burn wounds
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button variant="hero" size="xl" className="shadow-glow" asChild>
                <Link to="/order">
                  <Heart size={20} />
                  Shop Burnicol - ₹180
                </Link>
              </Button>
              <Button variant="minimal" size="xl">
                <Sparkles size={20} />
                Learn More
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Ayurvedic Formula</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Clinically Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Fast Acting</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-ember opacity-20 blur-3xl rounded-full transform scale-75" />
              
              <img
                src={burnicolProduct}
                alt="Burnicol Ointment - Natural burn healing antiseptic by EMBER"
                className="relative w-full h-auto drop-shadow-2xl"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-card border border-border"
              >
                <p className="text-sm font-medium text-foreground">
                  100gm • Anti Burn • Antiseptic
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
