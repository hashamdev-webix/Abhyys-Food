import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiUsers,
  FiHome,
  FiBriefcase,
  FiStar,
  FiShield,
} from "react-icons/fi";
import {
  MdRestaurantMenu,
  MdCake,
  MdLocalDining,
  MdFastfood,
  MdEco,
  MdCelebration,
} from "react-icons/md";
import HeroBanner from "@/components/HeroBanner";

const serviceCards = [
  {
    icon: <MdRestaurantMenu size={32} />,
    title: "Ready Meals",
    desc: "Authentic ready-to-eat meals crafted with traditional recipes and fresh ingredients.",
    image: "/images/ready-meals.jpg",
  },
  {
    icon: <MdCake size={32} />,
    title: "Snacks & Sweets",
    desc: "Traditional sweets and savoury snacks perfect for festivals and celebrations.",
    image: "/images/snacks.jpg",
  },
  {
    icon: <MdLocalDining size={32} />,
    title: "Event Catering",
    desc: "Professional catering services for weddings, corporate events, and gatherings.",
    image: "/images/catering.jpg",
  },
  {
    icon: <MdFastfood size={32} />,
    title: "Custom Orders",
    desc: "Tailored bulk and custom orders for businesses and special requirements.",
    image: "/images/bulk-orders.jpg",
  },
  {
    icon: <MdEco size={32} />,
    title: "Vegetarian",
    desc: "Diverse vegetarian specialties with authentic flavour and quality ingredients.",
    image: "/images/vegetarian.jpg",
  },
  {
    icon: <MdCelebration size={32} />,
    title: "Festive Specials",
    desc: "Special festive menus for Diwali, Eid, Christmas, and cultural celebrations.",
    image: "/images/festive.jpg",
  },
];

const audiences = [
  {
    icon: <FiHome size={28} />,
    label: "Families",
    desc: "Home-style meals for busy households",
  },
  {
    icon: <FiUsers size={28} />,
    label: "Events & Community",
    desc: "Catering for celebrations",
  },
  {
    icon: <FiBriefcase size={28} />,
    label: "Corporate",
    desc: "Office meals & meetings",
  },
  {
    icon: <FiStar size={28} />,
    label: "Busy Professionals",
    desc: "Quick, quality meals",
  },
  {
    icon: <FiShield size={28} />,
    label: "Government Organisations",
    desc: "Institutional food services",
  },
];

const trustPoints = [
  {
    icon: <FiCheckCircle size={24} />,
    title: "Authentic Taste",
    desc: "Traditional recipes & flavours",
  },
  {
    icon: <FiCheckCircle size={24} />,
    title: "Consistent Quality",
    desc: "Every order, every time",
  },
  {
    icon: <FiCheckCircle size={24} />,
    title: "Hygienic Prep",
    desc: "Strict safety standards",
  },
  {
    icon: <FiCheckCircle size={24} />,
    title: "Reliable Service",
    desc: "On-time delivery guaranteed",
  },
  {
    icon: <FiCheckCircle size={24} />,
    title: "Professional Setup",
    desc: "Modern food operations",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        image="/images/hero-home.jpg"
        title="Authentic Taste. Modern Convenience."
        subtitle="Ready meals, catering & trusted food products for Calgary's diverse community."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+14038363512"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-block"
          >
            ORDER NOW
          </a>
          <Link
            to="/get-a-quote"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            GET A QUOTE
          </Link>
        </div>
      </HeroBanner>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="/images/food-prep.jpg"
              alt="Food Preparation"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ABHYY'S FOOD delivers authentic, culturally inspired meals
              designed for modern lifestyles. From everyday meals to special
              occasions, we combine traditional flavour with consistent quality
              and convenient ordering. Our commitment to hygiene, quality
              ingredients, and professional service makes us Calgary's trusted
              food partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-foreground text-center mb-12"
          >
            Our Services
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCards.map((card) => (
              <motion.div
                key={card.title}
                variants={item}
                className="bg-background rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="text-primary font-semibold text-lg hover:underline inline-flex items-center gap-2"
            >
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Who We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Delivering authentic food solutions to diverse communities across
              Calgary
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {audiences.map((a) => (
              <motion.div
                key={a.label}
                variants={item}
                className="flex flex-col items-center gap-4 p-8 bg-muted rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300 bg-background group-hover:bg-primary-foreground/20 p-4 rounded-full">
                  {a.icon}
                </div>
                <div className="text-center">
                  <span className="font-bold text-base block mb-2">
                    {a.label}
                  </span>
                  <span className="text-sm opacity-80">{a.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Five reasons why Calgary trusts ABHYY'S FOOD for authentic ethnic
              cuisine
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {trustPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={item}
                className="flex flex-col items-center text-center gap-3 bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary"
              >
                <div className="text-primary bg-primary/10 p-4 rounded-full">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
          >
            Planning an Event?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto"
          >
            Let us handle the food with reliable and professional catering
            services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/get-a-quote"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              GET A QUOTE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Food Safety Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-10 border border-primary/20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/3 flex justify-center">
                <div className="bg-primary/10 p-8 rounded-full">
                  <FiShield className="text-primary" size={80} />
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Food Safety & Compliance
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We follow strict hygiene, preparation, and food safety
                  standards to ensure every product meets quality and safety
                  expectations. From ingredient sourcing to final delivery, our
                  commitment to food safety guides every step of our operation.
                </p>
                <Link
                  to="/food-safety"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
                >
                  Learn More About Our Standards →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
