import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Activity, Target } from "lucide-react";
import Link from "next/link";

const PhysicalTherapy = () => {
  const services = [
    "Post-surgical rehabilitation",
    "Injury recovery and pain management",
    "Balance and fall prevention training",
    "Strength and mobility improvement",
    "Gait training and walking assistance",
    "Joint mobility and flexibility exercises",
    "Pain management techniques",
    "Home safety assessments",
  ];

  const conditions = [
    "Stroke rehabilitation",
    "Hip and knee replacements",
    "Fractures and orthopedic injuries",
    "Arthritis management",
    "Chronic pain conditions",
    "Balance disorders",
    "Neurological conditions",
    "Post-hospital discharge",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                In-Home Physical Therapy
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Restore mobility, strength, and independence through
                personalized rehabilitation programs delivered in the comfort
                and convenience of your own home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
                >
                  <Link href="/contact">Request Physical Therapy</Link>
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
                src="/services/physical-therapy.png"
                alt="Physical therapy exercises at home"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services and Conditions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Therapy Services
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
                Conditions We Treat
              </h2>
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-[theme(hope-indigo-600)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{condition}</span>
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
              Our Physical Therapy Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive approach to help you achieve your
              rehabilitation goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-[theme(hope-green-100)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[theme(hope-green-600)]">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your condition, mobility, and
                  goals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-[theme(hope-indigo-100)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[theme(hope-indigo-600)]">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Plan Development
                </h3>
                <p className="text-gray-600">
                  Personalized treatment plan tailored to your specific needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-[theme(hope-green-100)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[theme(hope-green-600)]">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Treatment
                </h3>
                <p className="text-gray-600">
                  Progressive therapy sessions with ongoing progress monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/services/physical-therapy-2.png"
                alt="Recovery and rehabilitation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Home Physical Therapy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-green-100)] p-2 rounded-full flex-shrink-0">
                    <Activity className="h-5 w-5 text-[theme(hope-green-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Familiar Environment
                    </h3>
                    <p className="text-gray-600">
                      Practice movements and exercises in your actual living
                      space.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-indigo-100)] p-2 rounded-full flex-shrink-0">
                    <Target className="h-5 w-5 text-[theme(hope-indigo-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Personalized Attention
                    </h3>
                    <p className="text-gray-600">
                      One-on-one therapy sessions focused entirely on your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-green-100)] p-2 rounded-full flex-shrink-0">
                    <Check className="h-5 w-5 text-[theme(hope-green-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Convenience
                    </h3>
                    <p className="text-gray-600">
                      No need to travel to appointments - therapy comes to you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-indigo-100)] p-2 rounded-full flex-shrink-0">
                    <Activity className="h-5 w-5 text-[theme(hope-indigo-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Family Involvement
                    </h3>
                    <p className="text-gray-600">
                      Family members can learn exercises and techniques to
                      support your recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn how our physical therapy services can help
            you regain your strength and independence.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Schedule an Assessment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default PhysicalTherapy;
