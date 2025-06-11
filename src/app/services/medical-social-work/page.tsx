import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, UserCheck, FileText, Users } from "lucide-react";
import Link from "next/link";

const MedicalSocialWork = () => {
  const services = [
    "Healthcare system navigation",
    "Insurance and benefits coordination",
    "Community resource connections",
    "Discharge planning support",
    "Crisis intervention",
    "Family counseling and support",
    "Advance directive planning",
    "Psychosocial assessments",
  ];

  const supportAreas = [
    "Financial assistance programs",
    "Transportation resources",
    "Support group connections",
    "Caregiver education",
    "Mental health referrals",
    "Legal aid resources",
    "Housing assistance",
    "Prescription assistance programs",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Medical Social Work
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Navigate healthcare systems and access community resources with
                expert guidance. Our licensed medical social workers help you
                and your family manage the complexities of healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
                >
                  <Link href="/contact">Request Social Work Support</Link>
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
                src="/services/social-work-2.png"
                alt="Medical social work consultation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services and Support Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Services
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
                Support Areas
              </h2>
              <div className="space-y-4">
                {supportAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <UserCheck className="h-5 w-5 text-[theme(hope-indigo-600)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Support You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical social workers bridge the gap between healthcare and
              social services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your social, emotional, and
                  environmental needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[theme(hope-indigo-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Coordination
                </h3>
                <p className="text-gray-600">
                  Connect you with appropriate resources and services in your
                  community.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <UserCheck className="h-12 w-12 text-[theme(hope-green-600)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Advocacy
                </h3>
                <p className="text-gray-600">
                  Support and advocate for your needs within the healthcare
                  system.
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
                src="/services/social-work-3.png"
                alt="Social work support"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Medical Social Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-green-100)] p-2 rounded-full flex-shrink-0">
                    <Check className="h-5 w-5 text-[theme(hope-green-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Reduced Stress
                    </h3>
                    <p className="text-gray-600">
                      Navigate complex systems with expert guidance and support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-indigo-100)] p-2 rounded-full flex-shrink-0">
                    <UserCheck className="h-5 w-5 text-[theme(hope-indigo-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Better Outcomes
                    </h3>
                    <p className="text-gray-600">
                      Access resources that improve your health and quality of
                      life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-green-100)] p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-[theme(hope-green-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Family Support
                    </h3>
                    <p className="text-gray-600">
                      Counseling and education for family members and
                      caregivers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[theme(hope-indigo-100)] p-2 rounded-full flex-shrink-0">
                    <FileText className="h-5 w-5 text-[theme(hope-indigo-600)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Advocacy
                    </h3>
                    <p className="text-gray-600">
                      Professional representation of your interests and needs.
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
            Need Help Navigating Healthcare?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our medical social workers are here to help you access the resources
            and support you need.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[theme(hope-indigo-600)] hover:bg-[theme(hope-indigo-700)] text-white"
          >
            <Link href="/contact">Connect with a Social Worker</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default MedicalSocialWork;
