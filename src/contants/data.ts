
export const SERVICES = [
  {
    title: "Strategy & Consulting",
    description:
      "We craft data-driven strategies tailored to your business goals, helping you navigate complex market landscapes with confidence.",
    icon: "strategy",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your operations with cutting-edge technology solutions that streamline workflows and boost productivity.",
    icon: "digital",
  },
  {
    title: "Brand & Design",
    description:
      "Create a memorable brand identity with our design expertise. From logos to complete brand systems, we bring your vision to life.",
    icon: "design",
  },
  {
    title: "Web Development",
    description:
      "Build fast, accessible, and beautiful websites that convert visitors into customers. Performance and user experience first.",
    icon: "web",
  },
  {
    title: "Marketing & Growth",
    description:
      "Accelerate your growth with targeted marketing campaigns, SEO optimization, and data-driven customer acquisition strategies.",
    icon: "marketing",
  },
  {
    title: "Support & Maintenance",
    description:
      "Rest easy with our ongoing support and maintenance services. We keep your systems running smoothly around the clock.",
    icon: "support",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Working with this team transformed our business. Their strategic approach and attention to detail exceeded all our expectations.",
    author: "Sarah Mitchell",
    role: "CEO, TechForward",
  },
  {
    quote:
      "The results speak for themselves. A 300% increase in qualified leads within the first quarter. Absolutely outstanding work.",
    author: "James Chen",
    role: "Marketing Director, Elevate Co.",
  },
  {
    quote:
      "Professional, responsive, and truly invested in our success. They felt like an extension of our own team from day one.",
    author: "Emily Rodriguez",
    role: "Founder, Bloom Studio",
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses just getting started.",
    features: [
      "Up to 5 pages",
      "Basic SEO setup",
      "Mobile responsive design",
      "Contact form integration",
      "1 month of support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "149",
    description: "Everything you need to grow your business online.",
    features: [
      "Up to 20 pages",
      "Advanced SEO optimization",
      "Custom design & branding",
      "CMS integration",
      "Analytics dashboard",
      "6 months of support",
      "Priority response time",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "399",
    description: "For established businesses that need the full package.",
    features: [
      "Unlimited pages",
      "Full SEO & content strategy",
      "Custom web application",
      "API integrations",
      "Dedicated account manager",
      "12 months of support",
      "24/7 priority support",
      "Performance monitoring",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services including strategy consulting, digital transformation, brand design, web development, marketing, and ongoing support. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A standard website typically takes 4-8 weeks, while larger digital transformation projects may take 3-6 months. We provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Absolutely. All our plans include a support period, and we offer extended maintenance packages for long-term partnership. Our team is always available to help with updates, troubleshooting, and new feature requests.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer three main pricing tiers to accommodate different business sizes and needs. We also provide custom quotes for specialized projects. Visit our pricing page or contact us for a personalized estimate.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Yes, we frequently work within established brand guidelines. Our team is experienced at maintaining brand consistency while bringing fresh creative perspectives to your digital presence.",
  },
  {
    question: "How do we get started?",
    answer:
      "Getting started is simple. Reach out through our contact form or schedule a free consultation. We will discuss your goals, assess your needs, and propose a tailored solution that fits your budget and timeline.",
  },
] as const;

