import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, CheckCircle, AlertCircle, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailService, { EmailData } from "@/services/emailService";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  program: z.string().min(1, { message: "Please select a program" }),
  education: z.string().min(2, { message: "Please enter your education details" }),
  experience: z.string().optional(),
  message: z.string().min(10, { message: "Cover letter must be at least 10 characters" }),
  resume: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ApplicationFormProps {
  defaultProgram?: string;
  programType?: 'internship' | 'course';
}

const ApplicationForm = ({ defaultProgram, programType }: ApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [showPopup, setShowPopup] = useState(false);
  const [internships, setInternships] = useState<{id: number, title: string}[]>([]);
  const [courses, setCourses] = useState<{id: number, title: string}[]>([]);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch internships and courses data
    // This is a simplified version - in a real app, you might fetch from an API
    import("@/components/pages/InternshipCourses").then((module) => {
      setInternships(module.internships || []);
      setCourses(module.courses || []);
    }).catch(error => {
      console.error("Error loading programs:", error);
    });
    
    // Check for program in URL params
    const params = new URLSearchParams(location.search);
    const programParam = params.get('program');
    if (programParam && !defaultProgram) {
      setValue("program", programParam);
    }
  }, [location]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: defaultProgram || "",
      education: "",
      experience: "",
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
        subject: `Application for ${data.program}`,
        message: `
Program: ${data.program}
Phone: ${data.phone}
Education: ${data.education}
Experience: ${data.experience || 'N/A'}

Cover Letter:
${data.message}
        `,
      };

      // Send application email
      const result = await emailService.sendEmailWithEmailJS(emailData);
      
      if (result.success) {
        console.log("Application submitted successfully:", result.data);
        setFormStatus("success");
        setShowPopup(true);
        reset();
      } else {
        console.error("Failed to submit application:", result.error);
        setFormStatus("error");
        setShowPopup(true);
      }

      // Reset success/error message after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
        setFormStatus("idle");
        
        // Redirect to internship-courses page on success
        if (formStatus === "success") {
          navigate("/internship-courses");
        }
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
                {formStatus === "success" ? "Application Submitted!" : "Error"}
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-4">
              {formStatus === "success" ? (
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Thank you for your application! We've received your submission and will review it shortly. We'll contact you soon regarding the next steps.
                  </p>
                </div>
              ) : (
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    There was a problem submitting your application. Please try again later or contact us directly.
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
          <CardTitle className="text-2xl font-bold">Apply Now</CardTitle>
          <CardDescription>
            Fill out the form below to apply for our {programType || ''} program.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Your full name"
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
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                placeholder="Your phone number"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="program" className="text-sm font-medium">
                Program
              </Label>
              <Select 
                onValueChange={(value) => setValue("program", value)} 
                defaultValue={defaultProgram}
              >
                <SelectTrigger 
                  id="program"
                  className={errors.program ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  {programType !== 'course' && internships.map((internship) => (
                    <SelectItem key={`internship-${internship.id}`} value={internship.title}>
                      {internship.title} (Internship)
                    </SelectItem>
                  ))}
                  {programType !== 'internship' && courses.map((course) => (
                    <SelectItem key={`course-${course.id}`} value={course.title}>
                      {course.title} (Course)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.program && (
                <p className="text-sm text-red-500">{errors.program.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="education" className="text-sm font-medium">
                Education
              </Label>
              <Textarea
                id="education"
                placeholder="Your educational background..."
                rows={2}
                {...register("education")}
                className={errors.education ? "border-red-500" : ""}
              />
              {errors.education && (
                <p className="text-sm text-red-500">{errors.education.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-sm font-medium">
                Experience (Optional)
              </Label>
              <Textarea
                id="experience"
                placeholder="Your relevant experience..."
                rows={2}
                {...register("experience")}
                className={errors.experience ? "border-red-500" : ""}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">{errors.experience.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Cover Letter
              </Label>
              <Textarea
                id="message"
                placeholder="Why are you interested in this program?"
                rows={4}
                {...register("message")}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-sm font-medium">
                Resume/CV (Optional)
              </Label>
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume")}
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
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
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ApplicationForm;
