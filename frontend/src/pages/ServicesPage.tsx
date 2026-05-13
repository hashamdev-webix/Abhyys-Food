import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import SectionBlock from "@/components/SectionBlock";

const ServicesPage = () => {
  return (
    <>
      <HeroBanner image="/images/hero-services.jpg" title="Our Services" subtitle="Delivering authentic food solutions for everyday needs, special occasions, and modern lifestyles." />

      <SectionBlock id="ready-meals" image="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" title="Ready-to-Eat Meals"
        cta={<a href="tel:+14038363512" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">ORDER NOW</a>}>
        <p>Enjoy authentic home-cooked ethnic meals without the hassle. Our ready-to-eat dishes are made with fresh ingredients and traditional recipes, perfect for busy weekdays or relaxed weekends. Hygienically prepared, sealed, and delivered fresh to your door.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="snacks-sweets" image="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&h=600&fit=crop" title="Snacks & Sweets" reverse
          cta={<a href="tel:+14038363512" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">ORDER NOW</a>}>
          <p>From traditional sweets to crispy savoury snacks, our collection is crafted to celebrate every moment. Perfect for festivals, gatherings, or everyday cravings, each item is made with authentic ingredients and time-honoured recipes. We offer a wide variety of sweets and snacks that cater to diverse palates. Whether you need a box of mithai for a celebration or samosas for an office party, we deliver fresh, flavourful, and beautifully presented treats.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="vegetarian" image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop" title="Vegetarian Specialties"
        cta={<a href="tel:+14038363512" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">ORDER NOW</a>}>
        <p>Our vegetarian menu celebrates the richness and variety of plant-based ethnic cuisine. From hearty curries and dal dishes to fresh salads and paneer specialties, every meal is designed to deliver maximum flavour and nutrition. We understand the importance of vegetarian food in many cultures, and our dedicated vegetarian line ensures that every dish maintains the highest quality standards while honouring traditional recipes passed down through generations.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="event-catering" image="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop" title="Event Catering" reverse
          cta={<Link to="/get-a-quote" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">GET A QUOTE</Link>}>
          <p>Planning a wedding, corporate event, community gathering, or family celebration? Our professional catering services are designed to make your event memorable with authentic, high-quality food served with style and reliability. From menu planning to setup and serving, we handle every detail so you can focus on your guests. Our experienced team ensures timely delivery, hygienic preparation, and a presentation that matches the significance of your occasion.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="custom-bulk" image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop" title="Custom & Bulk Orders"
        cta={<Link to="/get-a-quote" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">GET A QUOTE</Link>}>
        <p>Need food in large quantities? Our custom and bulk ordering service is perfect for businesses, organizations, and events that require consistent quality at scale. We work with you to create tailored menus that meet your specific requirements. Whether it's daily office lunches, weekly meal plans, or one-time bulk orders for a special event, we offer flexible solutions with reliable delivery schedules and competitive pricing.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="festive-specials" image="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop" title="Festive Specials" reverse
          cta={<a href="tel:+14038363512" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">ORDER NOW</a>}>
          <p>Celebrate special occasions and festivals with our exclusive festive menu. From Diwali to Eid, Christmas to cultural celebrations, we create special dishes that honour tradition and bring joy to your festivities. Our festive specials are crafted with premium ingredients and traditional recipes, designed to make your celebrations memorable. Pre-order for holidays and special events to ensure availability and timely delivery.</p>
        </SectionBlock>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Looking to place an order or plan your next event?</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link to="/get-a-quote" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">GET A QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
