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

// Form validation schema for internships and courses
const formSchema = z.object({
  // Personal Information
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces" }),

  email: z.string()
    .trim()
    .email({ message: "Please provide a valid email address" }),

  phone: z.string()
    .trim()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, { message: "Please provide a valid Indian phone number" }),

  // Program Information
  program: z.string()
    .trim()
    .min(1, { message: "Program selection is required" }),

  courseType: z.string()
    .trim()
    .min(1, { message: "Course type is required" }),

  // Educational Background
  tenthPercentage: z.string()
    .min(1, { message: "10th percentage is required" })
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0 && num <= 100;
    }, { message: "10th percentage must be between 0 and 100" }),

  tenthSchool: z.string()
    .trim()
    .min(2, { message: "School name must be at least 2 characters long" })
    .max(100, { message: "School name cannot exceed 100 characters" }),

  twelfthPercentage: z.string()
    .min(1, { message: "12th percentage is required" })
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0 && num <= 100;
    }, { message: "12th percentage must be between 0 and 100" }),

  twelfthSchool: z.string()
    .trim()
    .min(2, { message: "School name must be at least 2 characters long" })
    .max(100, { message: "School name cannot exceed 100 characters" }),

  collegePercentage: z.string()
    .min(1, { message: "College percentage is required" })
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0 && num <= 100;
    }, { message: "College percentage must be between 0 and 100" }),

  collegeName: z.string()
    .trim()
    .min(2, { message: "College name must be at least 2 characters long" })
    .max(100, { message: "College name cannot exceed 100 characters" }),

  // Experience and Motivation
  experience: z.string()
    .trim()
    .min(10, { message: "Experience description must be at least 10 characters long" })
    .max(500, { message: "Experience description cannot exceed 500 characters" }),

  motivation: z.string()
    .trim()
    .min(20, { message: "Motivation must be at least 20 characters long" })
    .max(1000, { message: "Motivation cannot exceed 1000 characters" }),

  goals: z.string()
    .trim()
    .min(20, { message: "Goals description must be at least 20 characters long" })
    .max(1000, { message: "Goals description cannot exceed 1000 characters" }),

  // Availability
  availability: z.string()
    .trim()
    .min(1, { message: "Availability is required" }),

  // File validation
  resume: z.any()
    .optional()
    .refine((file) => {
      if (!file || (Array.isArray(file) && file.length === 0)) return true;
      const actualFile = Array.isArray(file) ? file[0] : file;
      if (!actualFile || !actualFile.size) return true;
      
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      return allowedTypes.includes(actualFile.type);
    }, { message: "Resume must be a PDF, DOC, or DOCX file" })
    .refine((file) => {
      if (!file || (Array.isArray(file) && file.length === 0)) return true;
      const actualFile = Array.isArray(file) ? file[0] : file;
      if (!actualFile || !actualFile.size) return true;
      
      return actualFile.size <= 5 * 1024 * 1024; // 5MB limit
    }, { message: "Resume file size cannot exceed 5MB" }),
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
  
  const location = useLocation();
  const navigate = useNavigate();

  // Get program from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const programParam = params.get('program');
    if (programParam) {
      setValue("program", decodeURIComponent(programParam));
    } else if (defaultProgram) {
      setValue("program", defaultProgram);
    }
  }, [location, defaultProgram]);

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
      tenthPercentage: "",
      tenthSchool: "",
      twelfthPercentage: "",
      twelfthSchool: "",
      collegePercentage: "",
      collegeName: "",
      courseType: "",
      experience: "",
      motivation: "",
      goals: "",
      availability: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Prepare email data in key-value format
      const emailData: EmailData = {
        name: data.name,
        email: data.email,
        subject: `Application for ${data.program}`,
        phone: data.phone,
        program: data.program,
        tenthPercentage: data.tenthPercentage,
        tenthSchool: data.tenthSchool,
        twelfthPercentage: data.twelfthPercentage,
        twelfthSchool: data.twelfthSchool,
        collegePercentage: data.collegePercentage,
        collegeName: data.collegeName,
        courseType: data.courseType,
        experience: data.experience || '',
        motivation: data.motivation,
        goals: data.goals,
        availability: data.availability,
        resume: data.resume?.[0] || undefined, // Handle file properly
      };

      // Send application email
      const result = await emailService.APICall(emailData, '/apply-course-internship', 'POST');

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
    } catch (error) {
      console.error("Error submitting application:", error);
      setFormStatus("error");
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    if (formStatus === "success") {
      navigate("/internship-courses");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
      {/* Success/Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {formStatus === "success" ? (
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">
                  {formStatus === "success" ? "Application Submitted!" : "Submission Failed"}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closePopup}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-600 mb-6">
              {formStatus === "success"
                ? "Thank you for your application! We'll review it and get back to you soon."
                : "There was an error submitting your application. Please try again or contact us directly."}
            </p>
            <Button onClick={closePopup} className="w-full bg-green-600 hover:bg-green-700">
              {formStatus === "success" ? "Continue" : "Try Again"}
            </Button>
          </div>
        </div>
      )}

      <Card className="max-w-5xl mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
            🎓 Program Application
          </CardTitle>
          <CardDescription className="text-green-100 text-lg">
            Apply for <span className="font-semibold text-white">{defaultProgram || 'our program'}</span>
            <br />
            Start your learning journey with us!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-green-200 pb-1">
                  Personal Information
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-600">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : "border-gray-300"}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-600">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : "border-gray-300"}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-600">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="e.g., +91 9876543210"
                    {...register("phone")}
                    className={errors.phone ? "border-red-500" : "border-gray-300"}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program" className="text-sm font-medium text-gray-600">
                    Program *
                  </Label>
                  <Input
                    id="program"
                    value={defaultProgram || ""}
                    readOnly
                    className="bg-gray-100 border-gray-300"
                    {...register("program")}
                  />
                  {errors.program && (
                    <p className="text-sm text-red-500">{errors.program.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Educational Background */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-green-200 pb-1">
                  Educational Background
                </h3>
              </div>
              
              {/* 10th Grade */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-600">10th Grade</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tenthPercentage" className="text-sm font-medium text-gray-600">
                      CGPA/Percentage *
                    </Label>
                    <Input
                      id="tenthPercentage"
                      placeholder="e.g., 85% or 8.5 CGPA"
                      {...register("tenthPercentage")}
                      className={errors.tenthPercentage ? "border-red-500" : "border-gray-300"}
                    />
                    {errors.tenthPercentage && (
                      <p className="text-sm text-red-500">{errors.tenthPercentage.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tenthSchool" className="text-sm font-medium text-gray-600">
                      School Name *
                    </Label>
                    <Input
                      id="tenthSchool"
                      placeholder="Your school name"
                      {...register("tenthSchool")}
                      className={errors.tenthSchool ? "border-red-500" : "border-gray-300"}
                    />
                    {errors.tenthSchool && (
                      <p className="text-sm text-red-500">{errors.tenthSchool.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 12th Grade */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-600">12th Grade</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="twelfthPercentage" className="text-sm font-medium text-gray-600">
                      CGPA/Percentage *
                    </Label>
                    <Input
                      id="twelfthPercentage"
                      placeholder="e.g., 85% or 8.5 CGPA"
                      {...register("twelfthPercentage")}
                      className={errors.twelfthPercentage ? "border-red-500" : "border-gray-300"}
                    />
                    {errors.twelfthPercentage && (
                      <p className="text-sm text-red-500">{errors.twelfthPercentage.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twelfthSchool" className="text-sm font-medium text-gray-600">
                      School Name *
                    </Label>
                    <Input
                      id="twelfthSchool"
                      placeholder="Your school name"
                      {...register("twelfthSchool")}
                      className={errors.twelfthSchool ? "border-red-500" : "border-gray-300"}
                    />
                    {errors.twelfthSchool && (
                      <p className="text-sm text-red-500">{errors.twelfthSchool.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* College */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-600">College/University</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="collegePercentage" className="text-sm font-medium text-gray-600">
                      CGPA/Percentage *
                    </Label>
                    <Input
                      id="collegePercentage"
                      placeholder="e.g., 85% or 8.5 CGPA"
                      {...register("collegePercentage")}
                      className={errors.collegePercentage ? "border-red-500" : "border-gray-300"}
                    />
                    {errors.collegePercentage && (
                      <p className="text-sm text-red-500">{errors.collegePercentage.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collegeName" className="text-sm font-medium text-gray-600">
                      College/University Name *
                    </Label>
                    <Input
                      id="collegeName"
                      placeholder="Your college/university name"
                      {...register("collegeName")}
                      className={errors.collegeName ? "border-red-500" : "border-gray-300"}
                    />
                    {errors.collegeName && (
                      <p className="text-sm text-red-500">{errors.collegeName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="courseType" className="text-sm font-medium text-gray-600">
                      Course Type *
                    </Label>
                    <Select onValueChange={(value) => setValue("courseType", value)}>
                      <SelectTrigger
                        id="courseType"
                        className={errors.courseType ? "border-red-500" : "border-gray-300"}
                      >
                        <SelectValue placeholder="Select course type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.courseType && (
                      <p className="text-sm text-red-500">{errors.courseType.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-green-200 pb-1">
                  Experience & Motivation
                </h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-sm font-medium text-gray-600">
                  Relevant Experience (Optional)
                </Label>
                <Textarea
                  id="experience"
                  placeholder="Any relevant projects, internships, or experience related to this program..."
                  rows={3}
                  {...register("experience")}
                  className={errors.experience ? "border-red-500" : "border-gray-300"}
                />
                {errors.experience && (
                  <p className="text-sm text-red-500">{errors.experience.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation" className="text-sm font-medium text-gray-600">
                  Why are you interested in this program? *
                </Label>
                <Textarea
                  id="motivation"
                  placeholder="Tell us what motivates you to apply for this program and how it aligns with your interests..."
                  rows={4}
                  {...register("motivation")}
                  className={errors.motivation ? "border-red-500" : "border-gray-300"}
                />
                {errors.motivation && (
                  <p className="text-sm text-red-500">{errors.motivation.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="text-sm font-medium text-gray-600">
                  What are your learning goals? *
                </Label>
                <Textarea
                  id="goals"
                  placeholder="What do you hope to learn and achieve through this program?"
                  rows={3}
                  {...register("goals")}
                  className={errors.goals ? "border-red-500" : "border-gray-300"}
                />
                {errors.goals && (
                  <p className="text-sm text-red-500">{errors.goals.message}</p>
                )}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-green-200 pb-1">
                  Availability & Documents
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-sm font-medium text-gray-600">
                    Availability *
                  </Label>
                  <Select onValueChange={(value) => setValue("availability", value)}>
                    <SelectTrigger
                      id="availability"
                      className={errors.availability ? "border-red-500" : "border-gray-300"}
                    >
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="flexible">Flexible schedule</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="text-sm text-red-500">{errors.availability.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium text-gray-600">
                    Resume/CV (Optional)
                  </Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    {...register("resume")}
                    className="cursor-pointer border-gray-300"
                  />
                  <p className="text-xs text-gray-600">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 text-lg bg-green-600 hover:bg-green-700"
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
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
