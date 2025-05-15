export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
    icon: "🌐",
    features: [
      "Responsive design for all devices",
      "Custom CMS integration",
      "E-commerce functionality",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App Store optimization",
      "Ongoing maintenance and updates",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centered design that enhances user experience and engagement.",
    icon: "🎨",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design systems creation",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions.",
    icon: "☁️",
    features: [
      "Cloud architecture design",
      "Migration to cloud platforms",
      "Serverless applications",
      "DevOps implementation",
      "Continuous integration/deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
    icon: "📈",
    features: [
      "SEO and content strategy",
      "Social media marketing",
      "PPC and display advertising",
      "Email marketing campaigns",
      "Analytics and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy and implementation.",
    icon: "💼",
    features: [
      "Technology assessment",
      "Digital transformation strategy",
      "IT roadmap development",
      "Vendor selection",
      "Project management",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];
