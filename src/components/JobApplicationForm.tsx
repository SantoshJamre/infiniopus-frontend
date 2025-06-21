import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CheckCircle, AlertCircle, X, Upload, FileText, Briefcase, Loader2, Send } from "lucide-react";
import emailService, { EmailData } from "@/services/emailService";

// Form validation schema for job applications
const jobFormSchema = z.object({
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

    // Position Information
    position: z.string()
        .trim()
        .min(1, { message: "Position is required" }),

    department: z.string()
        .trim()
        .min(1, { message: "Department is required" }),

    experience: z.string()
        .regex(/^\d+(\.\d)?$/, { message: "Please enter valid years of experience (e.g., 2 or 2.5)" })
        .refine((val) => {
            const num = parseFloat(val);
            return num >= 0 && num <= 50;
        }, { message: "Experience must be between 0 and 50 years" }),

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

    courseType: z.string()
        .min(1, { message: "Please select course type" }),

    // Salary Information
    currentSalary: z.string()
        .optional()
        .refine((val) => {
            if (!val || val.trim() === "") return true;
            const num = parseFloat(val);
            return !isNaN(num) && num >= 0;
        }, { message: "Current salary must be a valid positive number" }),

    expectedSalary: z.string()
        .min(1, { message: "Expected salary is required" })
        .refine((val) => {
            const num = parseFloat(val);
            return !isNaN(num) && num > 0;
        }, { message: "Expected salary must be a valid positive number" }),

    // Availability
    noticePeriod: z.string()
        .min(1, { message: "Please select notice period" }),

    // Additional Information
    portfolioUrl: z.string()
        .optional()
        .refine((val) => {
            if (!val || val.trim() === "") return true;
            try {
                new URL(val);
                return true;
            } catch {
                return false;
            }
        }, { message: "Please enter a valid portfolio URL" }),

    linkedinUrl: z.string()
        .optional()
        .refine((val) => {
            if (!val || val.trim() === "") return true;
            try {
                new URL(val);
                return val.includes('linkedin.com');
            } catch {
                return false;
            }
        }, { message: "Please enter a valid LinkedIn URL" }),

    coverLetter: z.string()
        .optional()
        .refine((val) => {
            if (!val || val.trim() === "") return true;
            return val.trim().length <= 2000;
        }, { message: "Cover letter cannot exceed 2000 characters" }),

    // File validation
    resume: z.any()
        .refine((file) => file && file.size > 0, { message: "Resume/CV is required" })
        .refine((file) => {
            if (!file) return false;
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];
            return allowedTypes.includes(file.type);
        }, { message: "Resume must be a PDF, DOC, or DOCX file" })
        .refine((file) => {
            if (!file) return false;
            return file.size <= 5 * 1024 * 1024; // 5MB limit
        }, { message: "Resume file size cannot exceed 5MB" }),
});

type JobFormData = z.infer<typeof jobFormSchema>;

