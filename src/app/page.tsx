import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, MapPin, Phone, Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-[theme(hope-green-600)]" />,
      title: "Licensed & Certified",
      description:
        "Licensed by Illinois Department of Public Health and Medicare-certified by the U.S. Department of Health & Human Services",
    },
    {
      icon: <Heart className="h-8 w-8 text-[theme(hope-indigo-600)]" />,
      title: "Compassionate Care",
      description:
        "We deliver care with kindness and respect, inspiring hope and comfort in every home we serve.",
    },
    {
      icon: <Users className="h-8 w-8 text-[theme(hope-green-600)]" />,
      title: "Experienced Team",
      description:
        "Our skilled, licensed professionals are dedicated to exceptional care that restores hope and promotes independence.",
    },
  ];

  const services = [
    "Skilled Nursing Care",
    "Physical Therapy",
    "Occupational Therapy",
    "Speech Therapy",
    "Home Health Aides",
    "Medical Social Work",
    "Medical Equipment Support",
  ];
  return (
    <>
      <section className="relative bg-gradient-to-br from-[theme(hope-green-50)] via-white to-hope-indigo-50 py-20 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Restoring Health <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-indigo-600">
                  Reviving Hope
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional care, delivered with warmth and respect. We help
                patients heal, regain independence, and find hope—without
                leaving home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white px-8"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-hope-indigo-600 text-hope-indigo-600 hover:bg-hope-indigo-50 px-8"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/hero-image.png"
                  alt="Caring hands providing support"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[theme(hope-green-900)]/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-[theme(hope-green-200)] to-hope-indigo-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-hope-indigo-200 to-[theme(hope-green-200)] rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hope Home Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the value of healing at home—with care that puts you
              first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-hope-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From skilled nursing to rehabilitation therapy, we provide a
                full range of medical services designed to help you recover,
                maintain independence, and improve your quality of life.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-[theme(hope-green-600)] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="bg-hope-indigo-600 hover:bg-hope-indigo-700 text-white"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/home-services.png"
                alt="Medical equipment and caring environment"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn how we can help you or your loved one
            receive quality healthcare at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-[theme(hope-green-600)]" />
              <span className="text-lg font-semibold">(630) 260-2550</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-hope-indigo-600" />
              <span className="text-gray-600">
                121 S Wilke Rd #410, Arlington Heights, IL
              </span>
            </div>
          </div>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] px-8 text-white"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
