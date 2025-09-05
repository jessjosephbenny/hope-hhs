"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { FacebookIcon } from "../ui/icons/facebook";
import { LinkedInIcon } from "../ui/icons/instagram";
import { useIsPhone } from "@/hooks/useIsPhone";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Career", path: "/career" },
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
  const isPhone = useIsPhone();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-[theme(hope-green.500)] to-[theme(hope-indigo.500)] text-white py-2 text-center">
        <p className="text-sm font-semibold">
          Illinois' Most Trusted Home Health – 20 Years of Excellence
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-12 lg:hidden">
          <a
            href="tel:(630) 260-2550"
            className="flex items-center space-x-2 bg-[theme(hope-green.50)] text-[theme(hope-green.700)] px-4 py-2 rounded-lg hover:bg-[theme(hope-green.100)] transition-colors border border-[theme(hope-green.200)]"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">(630) 260-2550</span>
          </a>
        </div>
        <div className="flex justify-between items-center h-24 md:h-40 px-4">
          <div className="lg:hidden" />
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/hope_new_logo.png"
              alt="logo"
              width={isPhone ? 90 : 150}
              height={isPhone ? 30 : 75}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-base font-medium transition-colors hover:text-[theme(hope-green.600)] ${
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
                className={`flex items-center space-x-1 text-base font-medium transition-colors hover:text-[theme(hope-green.600)] ${
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
                className={`text-base font-medium transition-colors hover:text-[theme(hope-green.600)] ${
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
          <div className="hidden xl:flex items-center space-x-2">
            <div className="md:flex items-center space-x-2">
              <Link
                className="bg-zinc-200 rounded p-1"
                href="https://www.facebook.com/profile.php?id=61576078887476&mibextid=wwXIfr&mibextid=wwXIfr"
              >
                <FacebookIcon className="h-8" />
              </Link>
              <Link
                className="bg-zinc-200 rounded p-1"
                href="https://www.linkedin.com/company/hope-home-health-services-inc./"
              >
                <LinkedInIcon className="h-8" />
              </Link>
            </div>
            <a
              href="tel:(630) 260-2550"
              className="flex items-center space-x-2 bg-[theme(hope-green.50)] text-[theme(hope-green.700)] px-4 py-2 rounded-lg hover:bg-[theme(hope-green.100)] transition-colors border border-[theme(hope-green.200)]"
            >
              <Phone className="h-8 w-8" />
              <span className="text-xl font-medium">(630) 260-2550</span>
            </a>
            {/* <Button
              asChild
              className="bg-[theme(hope-indigo.600)] text-white hover:bg-[theme(hope-indigo.700)"
            >
              <Link href="/contact">Get Started</Link>
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-10 w-10" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-0 z-50 overflow-y-auto bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="flex items-center justify-between mx-4 h-24 pt-4 md:pt-12 mb-4">
                <div />
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    src="/hope_new_logo.png"
                    alt="logo"
                    width={isPhone ? 90 : 180}
                    height={isPhone ? 30 : 60}
                  />
                </Link>
                {/* Mobile menu button */}
                <button
                  className="xl:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-10 w-10" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
              <a
                href="tel:(630) 260-2550"
                className="flex items-center space-x-2 bg-[theme(hope-green-50)] text-[theme(hope-green-700)] px-3 py-3 rounded-lg hover:bg-[theme(hope-green-100)] transition-colors border border-[theme(hope-green-200)] mb-3"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(630) 260-2550</span>
              </a>
              <div className="pt-0 md:pt-16 xl:pt-0">
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
                <div className="div flex justify-center mx-4 items-center">
                  <div className="xl:hidden flex justify-end items-center space-x-2 mb-4">
                    <Link
                      className="bg-zinc-200 rounded p-1"
                      href="https://www.facebook.com/profile.php?id=61576078887476&mibextid=wwXIfr&mibextid=wwXIfr"
                    >
                      <FacebookIcon className="h-8" />
                    </Link>
                    <Link
                      className="bg-zinc-200 rounded p-1"
                      href="https://www.linkedin.com/company/hope-home-health-services-inc./"
                    >
                      <LinkedInIcon className="h-8" />
                    </Link>
                  </div>
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
