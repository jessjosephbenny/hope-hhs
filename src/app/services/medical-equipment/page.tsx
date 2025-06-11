import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain } from "lucide-react";
import Link from "next/link";

const MedicalEquipment = () => {
  const services = [
    "Equipment assessment and selection",
    "Arrange Professional Delivery and setup",
    "Patient and family training",
    "Ongoing maintenance support",
    "Insurance coordination",
    "Arrangement of Replacement and upgrades",
    "24/7 emergency support",
  ];

  const equipment = [
    "Hospital beds and mattresses",
    "Wheelchairs and mobility aids",
    "Oxygen concentrators",
    "CPAP and BiPAP machines",
    "IV poles and pumps",
    "Lift chairs and patient lifts",
    "Bathroom safety equipment",
    "Monitoring devices",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Medical Equipment Support
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access and training on medical equipment needed for safe home
                care. Our specialists ensure you have the right equipment and
                know how to use it safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
                >
                  <Link href="/contact">Request Equipment Support</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[theme(hope-indigo-600)] text-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-50)]"
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/services/medical-equpment-2.png"
                alt="Medical equipment setup"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services and Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Support Services
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-[theme(hope-green-600)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Available Equipment
              </h2>
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-[theme(hope-indigo-600)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Equipment Support Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to ongoing support, we ensure you have the right
              equipment for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-[theme(hope-green-100)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[theme(hope-green-600)]">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  Evaluate your specific equipment needs and home environment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-[theme(hope-indigo-100)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[theme(hope-indigo-600)]">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Arrange Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  Arrange Professional delivery and setup of your medical
                  equipment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-[theme(hope-green-100)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[theme(hope-green-600)]">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Training
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive training on safe operation and maintenance.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-[theme(hope-indigo-100)] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[theme(hope-indigo-600)]">
                    4
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Arrange Ongoing maintenance and 24/7 emergency assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Medical Equipment Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn about our medical equipment services and
            how we can support your home care needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Get Equipment Support</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default MedicalEquipment;
