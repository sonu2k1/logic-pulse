export const company = {
  name: "Logicpulse Innovation",
  shortName: "Logicpulse",
  tagline: "Innovating Next-Gen Custom Software Development Services For Businesses",
  description:
    "Logicpulse Innovation is the leading custom software development company that offers high-quality website design & development services as per the client's requirements.",
  mission:
    "Building custom software solutions through new-age design and technology development for almost every sector businesses.",
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
      title: "Customized Options",
      description: "Giving you the liberty to demand exclusive designs according to your requirements",
      icon: "🎯",
    },
    {
      title: "Powerful Code",
      description: "Developing robust & lightweight codes without putting a lot of load on system",
      icon: "💪",
    },
    {
      title: "Dynamic Marketing",
      description: "Providing you with the most optimal & scalable marketing strategies",
      icon: "📈",
    },
    {
      title: "Documentation",
      description: "Completing documentation process to ensure verification and validation of products",
      icon: "📋",
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
