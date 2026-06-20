import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';
import { Product, useCart } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    const defaultSize = product.sizes?.[0];
    const defaultColor = product.colors?.[0];
    addItem(product, defaultSize, defaultColor);
    toast.success(`${product.name} added to cart`);
    openCart();
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary mb-4 shadow-card">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider rounded-full">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-foreground text-background text-xs font-medium tracking-wider rounded-full">
              BESTSELLER
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium tracking-wider rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card/95 to-transparent"
        >
          <div className="flex gap-2">
            <Button
              variant="premium"
              size="sm"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={16} />
              Add to Cart
            </Button>
            <Button variant="minimal" size="icon" className="shrink-0">
              <Heart size={16} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="space-y-2 text-center">
        <p className="text-xs tracking-wider text-muted-foreground uppercase font-medium">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="text-foreground font-bold text-lg">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