interface JobApplicationFormProps {
    defaultPosition?: string;
    defaultDepartment?: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
    defaultPosition = "",
    defaultDepartment = ""
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<JobFormData>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            position: defaultPosition,
            department: defaultDepartment,
            name: "",
            email: "",
            phone: "",
            experience: "",
            tenthPercentage: "",
            tenthSchool: "",
            twelfthPercentage: "",
            twelfthSchool: "",
            collegePercentage: "",
            collegeName: "",
            courseType: "",
            currentSalary: "",
            expectedSalary: "",
            noticePeriod: "",
            portfolioUrl: "",
            linkedinUrl: "",
            coverLetter: "",
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setValue("resume", file);
        }
    };

    const onSubmit = async (data: JobFormData) => {
        setIsSubmitting(true);
        setFormStatus("idle");

        try {

            const result = await emailService.APICall(data, '/apply-job', 'POST');

            if (result.success) {
                setFormStatus("success");
                setShowPopup(true);
            } else {
                setFormStatus("error");
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Error submitting job application:", error);
            setFormStatus("error");
            setShowPopup(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        if (formStatus === "success") {
            navigate("/career");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
            {/* Success/Error Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                {formStatus === "success" ? (
                                    <CheckCircle className="h-6 w-6 text-green-500" />
                                ) : (
                                    <AlertCircle className="h-6 w-6 text-red-500" />
                                )}
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {formStatus === "success" ? "Application Submitted!" : "Submission Failed"}
                                </h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={closePopup}
                                className="h-6 w-6 p-0 hover:bg-gray-100"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-gray-600 mb-4">
                            {formStatus === "success"
                                ? "Thank you for your job application! We'll review it and get back to you soon."
                                : "There was an error submitting your application. Please try again or contact us directly."}
                        </p>
                        <Button onClick={closePopup} className="w-full bg-blue-600 hover:bg-blue-700">
                            {formStatus === "success" ? "Continue" : "Try Again"}
                        </Button>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
                        <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        Job Application
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Apply for the position of <span className="font-semibold text-blue-600">{defaultPosition || 'your desired role'}</span>.
                        Fill out the form below and we'll get back to you soon.
                    </p>
                </div>

                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {/* Section 1: Personal Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                        <span className="text-white font-semibold text-sm">1</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium">
                                            Full Name *
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
                                            Email Address *
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
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-medium">
                                            Phone Number *
                                        </Label>
                                        <Input
                                            id="phone"
                                            placeholder="e.g., +91 9876543210"
                                            {...register("phone")}
                                            className={errors.phone ? "border-red-500" : ""}
                                        />
                                        {errors.phone && (
                                            <p className="text-sm text-red-500">{errors.phone.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="experience" className="text-sm font-medium">
                                            Work Experience (in years) *
                                        </Label>
                                        <Input
                                            id="experience"
                                            type="number"
                                            step="0.1"
                                            min="0"
                                            max="50"
                                            placeholder="e.g., 2.5"
                                            {...register("experience")}
                                            className={errors.experience ? "border-red-500" : ""}
                                        />
                                        {errors.experience && (
                                            <p className="text-sm text-red-500">{errors.experience.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Position Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                        <span className="text-white font-semibold text-sm">2</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Position Details</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="position" className="text-sm font-medium">
                                            Position *
                                        </Label>
                                        <Input
                                            id="position"
                                            value={defaultPosition}
                                            readOnly
                                            className="bg-muted"
                                            {...register("position")}
                                        />
                                        {errors.position && (
                                            <p className="text-sm text-red-500">{errors.position.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="department" className="text-sm font-medium">
                                            Department *
                                        </Label>
                                        <Input
                                            id="department"
                                            value={defaultDepartment}
                                            readOnly
                                            className="bg-muted"
                                            {...register("department")}
                                        />
                                        {errors.department && (
                                            <p className="text-sm text-red-500">{errors.department.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Education Details */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                        <span className="text-white font-semibold text-sm">3</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Educational Background</h3>
                                </div>

                                {/* 10th Grade */}
                                <div className="space-y-4">
                                    <h4 className="font-medium text-muted-foreground">10th Grade</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="tenthPercentage" className="text-sm font-medium">
                                                CGPA/Percentage *
                                            </Label>
                                            <Input
                                                id="tenthPercentage"
                                                placeholder="e.g., 85% or 8.5 CGPA"
                                                {...register("tenthPercentage")}
                                                className={errors.tenthPercentage ? "border-red-500" : ""}
                                            />
                                            {errors.tenthPercentage && (
                                                <p className="text-sm text-red-500">{errors.tenthPercentage.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="tenthSchool" className="text-sm font-medium">
                                                School Name *
                                            </Label>
                                            <Input
                                                id="tenthSchool"
                                                placeholder="Your school name"
                                                {...register("tenthSchool")}
                                                className={errors.tenthSchool ? "border-red-500" : ""}
                                            />
                                            {errors.tenthSchool && (
                                                <p className="text-sm text-red-500">{errors.tenthSchool.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* 12th Grade */}
                                <div className="space-y-4">
                                    <h4 className="font-medium text-muted-foreground">12th Grade</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="twelfthPercentage" className="text-sm font-medium">
                                                CGPA/Percentage *
                                            </Label>
                                            <Input
                                                id="twelfthPercentage"
                                                placeholder="e.g., 85% or 8.5 CGPA"
                                                {...register("twelfthPercentage")}
                                                className={errors.twelfthPercentage ? "border-red-500" : ""}
                                            />
                                            {errors.twelfthPercentage && (
                                                <p className="text-sm text-red-500">{errors.twelfthPercentage.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="twelfthSchool" className="text-sm font-medium">
                                                School Name *
                                            </Label>
                                            <Input
                                                id="twelfthSchool"
                                                placeholder="Your school name"
                                                {...register("twelfthSchool")}
                                                className={errors.twelfthSchool ? "border-red-500" : ""}
                                            />
                                            {errors.twelfthSchool && (
                                                <p className="text-sm text-red-500">{errors.twelfthSchool.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* College */}
                                <div className="space-y-4">
                                    <h4 className="font-medium text-muted-foreground">College/University</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="collegePercentage" className="text-sm font-medium">
                                                CGPA/Percentage *
                                            </Label>
                                            <Input
                                                id="collegePercentage"
                                                placeholder="e.g., 85% or 8.5 CGPA"
                                                {...register("collegePercentage")}
                                                className={errors.collegePercentage ? "border-red-500" : ""}
                                            />
                                            {errors.collegePercentage && (
                                                <p className="text-sm text-red-500">{errors.collegePercentage.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="collegeName" className="text-sm font-medium">
                                                College/University Name *
                                            </Label>
                                            <Input
                                                id="collegeName"
                                                placeholder="Your college/university name"
                                                {...register("collegeName")}
                                                className={errors.collegeName ? "border-red-500" : ""}
                                            />
                                            {errors.collegeName && (
                                                <p className="text-sm text-red-500">{errors.collegeName.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="courseType" className="text-sm font-medium">
                                                Course Type *
                                            </Label>
                                            <Select onValueChange={(value) => setValue("courseType", value)}>
                                                <SelectTrigger
                                                    id="courseType"
                                                    className={errors.courseType ? "border-red-500" : ""}
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

                            {/* Salary Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                        <span className="text-white font-semibold text-sm">4</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Salary Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentSalary" className="text-sm font-medium">
                                            Current Salary (Optional)
                                        </Label>
                                        <Input
                                            id="currentSalary"
                                            placeholder="e.g., 5.5 LPA"
                                            {...register("currentSalary")}
                                            className={errors.currentSalary ? "border-red-500" : ""}
                                        />
                                        <p className="text-xs text-muted-foreground">Format: INR in lakhs per annum</p>
                                        {errors.currentSalary && (
                                            <p className="text-sm text-red-500">{errors.currentSalary.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="expectedSalary" className="text-sm font-medium">
                                            Expected Salary *
                                        </Label>
                                        <Input
                                            id="expectedSalary"
                                            placeholder="e.g., 6.5 LPA"
                                            {...register("expectedSalary")}
                                            className={errors.expectedSalary ? "border-red-500" : ""}
                                        />
                                        <p className="text-xs text-muted-foreground">Format: INR in lakhs per annum</p>
                                        {errors.expectedSalary && (
                                            <p className="text-sm text-red-500">{errors.expectedSalary.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Notice Period */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                        <span className="text-white font-semibold text-sm">5</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Availability</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="noticePeriod" className="text-sm font-medium">
                                            Notice Period *
                                        </Label>
                                        <Select onValueChange={(value) => setValue("noticePeriod", value)}>
                                            <SelectTrigger
                                                id="noticePeriod"
                                                className={errors.noticePeriod ? "border-red-500" : ""}
                                            >
                                                <SelectValue placeholder="Select notice period" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="15">15 days</SelectItem>
                                                <SelectItem value="30">30 days</SelectItem>
                                                <SelectItem value="45">45 days</SelectItem>
                                                <SelectItem value="60">60 days</SelectItem>
                                                <SelectItem value="90">90 days</SelectItem>
                                                <SelectItem value="120">120 days</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.noticePeriod && (
                                            <p className="text-sm text-red-500">{errors.noticePeriod.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                        <span className="text-white font-semibold text-sm">6</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Additional Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="portfolioUrl" className="text-sm font-medium">
                                            Portfolio URL (Optional)
                                        </Label>
                                        <Input
                                            id="portfolioUrl"
                                            placeholder="https://yourportfolio.com"
                                            {...register("portfolioUrl")}
                                            className={errors.portfolioUrl ? "border-red-500" : ""}
                                        />
                                        {errors.portfolioUrl && (
                                            <p className="text-sm text-red-500">{errors.portfolioUrl.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="linkedinUrl" className="text-sm font-medium">
                                            LinkedIn URL (Optional)
                                        </Label>
                                        <Input
                                            id="linkedinUrl"
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            {...register("linkedinUrl")}
                                            className={errors.linkedinUrl ? "border-red-500" : ""}
                                        />
                                        {errors.linkedinUrl && (
                                            <p className="text-sm text-red-500">{errors.linkedinUrl.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Cover Letter */}
                            <div className="space-y-2">
                                <Label htmlFor="coverLetter" className="text-sm font-medium">
                                    Cover Letter
                                </Label>
                                <Textarea
                                    id="coverLetter"
                                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                    rows={6}
                                    {...register("coverLetter")}
                                    className={errors.coverLetter ? "border-red-500" : ""}
                                />
                                {errors.coverLetter && (
                                    <p className="text-sm text-red-500">{errors.coverLetter.message}</p>
                                )}
                            </div>

                            {/* Resume Upload */}
                            <div className="space-y-2">
                                <Label htmlFor="resume" className="text-sm font-medium">
                                    Resume/CV *
                                </Label>
                                <div className="flex items-center space-x-4">
                                    <Input
                                        id="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => document.getElementById("resume")?.click()}
                                        className="flex items-center space-x-2"
                                    >
                                        <Upload className="h-4 w-4" />
                                        <span>Upload Resume</span>
                                    </Button>
                                    {selectedFile && (
                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <FileText className="h-4 w-4" />
                                            <span>{selectedFile.name}</span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                                </p>
                                {errors.resume && (
                                    <p className="text-sm text-red-500">{errors.resume.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting Application...
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
        </div>
    );
};

export default JobApplicationForm;
