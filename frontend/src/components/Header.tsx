import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const servicesDropdown = [
  { label: "Ready Meals", path: "/services#ready-meals" },
  { label: "Snacks & Sweets", path: "/services#snacks-sweets" },
  { label: "Vegetarian Specialties", path: "/services#vegetarian" },
  { label: "Event Catering", path: "/services#event-catering" },
  { label: "Custom & Bulk Orders", path: "/services#custom-bulk" },
];

const serveDropdown = [
  { label: "Families", path: "/who-we-serve#families" },
  { label: "Events & Community", path: "/who-we-serve#events" },
  { label: "Corporate Clients", path: "/who-we-serve#corporate" },
  { label: "Busy Professionals", path: "/who-we-serve#professionals" },
  { label: "Vegetarian Customers", path: "/who-we-serve#vegetarian" },
  { label: "Retail & Distribution (Future)", path: "/who-we-serve#retail" },
  { label: "Government Organisations", path: "/who-we-serve#government" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serveOpen, setServeOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gray-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 xl:px-6 2xl:px-8">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center relative z-10 translate-y-2">
          <img
            src="/images/ABHYY'S FOOD.png"
            alt="ABHYY'S FOOD LTD"
            className="h-16 w-16 object-contain scale-[2.5]"
          />
        </Link>

        {/* Desktop Nav - Center */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isActive("/services") ? "text-primary" : "text-foreground"}`}
            >
              Our Services{" "}
              <FiChevronDown
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-lg py-2"
                >
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border mt-1 pt-2"
                  >
                    View All Services →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Who We Serve Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServeOpen(true)}
            onMouseLeave={() => setServeOpen(false)}
          >
            <Link
              to="/who-we-serve"
              className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isActive("/who-we-serve") ? "text-primary" : "text-foreground"}`}
            >
              Who We Serve{" "}
              <FiChevronDown
                className={`transition-transform ${serveOpen ? "rotate-180" : ""}`}
              />
            </Link>
            <AnimatePresence>
              {serveOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg py-2"
                >
                  {serveDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setServeOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/food-safety"
            className={`font-medium transition-colors hover:text-primary ${isActive("/food-safety") ? "text-primary" : "text-foreground"}`}
          >
            Food Safety
          </Link>
        </nav>

        {/* Get a Quote Button - Right */}
        <Link
          to="/get-a-quote"
          className="hidden lg:block bg-primary text-primary-foreground px-4 xl:px-6 2xl:px-8 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity text-sm xl:text-base"
        >
          Get a Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-gray-50 border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 font-medium text-foreground"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="py-2 font-medium text-foreground"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="py-2 font-medium text-foreground"
              >
                Our Services
              </Link>
              <Link
                to="/who-we-serve"
                onClick={() => setMobileOpen(false)}
                className="py-2 font-medium text-foreground"
              >
                Who We Serve
              </Link>
              <Link
                to="/food-safety"
                onClick={() => setMobileOpen(false)}
                className="py-2 font-medium text-foreground"
              >
                Food Safety
              </Link>
              <Link
                to="/get-a-quote"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-medium text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
