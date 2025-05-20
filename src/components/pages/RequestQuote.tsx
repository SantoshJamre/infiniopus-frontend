import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const RequestQuote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get("service") || "service";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: `I'm interested in getting a quote for ${service}.`,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Quote request submitted:", { ...formData, service });
    
    // Show success message
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you soon with a customized quote.",
    });
    
    // Navigate back to the service page
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Request a Quote</h1>
        <p className="text-muted-foreground">
          Please fill out the form below and we'll get back to you with a customized quote for {service}.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Tell us about your project *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe your project requirements, timeline, and any specific needs you have..."
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Request Quote
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuote;