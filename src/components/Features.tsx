import { motion } from 'framer-motion';
import { Leaf, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Natural Ayurvedic',
    description: 'Formulated with traditional herbs following AYUSH guidelines',
  },
  {
    icon: Clock,
    title: 'Fast Healing',
    description: 'Visible results within days, not weeks',
  },
  {
    icon: Award,
    title: 'Clinically Tested',
    description: '30,000+ successful cases and counting',
  },
];

export function Features() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] text-primary font-semibold mb-2">WHY BURNICOL?</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">The Natural Choice for Burn Care</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card shadow-card border border-border/50 hover:shadow-soft transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
