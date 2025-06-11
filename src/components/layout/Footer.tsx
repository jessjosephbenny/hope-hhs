import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-hope-green-50 to-hope-indigo-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-row space-x-4 mb-4 items-center">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img
                  src="/HOPE_Logo_Color.png"
                  alt="logo"
                  width={100}
                  height={50}
                />
              </Link>
              <img
                src="/idph.png"
                alt="logo"
                width={150}
                height={41}
                className="object-contain"
              />
              <img
                src="/medicare.png"
                alt="logo"
                width={70}
                height={50}
                className="object-contain"
              />
            </div>

            <p className="text-gray-600 mb-4 max-w-md">
              Restoring Health. Rekindling Hope. Providing compassionate,
              professional home healthcare services in Arlington Heights and
              surrounding communities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-hope-green-600" />
                <span className="text-sm text-gray-600">
                  121 S Wilke Rd #410, Arlington Heights, IL 60005
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-hope-green-600" />
                <span className="text-sm text-gray-600">(847) 555-HOPE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/skilled-nursing"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Skilled Nursing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/physical-therapy"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Physical Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/occupational-therapy"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/speech-therapy"
                  className="text-sm text-gray-600 hover:text-hope-green-600 transition-colors"
                >
                  Speech Therapy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Hope Home Health Services. All rights reserved. Licensed Home
            Healthcare Provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
