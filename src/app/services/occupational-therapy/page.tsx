import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Target, Brain } from "lucide-react";
import Link from "next/link";

const OccupationalTherapy = () => {
  const services = [
    "Daily living skills training",
    "Cognitive rehabilitation",
    "Fine motor skill development",
    "Home safety assessments",
    "Adaptive equipment training",
    "Energy conservation techniques",
    "Work simplification strategies",
    "Fall prevention education",
  ];

  const conditions = [
    "Stroke recovery",
    "Brain injury rehabilitation",
    "Arthritis management",
    "Hand and upper extremity injuries",
    "Visual impairments",
    "Cognitive disorders",
    "Chronic fatigue conditions",
    "Age-related functional decline",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                In-Home Occupational Therapy
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Improve your daily living skills and adapt your environment for
                maximum independence. Our certified occupational therapists help
                you regain the skills needed for everyday activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
                >
                  <Link href="/contact">Request Occupational Therapy</Link>
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
                src="/services/occupational-therapy.png"
                alt="Occupational therapy session"
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

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you regain independence in the activities that matter most
              to you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Daily Activities
                </h3>
                <p className="text-gray-600">
                  Bathing, dressing, cooking, and household management skills.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-[theme(hope-indigo-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cognitive Skills
                </h3>
                <p className="text-gray-600">
                  Memory, attention, problem-solving, and decision-making
                  abilities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Adaptive Solutions
                </h3>
                <p className="text-gray-600">
                  Equipment and environmental modifications for safer living.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Regain Your Independence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our occupational therapy team help you develop the skills you
            need for daily living.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Start Your Assessment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default OccupationalTherapy;
