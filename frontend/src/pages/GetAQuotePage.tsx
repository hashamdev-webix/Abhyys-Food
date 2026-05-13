import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import HeroBanner from "@/components/HeroBanner";

const trustPoints = [
  "Customized solutions based on your needs",
  "Reliable service for events and daily orders",
  "Quick response from our team",
  "High-quality food with consistent standards",
];

const GetAQuotePage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <HeroBanner image="/images/hero-home.jpg" title="Get a Quote" subtitle="Tell us your requirements and we'll get back to you with a tailored quote." />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {submitted ? (
                <div className="bg-muted p-8 rounded-xl text-center">
                  <FiCheckCircle className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your request and will get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-primary font-semibold hover:underline">Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Full Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email Address</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Phone Number</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 403-836-3512" />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
                    SUBMIT
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Request a Quote?</h3>
                <div className="space-y-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-primary" size={20} />
                    <span className="text-foreground">+1 403-836-3512</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-primary" size={20} />
                    <span className="text-foreground">info@abhyysfoods.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-primary" size={20} />
                    <span className="text-foreground">8500 84 ST SE, Calgary, Alberta, Canada T3S 0A1</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14038363512" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity cursor-pointer">CALL NOW</a>
                <a href="mailto:info@abhyysfoods.com" className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity cursor-pointer">EMAIL US</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetAQuotePage;
