import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Features } from '@/components/Features';
// import { JoinRevolution } from '@/components/JoinRevolution';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Features />
      {/* <JoinRevolution /> */}
      <Newsletter />
      <Footer />
      <CartDrawer />
    </main>
  );
};

export default Index;
