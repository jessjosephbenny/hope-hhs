import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Activity,
  Brain,
  MessageCircle,
  Users,
  UserCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: "skilled-nursing",
      title: "Skilled Nursing",
      icon: <Stethoscope className="h-8 w-8 text-hope-green-600" />,
      summary:
        "Professional nursing care including medication management, wound care, and health monitoring.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "physical-therapy",
      title: "Physical Therapy",
      icon: <Activity className="h-8 w-8 text-hope-indigo-600" />,
      summary:
        "Restore mobility, strength, and independence through personalized rehabilitation programs.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy",
      icon: <Users className="h-8 w-8 text-hope-green-600" />,
      summary:
        "Improve daily living skills and adapt your environment for maximum independence.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "speech-therapy",
      title: "Speech Therapy",
      icon: <MessageCircle className="h-8 w-8 text-hope-indigo-600" />,
      summary:
        "Communication and swallowing therapy to improve speech, language, and cognitive functions.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "home-health-aides",
      title: "Home Health Aides",
      icon: <Heart className="h-8 w-8 text-hope-green-600" />,
      summary:
        "Compassionate personal care assistance with daily activities and companionship.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "medical-social-work",
      title: "Medical Social Work",
      icon: <UserCheck className="h-8 w-8 text-hope-indigo-600" />,
      summary:
        "Support services to help navigate healthcare systems and community resources.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "medical-equipment",
      title: "Medical Equipment Support",
      icon: <Brain className="h-8 w-8 text-hope-green-600" />,
      summary:
        "Provision and training on medical equipment needed for safe home care.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hope-green-50 to-hope-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Healthcare Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive home healthcare services designed to help you
              recover, maintain independence, and improve your quality of life
              in the comfort of your own home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.summary}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-hope-green-600 text-hope-green-600 hover:bg-hope-green-50"
                  >
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-hope-green-50 to-hope-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our healthcare professionals are here to help you determine which
            services are best for your specific needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-hope-indigo-600 hover:bg-hope-indigo-700"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
