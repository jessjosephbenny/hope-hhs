"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { label: "All Services", path: "/services" },
    { label: "Skilled Nursing", path: "/services/skilled-nursing" },
    { label: "Physical Therapy", path: "/services/physical-therapy" },
    { label: "Occupational Therapy", path: "/services/occupational-therapy" },
    { label: "Speech Therapy", path: "/services/speech-therapy" },
    { label: "Home Health Aides", path: "/services/home-health-aides" },
    { label: "Medical Social Work", path: "/services/medical-social-work" },
    { label: "Medical Equipment Support", path: "/services/medical-equipment" },
  ];

  const isActive = (path: string) => pathname === path;
  const isServicesActive = () => pathname?.startsWith("/services");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/HOPE_Logo_Color.png"
              alt="logo"
              width={120}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-[theme(hope-green.600)] ${
                  isActive(item.path)
                    ? "text-[theme(hope-green.600)]"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[theme(hope-green.600)] ${
                  isServicesActive()
                    ? "text-[theme(hope-green.600)]"
                    : "text-gray-700"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className={`block px-4 py-3 text-sm transition-colors hover:bg-[theme(hope-green.50)] hover:text-[theme(hope-green.600)] ${
                        isActive(service.path)
                          ? "text-[theme(hope-green.600)] bg-[theme(hope-green.50)]"
                          : "text-gray-700"
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-[theme(hope-green.600)] ${
                  isActive(item.path)
                    ? "text-[theme(hope-green.600)]"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:(847) 394-5500"
              className="flex items-center space-x-2 bg-[theme(hope-green.50)] text-[theme(hope-green.700)] px-4 py-2 rounded-lg hover:bg-[theme(hope-green.100)] transition-colors border border-[theme(hope-green.200)]"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(630) 260-2550</span>
            </a>
            <Button
              asChild
              className="bg-[theme(hope-indigo.600)] text-white hover:bg-[theme(hope-indigo.700)"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="tel:(847) 394-5500"
                className="flex items-center space-x-2 bg-[theme(hope-green-50)] text-[theme(hope-green-700)] px-3 py-3 rounded-lg hover:bg-[theme(hope-green-100)] transition-colors border border-[theme(hope-green-200)] mb-3"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(847) 394-5500</span>
              </a>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[theme(hope-green-600)] ${
                    isActive(item.path)
                      ? "text-[theme(hope-green-600)]"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-900 mb-2">
                  Services
                </div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block px-3 py-2 text-sm transition-colors hover:text-[theme(hope-green-600)] ${
                      isActive(service.path)
                        ? "text-[theme(hope-green-600)]"
                        : "text-gray-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full  bg-hope-indigo-600 hover:bg-hope-indigo-700"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
