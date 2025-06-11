import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Brain, Mic } from "lucide-react";
import Link from "next/link";

const SpeechTherapy = () => {
  const services = [
    "Speech articulation therapy",
    "Language comprehension training",
    "Swallowing safety assessments",
    "Voice therapy and vocal hygiene",
    "Cognitive communication skills",
    "Aphasia rehabilitation",
    "Dysarthria treatment",
    "Dysphagia management",
  ];

  const conditions = [
    "Stroke-related speech disorders",
    "Traumatic brain injury",
    "Parkinson's disease",
    "Dementia and cognitive decline",
    "Voice disorders",
    "Swallowing difficulties",
    "Laryngeal cancer recovery",
    "Progressive neurological conditions",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                In-Home Speech & Language Therapy
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Improve communication and swallowing function through
                specialized therapy. Our licensed speech-language pathologists
                help restore your ability to communicate effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
                >
                  <Link href="/contact">Request Speech Therapy</Link>
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
                src="/services/speech-therapy.png"
                alt="Speech therapy session"
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
                    <MessageCircle className="h-5 w-5 text-[theme(hope-indigo-600)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive speech and language services to restore
              communication and swallowing function.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Communication
                </h3>
                <p className="text-gray-600">
                  Speech clarity, language understanding, and expressive
                  communication skills.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-[theme(hope-indigo-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cognitive Function
                </h3>
                <p className="text-gray-600">
                  Memory, attention, and problem-solving skills for better
                  communication.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Mic className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Swallowing Safety
                </h3>
                <p className="text-gray-600">
                  Assessment and treatment of swallowing difficulties and
                  safety.
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
            Ready to Improve Communication?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn how speech therapy can help you
            communicate more effectively.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Schedule an Evaluation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SpeechTherapy;
