
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fashion-charcoal text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">PORTFOLIO</h3>
            <p className="text-gray-300 max-w-xs">
              Bridging the worlds of fashion modeling and data analysis with creativity and precision.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/fashion" className="text-gray-300 hover:text-white transition-colors">Fashion</Link>
              <Link to="/data" className="text-gray-300 hover:text-white transition-colors">Data</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="mt-4 text-gray-300">
              Email: contact@example.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
