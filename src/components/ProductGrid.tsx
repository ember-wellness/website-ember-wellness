import { motion } from 'framer-motion';
import { useState } from 'react';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category.toLowerCase() === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary font-semibold mb-2">OUR PRODUCTS</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">Shop Burnicol</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Natural, effective burn care solutions for your family
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full border ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-soft'
                  : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"   //exactly 2 columns on screen and grid will be centered.
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
