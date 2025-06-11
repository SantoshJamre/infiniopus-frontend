import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, CheckCircle, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import emailService, { EmailData } from "@/services/emailService";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Prepare email data
      const emailData: EmailData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      // Choose one of the email service methods based on your preference
      // Option 1: Using EmailJS
      const result = await emailService.APICall(emailData, '/contact', 'POST');
      
      // Option 2: Using your backend API
      // const result = await emailService.sendEmailWithBackend(emailData);
      
      // Option 3: Using Formspree
      // const result = await emailService.sendEmailWithFormspree(emailData);

      if (result.success) {
        console.log("Email sent successfully:", result.data);
        setFormStatus("success");
        setShowPopup(true);
        reset();
      } else {
        console.error("Failed to send email:", result.error);
        setFormStatus("error");
        setShowPopup(true);
      }

      // Reset success/error message after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setShowPopup(true);

      // Reset error message after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
        setFormStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-background relative">
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {formStatus === "success" ? "Success!" : "Error"}
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-6">
              {formStatus === "success" ? (
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Thank you for your message! We've received your inquiry and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    There was a problem sending your message. Please try again later or contact us directly.
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button onClick={() => setShowPopup(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What is this regarding?"
                {...register("subject")}
                className={errors.subject ? "border-red-500" : ""}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                {...register("message")}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactForm;
