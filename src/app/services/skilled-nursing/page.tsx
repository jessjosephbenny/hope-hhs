import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Shield } from "lucide-react";
import Link from "next/link";

const SkilledNursing = () => {
  const services = [
    "Medication administration and management",
    "Wound care and dressing changes",
    "Chronic disease management",
    "Post-surgical care and monitoring",
    "IV therapy and injections",
    "Catheter care and ostomy management",
    "Vital signs monitoring",
    "Health education and family training",
  ];

  const benefits = [
    "Faster recovery in familiar surroundings",
    "Reduced risk of hospital readmissions",
    "One-on-one personalized attention",
    "Cost-effective alternative to facility care",
    "Family involvement in care planning",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hope-green-50 to-hope-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                In-Home Skilled Nursing
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our licensed registered nurses provide comprehensive medical
                care in the comfort of your home, ensuring continuity of care
                and promoting faster recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-hope-green-600 hover:bg-hope-green-700"
                >
                  <Link href="/contact">Request Skilled Nursing</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-hope-indigo-600 text-hope-indigo-600 hover:bg-hope-indigo-50"
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                alt="Professional nursing care at home"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-hope-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Home Nursing
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-hope-indigo-100 p-2 rounded-full flex-shrink-0">
                      <Heart className="h-4 w-4 text-hope-indigo-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gradient-to-br from-hope-green-50 to-hope-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Qualified Nursing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our nurses are licensed, experienced professionals who are
              passionate about providing exceptional home healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-hope-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Licensed & Certified
                </h3>
                <p className="text-gray-600">
                  All RNs and LPNs hold current state licenses and required
                  certifications.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-hope-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  Trained in patient-centered care with focus on dignity and
                  respect.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Check className="h-12 w-12 text-hope-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Continuous Training
                </h3>
                <p className="text-gray-600">
                  Regular education updates on latest medical practices and
                  protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl italic text-gray-600 mb-6">
            "The skilled nursing care I received at home made all the difference
            in my recovery. The nurses were professional, caring, and helped me
            feel confident managing my health."
          </blockquote>
          <cite className="text-gray-500">— Sarah M., Arlington Heights</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-hope-green-50 to-hope-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to speak with our team about your skilled nursing
            needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-hope-indigo-600 hover:bg-hope-indigo-700"
          >
            <Link href="/contact">Speak with Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SkilledNursing;
