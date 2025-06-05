import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Margaret S.",
      location: "Arlington Heights",
      service: "Skilled Nursing",
      rating: 5,
      text: "The nurses from Hope Home Health were absolutely wonderful. They made my recovery after surgery so much easier and always explained everything clearly. I felt safe and well-cared for in my own home.",
    },
    {
      name: "Robert T.",
      location: "Mount Prospect",
      service: "Physical Therapy",
      rating: 5,
      text: "After my knee replacement, the physical therapist helped me regain my strength and mobility. The convenience of having therapy at home made such a difference in my recovery process.",
    },
    {
      name: "Linda M.",
      location: "Schaumburg",
      service: "Home Health Aide",
      rating: 5,
      text: "The aide who comes to help my mother is like family to us now. She's so patient and kind, and we have complete peace of mind knowing Mom is in such good hands.",
    },
    {
      name: "James K.",
      location: "Arlington Heights",
      service: "Speech Therapy",
      rating: 5,
      text: "Following my stroke, the speech therapist was incredibly patient and encouraging. I've made remarkable progress in my communication abilities thanks to their expertise.",
    },
    {
      name: "Patricia W.",
      location: "Des Plaines",
      service: "Occupational Therapy",
      rating: 5,
      text: "The occupational therapist helped me adapt my home and learn new ways to do daily tasks. I'm now living independently again, which means everything to me.",
    },
  ];

  const stats = [
    { number: "500+", label: "Families Served" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hope-green-50 to-hope-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Families Say
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from the families we've had
              the privilege to serve and learn about their experiences with Hope
              Home Health Services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-hope-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-hope-green-50 to-hope-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-hope-green-600 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-hope-indigo-600 font-medium mt-1">
                      {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Families Throughout Arlington Heights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and compassionate care has earned us
              the trust of hundreds of families in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-hope-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-hope-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                Every patient receives individualized attention and care plans
                tailored to their specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-hope-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-hope-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Regular quality assessments and patient feedback ensure
                consistently high standards of care.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-hope-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-hope-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Family-Centered
              </h3>
              <p className="text-gray-600">
                We believe families are essential partners in the care process
                and encourage active involvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
