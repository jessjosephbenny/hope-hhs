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
      icon: (
        <Stethoscope className="h-8 w-8 text-[theme([theme(hope-green-600)])]" />
      ),
      summary:
        "Our experienced registered nurses provide expert medical care, including wound care, medication management, infusion therapy, and post-surgical care.",
      image: "/services/skilled-nursing.png",
    },
    {
      id: "physical-therapy",
      title: "Physical Therapy",
      icon: <Activity className="h-8 w-8 text-[theme(hope-indigo-600)]" />,
      summary:
        "Our licensed physical therapists develop personalized exercise programs and techniques to improve mobility, strength, and balance, ensuring optimal recovery.",
      image: "/services/physical-therapy.png",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy",
      icon: <Users className="h-8 w-8 text-[theme([theme(hope-green-600)])]" />,
      summary:
        "Our skilled occupational therapists help individuals regain independence in daily activities, such as dressing, bathing, and meal preparation.",
      image: "/services/occupational-therapy.png",
    },
    {
      id: "speech-therapy",
      title: "Speech Therapy",
      icon: <MessageCircle className="h-8 w-8 text-[theme(hope-indigo-600)]" />,
      summary:
        "Our certified speech-language pathologists assist with speech, language, and swallowing difficulties, enhancing communication and overall quality of life.",
      image: "/services/speech-therapy.png",
    },
    {
      id: "home-health-aides",
      title: "Home Health Aides",
      icon: <Heart className="h-8 w-8 text-[theme([theme(hope-green-600)])]" />,
      summary:
        "Our trained and compassionate caregivers provide assistance with personal care, hygiene, medication reminders, and light household chores.",
      image: "/services/home-aids.png",
    },
    {
      id: "medical-social-work",
      title: "Medical Social Work",
      icon: <UserCheck className="h-8 w-8 text-[theme(hope-indigo-600)]" />,
      summary:
        "Our compassionate social workers offer counseling, resource coordination, and emotional support to patients and their families, ensuring holistic well-being.",
      image: "/services/social-work.png",
    },
    {
      id: "medical-equipment",
      title: "Medical Equipment Support",
      icon: <Brain className="h-8 w-8 text-[theme([theme(hope-green-600)])]" />,
      summary:
        "Our priority is to provide assistance and to arrange for the rental or purchase of medical equipment such as walkers, wheelchairs, special beds, and any other devices needed.",
      image: "/services/equipment-support.png",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme([theme(hope-green-50)])] to-[theme(hope-indigo-50)] py-20">
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
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden py-0`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
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
                  <p className="text-gray-600 mb-6 leading-relaxed min-h-[104px]">
                    {service.summary}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[theme([theme(hope-green-600)])] text-[theme([theme(hope-green-600)])] hover:bg-[theme([theme(hope-green-50)])]"
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
      <section className="py-20 bg-gradient-to-br from-[theme([theme(hope-green-50)])] to-[theme(hope-indigo-50)]">
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
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
