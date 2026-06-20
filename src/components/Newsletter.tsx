import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.2em] text-primary font-semibold mb-2">GET IN TOUCH</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Contact EMBER</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Have questions about Burnicol or need assistance with your order? 
              Our team is here to help you on your healing journey.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-medium">+91 80036 60901</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-medium">ember.labs.pilani@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl shadow-card border border-border/50"
          >
            <h3 className="font-display text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive health tips, product updates, and exclusive offers.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Your contact number"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              <textarea
                placeholder="Your address"
                rows={3}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              <Button variant="hero" size="lg" className="w-full shadow-soft">
                Subscribe
                <ArrowRight size={18} />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
