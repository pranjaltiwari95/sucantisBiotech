import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E7C] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_3326eff8-0f26-49ae-b8c5-1fac339699ee/artifacts/vxx30itf_Screenshot%202026-01-03%20at%2012.59.53%E2%80%AFPM.png" 
              alt="Sucantis Biotech" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              WHO-GMP Certified Pharmaceutical Third-Party Manufacturing Partner
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formulations" className="text-gray-300 hover:text-[#3EAE5E] transition-colors text-sm">
                  Approved Formulations
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-[#3EAE5E] transition-colors text-sm">
                  Manufacturing Facilities
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-300 hover:text-[#3EAE5E] transition-colors text-sm">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#3EAE5E] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-[#3EAE5E]" />
                <p className="text-gray-300 text-sm">
                  Sucantis Biotech Pvt. Ltd.<br />
                  India
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-[#3EAE5E]" />
                <p className="text-gray-300 text-sm">+91 XXXX XXXXXX</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-[#3EAE5E]" />
                <p className="text-gray-300 text-sm">info@sucantisbiotech.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sucantis Biotech Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Product information is for business reference only and is not intended for promotional or therapeutic use.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
