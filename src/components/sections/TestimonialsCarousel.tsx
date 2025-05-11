import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialsCarousel = ({
  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      quote:
        "Infiniopus transformed our digital presence with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Global Brands",
      quote:
        "Working with Infiniopus was a game-changer for our marketing strategy. Their insights and execution helped us achieve record-breaking engagement.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CEO",
      company: "Startup Innovators",
      quote:
        "As a startup, finding the right partner was crucial. Infiniopus understood our vision and helped us build a solid foundation for growth.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Operations Manager",
      company: "Enterprise Solutions",
      quote:
        "The efficiency improvements we've seen after implementing Infiniopus's recommendations have been remarkable. Our processes are streamlined and our team is more productive.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ],
  autoPlay = true,
  interval = 5000,
}: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, interval, testimonials.length]);

  const handlePrevious = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with Infiniopus.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-background">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border-none shadow-none">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />

                      <p className="text-lg md:text-xl mb-8 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>

                      <Avatar className="h-16 w-16 mb-4">
                        <AvatarImage
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                        />
                        <AvatarFallback>
                          {testimonials[currentIndex].name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].role},{" "}
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 rounded-full transition-all ${currentIndex === index ? "w-6 bg-primary" : "w-2.5 bg-primary/30"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
