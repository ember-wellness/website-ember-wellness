import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Shield, Truck, Clock, CheckCircle2, Package } from 'lucide-react';
import burnicolProduct from '@/assets/burnicol-product.png';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const productDetails = {
  name: 'Burnicol Ointment',
  tagline: 'Natural Burn Healing Antiseptic',
  price: 180,
  weight: '200gm',
  description: 'AYUSH certified Ayurvedic formula for effective burn wound healing with zero side effects.',
  benefits: [
    'Fast-acting relief for burn wounds',
    'Prevents infection with antiseptic properties',
    'Promotes natural healing without scarring',
    'Safe for all ages with no side effects'
  ],
};

const deliveryFeatures = [
  { icon: Truck, label: 'Free Delivery', desc: 'On orders above ₹500' },
  { icon: Clock, label: 'Fast Shipping', desc: '3-5 business days' },
  { icon: Shield, label: 'Secure Payment', desc: '100% secure checkout' },
];

export default function Order() {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const subtotal = productDetails.price * quantity;
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Order Placed Successfully!",
      description: "We'll contact you shortly to confirm your order.",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-black mb-4">
              Order <span className="text-gradient-ember">Burnicol</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              India's trusted Ayurvedic solution for burn wound healing
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="relative bg-gradient-light rounded-3xl p-8 border border-border">
                <div className="absolute -top-3 left-6 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Flagship Product
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-ember opacity-20 blur-2xl rounded-full" />
                    <img
                      src={burnicolProduct}
                      alt="Burnicol Ointment"
                      className="relative w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="font-display text-2xl font-bold mb-1">{productDetails.name}</h2>
                    <p className="text-muted-foreground mb-3">{productDetails.tagline}</p>
                    <div className="flex items-baseline gap-2 justify-center md:justify-start">
                      <span className="font-display text-4xl font-black text-primary">₹{productDetails.price}</span>
                      <span className="text-muted-foreground">/ {productDetails.weight}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold mb-3">About the Product</h3>
                <p className="text-muted-foreground mb-4">{productDetails.description}</p>
                
                <h4 className="font-display text-sm font-semibold mb-2 text-primary">Key Benefits</h4>
                <ul className="space-y-2 mb-4">
                  {productDetails.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-display text-sm font-semibold mb-2 text-primary">Ingredients</h4>
                <p className="text-sm text-muted-foreground">{productDetails.ingredients}</p>
              </div>

              {/* Delivery Features */}
              <div className="grid grid-cols-3 gap-4">
                {deliveryFeatures.map((feature, i) => (
                  <div key={i} className="text-center p-4 bg-secondary/30 rounded-xl">
                    <feature.icon size={24} className="mx-auto text-primary mb-2" />
                    <p className="font-medium text-sm">{feature.label}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Order Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-card">
                <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <Package size={24} className="text-primary" />
                  Place Your Order
                </h3>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-2 block">Quantity</Label>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="font-display text-xl font-bold w-12 text-center">{quantity}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-display text-sm font-semibold text-muted-foreground">Contact Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-display text-sm font-semibold text-muted-foreground">Shipping Address</h4>
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House/Flat no., Street, Landmark"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="XXXXXX"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Order Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shipping === 0 ? 'text-primary font-medium' : ''}>
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-display font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{total}</span>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full shadow-glow">
                  Place Order - ₹{total}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Cash on Delivery available • 100% Secure
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </main>
  );
}
