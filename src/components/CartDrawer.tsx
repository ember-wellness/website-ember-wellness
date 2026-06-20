import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/store/cartStore';
import { Button } from '@/components/ui/button';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-display text-xl font-semibold">Your Cart</h2>
                <span className="text-sm text-muted-foreground">({items.length})</span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-1">Add Burnicol to start your healing journey</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-card flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">{item.name}</h3>
                      <div className="text-sm text-muted-foreground mt-1 space-y-0.5">
                        {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-border rounded-lg bg-card">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-secondary transition-colors rounded-l-lg"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-secondary transition-colors rounded-r-lg"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-primary">₹{item.price * item.quantity}</span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4 bg-secondary/30">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-display text-xl font-bold text-primary">₹{total.toFixed(0)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shipping calculated at checkout
                </p>
                <Button variant="hero" size="lg" className="w-full shadow-soft">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
