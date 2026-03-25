export const company = {
  name: "LogicPulse Innovation LLP",
  shortName: "LogicPulse",
  tagline: "Creating Smart, Scalable, and Impactful Solutions",
  description:
    "At LogicPulse Innovation LLP, we believe that technology is not just about coding—it's about creating smart, scalable, and impactful solutions that help businesses grow in the digital world.",
  aboutIntro:
    "Founded with a vision to empower businesses through innovation, LogicPulse Innovation LLP specializes in delivering cutting-edge IT services tailored to modern business needs. We combine creativity, technical expertise, and strategic thinking to build solutions that drive real results.",
  whoWeAre:
    "LogicPulse Innovation LLP is a dynamic and fast-growing IT company driven by passion, innovation, and commitment to excellence. As the founder-led organization, we focus on delivering personalized services and building long-term relationships with our clients.",
  whoWeAreExtra:
    "We are a team of developers, designers, and strategists who work together to transform ideas into powerful digital products.",
  mission:
    "Our mission is to deliver innovative, reliable, and scalable technology solutions that help businesses succeed in a competitive digital landscape.",
  vision:
    "To become a trusted IT partner for businesses worldwide by continuously innovating and delivering high-quality digital solutions.",
  founderMessage:
    "At LogicPulse Innovation LLP, our goal is not just to build projects, but to build long-term relationships. We believe in delivering value, trust, and innovation in everything we do.",
  founded: "2015",

  contact: {
    address: "A-1, 2D, Sector 10, Noida, U.P - 201301",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "201301",
    phone: ["+91 9990555350", "+91 9990555850"],
    email: "info@logicpulse.com",
    website: "https://logicpulse.com",
  },

  social: {
    facebook: "https://facebook.com/logicpulse",
    twitter: "https://twitter.com/logicpulse",
    linkedin: "https://linkedin.com/company/logicpulse",
    instagram: "https://instagram.com/logicpulse",
  },

  whatWeDo: [
    {
      title: "Website Development",
      description: "Modern, responsive, and user-friendly websites",
      icon: "🌐",
    },
    {
      title: "Web Applications",
      description: "Custom-built solutions for business operations",
      icon: "💻",
    },
    {
      title: "Software Development",
      description: "Tailored software for specific business needs",
      icon: "⚙️",
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores with secure payment integration",
      icon: "🛒",
    },
    {
      title: "UI/UX Design",
      description: "Clean, attractive, and engaging designs",
      icon: "🎨",
    },
    {
      title: "Business Automation Tools",
      description: "Smart systems to improve efficiency",
      icon: "🤖",
    },
  ],

  values: [
    {
      title: "Skyrocketing Growth",
      description: "We are constantly thriving to become a world-class custom software development company",
      icon: "🚀",
    },
    {
      title: "Project Mapping",
      description: "We make sure to validate the project ideas by mapping them in real-time",
      icon: "🗺️",
    },
    {
      title: "Realistic Thinking",
      description: "We transform traditional business into modern digitized workplace by exponential growth",
      icon: "💡",
    },
    {
      title: "Digital Excellency",
      description: "We adopt methods and capabilities that allow every organization to excel in operational procedure",
      icon: "⭐",
    },
    {
      title: "Competitor Research",
      description: "We analyze competitors for building a definite strategy to help clients stand ahead in the market",
      icon: "🔬",
    },
    {
      title: "Innovative Ideas",
      description: "We renovate businesses using innovative ideas without changing core organizational values",
      icon: "✨",
    },
  ],

  whyChooseUs: [
    {
      title: "Client-Focused Approach",
      description: "We put our clients at the center of everything we do, ensuring personalized attention and care",
      icon: "🤝",
    },
    {
      title: "Customized Solutions",
      description: "Every solution is tailor-made to fit your unique business requirements and goals",
      icon: "🎯",
    },
    {
      title: "Affordable Pricing",
      description: "Premium quality services at competitive and transparent pricing",
      icon: "💰",
    },
    {
      title: "On-Time Delivery",
      description: "We respect your timelines and deliver projects on schedule, every time",
      icon: "⏰",
    },
    {
      title: "Dedicated Support",
      description: "Our team provides ongoing support and maintenance even after project delivery",
      icon: "🛡️",
    },
    {
      title: "Latest Technologies",
      description: "We use the most modern technologies and tools to build future-ready solutions",
      icon: "🔧",
    },
  ],

  approach: [
    {
      step: 1,
      title: "Understand",
      description: "Understand your business needs",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Plan & Design",
      description: "Plan and design the solution",
      icon: "📐",
    },
    {
      step: 3,
      title: "Develop",
      description: "Develop with precision",
      icon: "💻",
    },
    {
      step: 4,
      title: "Test",
      description: "Test for quality",
      icon: "✅",
    },
    {
      step: 5,
      title: "Deliver & Support",
      description: "Deliver and support",
      icon: "🚀",
    },
  ],

  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "150+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
    { value: "8+", label: "Years Experience" },
  ],
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Custom Web Design", href: "/services/custom-web-design" },
        { name: "SEO Services", href: "/services/seo-services" },
        { name: "Custom App Development", href: "/services/custom-app-development" },
        { name: "ERP Software Development", href: "/services/erp-software-development" },
        { name: "Inventory Management", href: "/services/inventory-management" },
      ],
    },
    { name: "Something", href: "/something" },
    { name: "Contact", href: "/contact" },
  ],
  footer: {
    services: [
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Custom Web Design", href: "/services/custom-web-design" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Custom App Development", href: "/services/custom-app-development" },
      { name: "ERP Software Development", href: "/services/erp-software-development" },
      { name: "Inventory Management", href: "/services/inventory-management" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
};
