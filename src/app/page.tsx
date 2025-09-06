import ServiceAreaMap from "@/components/client-components/ServiceAreaMapWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Users,
  MapPin,
  Phone,
  Check,
  Stethoscope,
  ArrowRight,
  HomeIcon,
  Target,
  Quote,
  Star,
} from "lucide-react";
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

  const insuranceProviders = [
    {
      name: "Medicare",
      logo: "insurance/medicare.png",
      alt: "Medicare Insurance",
    },
    {
      name: "Blue Cross Blue Shield",
      logo: "insurance/bcbsil.svg",
      alt: "Blue Cross Blue Shield Insurance",
    },
    { name: "Aetna", logo: "insurance/Aetna.svg", alt: "Aetna Insurance" },
    {
      name: "United Healthcare",
      logo: "insurance/united.png",
      alt: "United Healthcare Insurance",
    },
    {
      name: "Devoted Health",
      logo: "insurance/devoted.png",
      alt: "Devoted Health Insurance",
    },
    {
      name: "Zing Health",
      logo: "insurance/zing.png",
      alt: "Zing Health Insurance",
    },
    {
      name: "Essence Healthcare",
      logo: "insurance/essence.webp",
      alt: "Essence Healthcare Insurance",
    },
  ];

  const testimonials = [
    {
      name: "Don Sniezek",
      location: "Arlington Heights",
      service: "Skilled Nursing",
      rating: 5,
      text: "The nurse from hope was kind, professional, and knowledgeable during all our sessions. It was a pleasure having our weekly meetings.",
    },
    {
      name: "Nancy Andretich",
      location: "Schaumburg",
      service: "Skilled Nursing, Physical Therapy",
      rating: 5,
      text: "Hope Home Health is an excellent service. Great nurses and PT services — highly recommend!",
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-[theme(hope-green-50)] via-white to-hope-indigo-50 py-8 lg:py-16">
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
                patients heal, regain independence, and find hope without
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
      {/* What is Home Health Care */}
      <section className="py-8 xl:py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What is Home Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Home health care brings professional medical services directly to
              your home, allowing you to recover and maintain your health in the
              comfort of familiar surroundings while receiving personalized,
              quality care from licensed healthcare professionals.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            <div className="text-center group flex-1 max-w-xs">
              <div className="bg-hope-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-hope-green-200 transition-colors duration-300">
                <Stethoscope className="h-8 w-8 text-[theme(hope-green-600)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Physician Prescribes Home Health Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your doctor determines that home health services would benefit
                your recovery and prescribes the appropriate care plan.
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-[theme(hope-indigo-400)]" />
            </div>

            <div className="text-center group flex-1 max-w-xs">
              <div className="bg-hope-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-hope-indigo-200 transition-colors duration-300">
                <HomeIcon className="h-8 w-8 text-[theme(hope-indigo-600)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Nurses and Therapists Come to Your Home
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our licensed healthcare professionals visit you at home,
                providing skilled nursing care and therapy services.
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-[theme(hope-indigo-400)]" />
            </div>

            <div className="text-center group flex-1 max-w-xs">
              <div className="bg-hope-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-hope-green-200 transition-colors duration-300">
                <Target className="h-8 w-8 text-[theme(hope-green-600)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Care Plans Help You Meet Goals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We develop personalized care plans tailored to your specific
                needs and health goals for optimal recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-8 xl:py-20 bg-white">
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
      <section className="py-8 lg:py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
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

      {/* Insurance Providers */}
      <section className="py-8 lg:py-20 bg-hope-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Insurance We Accept
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with most major insurance providers to make quality
              healthcare accessible and affordable for you and your family.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-center h-20">
                  <img
                    src={provider.logo}
                    alt={provider.alt}
                    className="max-h-full max-w-full object-contain group-hover:grayscale transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                  {provider.name}
                </p>
              </div>
            ))}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-center h-full">
                <div className="max-h-full max-w-full group-hover:grayscale transition-all duration-300 text-xl hover:text-3xl font-extrabold">
                  All PPO Plans
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Don&apos;t see your insurance provider? Contact us to verify
              coverage.
            </p>
            <Button
              asChild
              className="bg-hope-indigo-600 hover:bg-hope-indigo-700 text-white"
            >
              <Link href="/contact">Verify Your Insurance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Families Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Hear from the families
              we&apos;ve served.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((t, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-hope-green-600 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    {t.text}
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.location}</div>
                    <div className="text-sm text-hope-indigo-600 font-medium mt-1">
                      {t.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/testimonials">
              <Button
                size="lg"
                className="bg-hope-green-600 hover:bg-hope-green-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read More Testimonials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Counties We Serve */}
      <section className="pt-20 bg-hope-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Counties We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing quality home healthcare to communities across the Chicago
              area including Cook, DuPage, Kane, Will, Lake, Kendall, and
              McHenry counties.
            </p>
          </div>
          <ServiceAreaMap />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pt-10 pb-20 bg-hope-green-50 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2> */}
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
