"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Users, Award, Upload } from "lucide-react";
import FileUpload from "@/components/client-components/FileUpload";

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    availability: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData for file upload
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        submitData.append(key, value);
      }
    });

    try {
      // Replace with your actual backend endpoint
      const response = await fetch("/api/career-applications", {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          availability: "",
          coverLetter: "",
          resume: null,
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {}
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (file: File | null) => {
    setFormData({
      ...formData,
      resume: file,
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Be part of a compassionate team dedicated to providing exceptional
              home healthcare services. Make a difference in patients' lives
              while building a rewarding career.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Hope Home Health?
            </h2>
            <p className="text-xl text-gray-600">
              Join a workplace that values your growth and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-[theme(hope-green-100)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-[theme(hope-green-600)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Meaningful Work
                </h3>
                <p className="text-gray-600">
                  Make a real difference in patients' lives by providing
                  compassionate care in the comfort of their homes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-[theme(hope-indigo-100)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-[theme(hope-indigo-600)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Supportive Team
                </h3>
                <p className="text-gray-600">
                  Work with experienced professionals who support your growth
                  and celebrate your successes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-[theme(hope-green-100)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-[theme(hope-green-600)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Career Growth
                </h3>
                <p className="text-gray-600">
                  Advance your career with ongoing training, professional
                  development, and leadership opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-[theme(hope-green-50)] to-[theme(hope-indigo-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apply Today
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey with us? Submit your application
              below.
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                Job Application Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Position Interest */}
                <div>
                  <Label htmlFor="position">Position of Interest *</Label>
                  <Input
                    id="position"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="e.g., Registered Nurse, Physical Therapist, Home Health Aide"
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <Label>Years of Experience *</Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(value) =>
                      setFormData({ ...formData, experience: value })
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0-1" id="exp1" />
                      <Label htmlFor="exp1">0-1 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-5" id="exp2" />
                      <Label htmlFor="exp2">2-5 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-10" id="exp3" />
                      <Label htmlFor="exp3">6-10 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10+" id="exp4" />
                      <Label htmlFor="exp4">10+ years</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Availability */}
                <div>
                  <Label>Availability *</Label>
                  <RadioGroup
                    value={formData.availability}
                    onValueChange={(value) =>
                      setFormData({ ...formData, availability: value })
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full-time" id="full" />
                      <Label htmlFor="full">Full-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="part-time" id="part" />
                      <Label htmlFor="part">Part-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="per-diem" id="perdiem" />
                      <Label htmlFor="perdiem">Per Diem</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="flexible" id="flex" />
                      <Label htmlFor="flex">Flexible</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Resume Upload */}
                <div>
                  <Label>Resume/CV *</Label>
                  <FileUpload
                    onFileChange={handleFileChange}
                    acceptedTypes=".pdf,.doc,.docx"
                    maxSize={10}
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1"
                    placeholder="Tell us why you're interested in working with Hope Home Health and what you can bring to our team..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-lg py-3"
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.position ||
                    !formData.experience ||
                    !formData.availability ||
                    !formData.resume
                  }
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Career;
