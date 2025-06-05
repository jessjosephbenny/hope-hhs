import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-hope-green-600" />,
      title: "Licensed",
      description:
        "All our healthcare professionals are fully licensed and meet the highest industry standards.",
    },
    {
      icon: <Users className="h-8 w-8 text-hope-indigo-600" />,
      title: "Experienced",
      description:
        "Our team brings years of experience in home healthcare and medical services.",
    },
    {
      icon: <Shield className="h-8 w-8 text-hope-green-600" />,
      title: "Trusted",
      description:
        "Families throughout Arlington Heights trust us with their most important healthcare needs.",
    },
    {
      icon: <Award className="h-8 w-8 text-hope-indigo-600" />,
      title: "Local",
      description:
        "Proudly serving the Arlington Heights community with personalized, local care.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hope-green-50 to-hope-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Hope Home Health Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are committed to restoring independence and delivering
              professional, compassionate care to clients in the comfort of
              their own homes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hope Home Health Services is dedicated to providing exceptional,
                personalized healthcare services in the comfort and familiarity
                of your own home. We believe that healing happens best when
                patients are surrounded by the people and places they love.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of licensed healthcare professionals works closely with
                patients, families, and physicians to develop comprehensive care
                plans that promote recovery, maintain independence, and improve
                quality of life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every member of our team shares a common commitment: to treat
                each patient with the same dignity, respect, and compassion we
                would want for our own family members.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
                alt="Supportive healthcare environment"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hope-green-900/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-hope-green-50 to-hope-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every interaction we
              have with our patients and families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Professional medical care"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Families Choose Hope
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-hope-green-100 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5 text-hope-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Personalized Care Plans
                    </h3>
                    <p className="text-gray-600">
                      Every patient receives a customized care plan designed
                      specifically for their unique needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-hope-indigo-100 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-hope-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-600">
                      Our team is available around the clock to address concerns
                      and provide peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-hope-green-100 p-2 rounded-full flex-shrink-0">
                    <Award className="h-5 w-5 text-hope-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      Regular quality assessments ensure the highest standards
                      of care are maintained.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-hope-indigo-100 p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-hope-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Family Involvement
                    </h3>
                    <p className="text-gray-600">
                      We believe families are an essential part of the care team
                      and encourage their active participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
