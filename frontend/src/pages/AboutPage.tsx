import { motion } from "framer-motion";
import { FiTarget, FiEye, FiCheckCircle } from "react-icons/fi";
import HeroBanner from "@/components/HeroBanner";

const objectives = [
  "Establish a strong local reputation in Calgary for quality and reliability",
  "Convert first-time buyers into repeat customers through consistent service",
  "Build efficient production and packaging systems for scalable growth",
  "Develop a commercially viable branded product line",
  "Create a foundation for future retail and distribution expansion",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } };

const AboutPage = () => {
  return (
    <>
      <HeroBanner image="/images/hero-about.jpg" title="About ABHYY'S FOOD" subtitle="Building a trusted ethnic food brand rooted in authentic flavour, operational consistency, and modern convenience." />

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              ABHYY'S FOOD is a Calgary-based ethnic food company bringing authentic flavours to your table with modern convenience. We specialize in ready-to-eat meals, snacks, sweets, and catering services—all crafted with traditional recipes and quality ingredients. Our mission is simple: deliver delicious, reliable food that fits your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          {/* Mission */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=600&fit=crop" alt="Our Mission" className="rounded-xl shadow-lg w-full h-96 object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-background p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiTarget className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">To deliver high-quality food products and services that combine authentic flavour with modern convenience, while maintaining consistency, reliability, and customer trust in every order.</p>
              </motion.div>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-background p-8 rounded-xl shadow-md order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <FiEye className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">To build ABHYY'S FOOD into a trusted and recognized ethnic food brand known for authentic taste, operational consistency, and scalable growth across retail, food service, and direct-to-consumer channels.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="order-1 lg:order-2">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop" alt="Our Vision" className="rounded-xl shadow-lg w-full h-96 object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop" alt="Our Objectives" className="rounded-xl shadow-lg w-full h-96 object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-background p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Objectives</h3>
                <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                  {objectives.map((obj) => (
                    <motion.li key={obj} variants={item} className="flex items-start gap-3">
                      <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground text-lg">{obj}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
