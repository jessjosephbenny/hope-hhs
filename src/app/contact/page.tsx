import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Printer } from "lucide-react";
import { ContactForm } from "@/components/client-components/ContactForm";

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Hope Home Health
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose trust, choose quality, choose Hope Home Health Services
              Inc.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[theme(hope-green-100)] p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-[theme(hope-green-600)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Our Location
                        </h3>
                        <p className="text-gray-600">
                          121 S Wilke Rd #410
                          <br />
                          Arlington Heights, IL 60005
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[theme(hope-indigo-100)] p-3 rounded-full">
                        <Phone className="h-6 w-6 text-[theme(hope-indigo-600)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Phone
                        </h3>
                        <p className="text-gray-600 text-lg font-medium">
                          (630) 260-2550
                        </p>
                        <p className="text-gray-500 text-sm">
                          24/7 Nurses on call
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[theme(hope-green-100)] p-3 rounded-full">
                        <Printer className="h-6 w-6 text-[theme(hope-green-600)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          FAX
                        </h3>
                        <p className="text-gray-600 text-lg font-medium">
                          (630) 260-2551
                        </p>
                        <p className="text-gray-500 text-sm"></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[theme(hope-indigo-100)] p-3 rounded-full">
                        <Mail className="h-6 w-6 text-[theme(hope-indigo-600)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Email
                        </h3>
                        <p className="text-gray-600">contact@hope-hhs.com</p>
                        <p className="text-gray-500 text-sm">
                          We act fast — because your care cannot wait.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of Arlington Heights
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.845621142845!2d-88.00885!3d42.08333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faa2d15c7e7d1%3A0x123456789!2s121%20S%20Wilke%20Rd%2C%20Arlington%20Heights%2C%20IL%2060005!5e0!3m2!1sen!2sus!4v1629388885522!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hope Home Health Services Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
