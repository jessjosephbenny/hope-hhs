import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Users, Home } from "lucide-react";
import Link from "next/link";

const HomeHealthAides = () => {
  const services = [
    "Personal care assistance",
    "Medication reminders",
    "Light housekeeping",
    "Meal preparation",
    "Transportation assistance",
    "Companionship and social interaction",
    "Safety monitoring",
    "Activity assistance",
  ];

  const careAreas = [
    "Bathing and personal hygiene",
    "Dressing and grooming",
    "Mobility assistance",
    "Grocery shopping",
    "Laundry and light cleaning",
    "Appointment scheduling",
    "Emergency response",
    "Family communication",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Home Health Aides
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compassionate personal care assistance with daily activities and
                companionship. Our certified home health aides provide the
                support you need to live safely and comfortably at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
                >
                  <Link href="/contact">Request Home Health Aide</Link>
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
                src="/services/home-aides-2.png"
                alt="Home health aide providing care"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services and Care Areas */}
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
                Areas of Care
              </h2>
              <div className="space-y-4">
                {careAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-[theme(hope-indigo-600)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Care Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in providing compassionate, dignified care that
              respects your independence and personal preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  Treating each client with kindness, respect, and dignity in
                  every interaction.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[theme(hope-indigo-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Personalized Support
                </h3>
                <p className="text-gray-600">
                  Customized care plans that adapt to your unique needs and
                  preferences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Home className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Home-Centered
                </h3>
                <p className="text-gray-600">
                  Supporting your independence and comfort in your own familiar
                  environment.
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
            &quot;Our home health aide has been a blessing. She&apos;s not just
            helpful with daily tasks, but has become a trusted companion who
            brightens our days.&quot;
          </blockquote>
          <cite className="text-gray-500">— Robert K., Palatine</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready for Compassionate Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us match you with a dedicated home health aide who can provide
            the support you need.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Find Your Care Team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomeHealthAides;
