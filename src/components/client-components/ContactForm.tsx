"use client";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 focus-visible:ring-[theme(hope-green.500)] h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 focus-visible:ring-[theme(hope-green.500)] h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 focus-visible:ring-[theme(hope-green.500)] h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 focus-visible:ring-[theme(hope-green.500)] h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background"
              placeholder="Please tell us about your healthcare needs or any questions you have..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[theme(hope-green-600)] hover:bg-[theme(hope-green-700)] text-white"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
