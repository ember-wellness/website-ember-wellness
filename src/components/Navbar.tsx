import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/store/cartStore';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Order Now', href: '/order', isRoute: true },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl lg:text-3xl font-black tracking-tight text-gradient-ember">
              EMBER
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium tracking-wide text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              // href="tel:+918295749574"
              href = "tel:+918003660901"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              {/* <span>+91 82957 49574</span> */}
              <span>+91 80036 60901</span>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground"
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium"
                >
                  {itemCount}
                </motion.span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="tel:+918295749574"
                className="flex items-center gap-2 text-lg font-medium text-primary"
              >
                <Phone size={18} />
                +91 82957 49574
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
