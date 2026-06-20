import { motion } from 'framer-motion';
import { Handshake, Store, Users, Briefcase, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'Collaborate with EMBER to expand our reach and bring natural healing solutions to more communities.',
    cta: 'Become a Partner',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfUr4jk0xm2sJkxXgl_N-Nl2kP6B2T--4VLHzK9Jd0IzBHC3w/viewform?usp=pp_url&entry.1057875750=Partnership',
  },
  {
    icon: Store,
    title: 'Become a Vendor',
    description:
      'Stock Burnicol in your pharmacy or retail store and offer trusted burn care to your customers.',
    cta: 'Apply as Vendor',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfUr4jk0xm2sJkxXgl_N-Nl2kP6B2T--4VLHzK9Jd0IzBHC3w/viewform?usp=pp_url&entry.1057875750=Vendor',
  },
  {
    icon: Users,
    title: 'Distributor',
    description:
      'Join our distribution network and help us reach every corner of India with quality healthcare.',
    cta: 'Distributorship',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfUr4jk0xm2sJkxXgl_N-Nl2kP6B2T--4VLHzK9Jd0IzBHC3w/viewform?usp=pp_url&entry.1057875750=Distributor',
  },
  {
    icon: Briefcase,
    title: 'Franchise',
    description:
      'Start your own EMBER franchise and be part of the Ayurvedic healthcare revolution.',
    cta: 'Franchise Inquiry',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfUr4jk0xm2sJkxXgl_N-Nl2kP6B2T--4VLHzK9Jd0IzBHC3w/viewform?usp=pp_url&entry.1057875750=Franchise',
  },
];

export function JoinRevolution() {
  return (
    <section className="py-20 bg-gradient-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            GROW WITH US
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Join the <span className="text-gradient-ember">Revolution</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Be part of India's growing Ayurvedic healthcare movement. Multiple ways to partner with EMBER.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={28} className="text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all"
              >
                {item.cta}
                <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Have questions? We'd love to hear from you.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUr4jk0xm2sJkxXgl_N-Nl2kP6B2T--4VLHzK9Jd0IzBHC3w/viewform?usp=pp_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-primary border border-primary/30 rounded-xl hover:bg-primary/5 transition"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
