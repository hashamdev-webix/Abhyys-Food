import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import SectionBlock from "@/components/SectionBlock";

const WhoWeServePage = () => {
  const orderBtn = <a href="tel:+14038363512" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">ORDER NOW</a>;

  return (
    <>
      <HeroBanner image="/images/hero-serve.jpg" title="Who We Serve" subtitle="Serving diverse customer groups with reliable, authentic, and convenient food solutions tailored to their needs." />

      <SectionBlock id="families" image="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop" title="Families & Households" cta={orderBtn}>
        <p>We understand the demands of feeding a family. That's why our ready meals and meal plans are designed to bring authentic home-style flavour to your table without the hassle of cooking from scratch every day. From weeknight dinners to weekend specials, our meals are made with fresh ingredients, traditional recipes, and a commitment to quality that families can trust. Enjoy the taste of home-cooked food with the convenience of modern service.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="events" image="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop" title="Event & Community Buyers" reverse cta={orderBtn}>
          <p>Whether it's a wedding, birthday celebration, community gathering, or cultural event, we provide catering services that bring people together over great food. Our team works closely with event organizers to create customized menus. From intimate gatherings to large-scale events, we deliver professionally prepared food with reliable service, ensuring every guest enjoys an authentic and memorable dining experience.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="corporate" image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop" title="Corporate & Office Clients" cta={orderBtn}>
        <p>Keep your team energized and satisfied with our corporate catering and meal delivery services. We offer flexible plans for daily office lunches, team meetings, client presentations, and corporate events. Our professional setup and consistent quality make us the ideal food partner for businesses that value reliability, hygiene, and authentic flavour in their workplace dining experience.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="professionals" image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop" title="Busy Professionals" reverse cta={orderBtn}>
          <p>Short on time but unwilling to compromise on taste? Our ready-to-eat meals are designed for busy professionals who want nutritious, flavourful food without the time commitment of cooking. Simply heat and enjoy a restaurant-quality meal at home or in the office. Our meals are portion-controlled, hygienically packed, and available for convenient pickup or delivery.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="vegetarian" image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop" title="Vegetarian Customers" cta={orderBtn}>
        <p>Our dedicated vegetarian menu offers a wide range of dishes crafted with the same care and authenticity as our full menu. From rich paneer curries to light vegetable dishes, every option is designed for maximum flavour. We respect dietary preferences and cultural requirements, ensuring that our vegetarian customers always have access to diverse, satisfying, and high-quality meal options.</p>
      </SectionBlock>

      <div className="bg-muted">
        <SectionBlock id="retail" image="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop" title="Retail & Distribution Partners (Future)" reverse cta={orderBtn}>
          <p>As part of our growth strategy, ABHYY'S FOOD is building a branded product line designed for retail shelves and distribution networks. Our packaged products will maintain the same quality standards as our fresh offerings. We're looking for retail partners who share our commitment to quality and authenticity. If you're interested in stocking our products, get in touch to discuss partnership opportunities.</p>
        </SectionBlock>
      </div>

      <SectionBlock id="government" image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop" title="Government Funded Organisations" cta={orderBtn}>
        <p>We work with government-funded organizations to provide reliable, high-quality food services for community programs, social initiatives, and institutional meal requirements across Calgary. Our ability to deliver consistent quality at scale, combined with strict hygiene and compliance standards, makes us a trusted partner for organizations that serve diverse communities with specific dietary and cultural needs.</p>
      </SectionBlock>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Looking to place an order or partner with us?</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link to="/get-a-quote" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">GET A QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeServePage;
