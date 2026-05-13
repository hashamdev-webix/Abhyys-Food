import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-800">
      <div className="container mx-auto px-4 xl:px-6 2xl:px-8 py-10 xl:py-12 2xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 2xl:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <img src="/images/ABHYY'S FOOD.png" alt="ABHYY'S FOOD LTD" className="h-16 w-16 object-contain scale-[2.5]" />
            </div>
            <p className="text-xs xl:text-sm 2xl:text-base opacity-80">Authentic ethnic food with modern convenience. Serving Calgary's diverse community with quality and trust.</p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61570800392804" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary transition-colors"><FiFacebook size={20} /></a>
              <a href="https://www.instagram.com/abhyysfood/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary transition-colors"><FiInstagram size={20} /></a>
              <a href="https://www.instagram.com/abhyysfood/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary transition-colors"><FiTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base xl:text-lg 2xl:text-xl mb-3 xl:mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Home</Link>
              <Link to="/about" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">About</Link>
              <Link to="/services" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Services</Link>
              <Link to="/who-we-serve" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Who We Serve</Link>
              <Link to="/food-safety" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Food Safety</Link>
              <Link to="/get-a-quote" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Get a Quote</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base xl:text-lg 2xl:text-xl mb-3 xl:mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services#ready-meals" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Ready Meals</Link>
              <Link to="/services#snacks-sweets" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Snacks & Sweets</Link>
              <Link to="/services#event-catering" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Event Catering</Link>
              <Link to="/services#vegetarian" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Vegetarian Specialties</Link>
              <Link to="/services#custom-bulk" className="text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">Custom & Bulk Orders</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base xl:text-lg 2xl:text-xl mb-3 xl:mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+14038363512" className="flex items-center gap-2 text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">
                <FiPhone className="text-primary" /> <span>+1 403-836-3512</span>
              </a>
              <a href="mailto:info@abhyysfoods.com" className="flex items-center gap-2 text-xs xl:text-sm 2xl:text-base opacity-80 hover:text-primary hover:opacity-100 transition-colors">
                <FiMail className="text-primary" /> <span>info@abhyysfoods.com</span>
              </a>
              <div className="flex items-center gap-2 text-xs xl:text-sm 2xl:text-base opacity-80">
                <FiMapPin className="text-primary" /> <span>8500 84 ST SE, Calgary, Alberta, Canada T3S 0A1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 xl:mt-8 2xl:mt-10 pt-4 xl:pt-6 2xl:pt-8 text-center">
          <p className="text-xs xl:text-sm 2xl:text-base opacity-60">© {new Date().getFullYear()} ABHYY'S FOOD LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
