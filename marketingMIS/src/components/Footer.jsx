// Footer.jsx
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    quickLinks: [
      { name: 'About Us', href: '#about' },
      { name: 'Admissions', href: '#admissions' },
      { name: 'Academics', href: '#academics' },
      { name: 'Sports', href: '#sports' },
      { name: 'Campus Life', href: '#campus' },
    ],
    academics: [
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Faculty', href: '#faculty' },
      { name: 'Library', href: '#library' },
      { name: 'Research', href: '#research' },
    ],
    facilities: [
      { name: 'Sports Complex', href: '#sports' },
      { name: 'Labs', href: '#labs' },
      { name: 'Transport', href: '#transport' },
      { name: 'Cafeteria', href: '#cafeteria' },
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-[#264653] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="space-y-4">
            <img 
              src="/api/placeholder/150/50" 
              alt="Mysore International School" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300">
              Providing world-class education and shaping future leaders through academic excellence,
              sports, and character development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-[#F4A261] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerSections.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4A261] flex-shrink-0" />
                <p className="text-gray-300">
                  123 Education Lane,<br />
                  Mysore, Karnataka 570001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F4A261]" />
                <p className="text-gray-300">+91 XXXXXXXXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F4A261]" />
                <p className="text-gray-300">info@mis.edu</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday:</p>
              <p className="font-semibold">8:00 AM - 4:00 PM</p>
              <p>Saturday:</p>
              <p className="font-semibold">8:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Mysore International School. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-300">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;