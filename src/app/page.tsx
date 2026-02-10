import ServiceCard from "@/components/ServiceCard";
import { company } from "@/data/company";
import servicesData from "@/data/services.json";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  const services = servicesData.services;

  return (
    <>
      {/* Hero Section with Wavy Background */}
      <WavyBackground
        className="max-w-5xl mx-auto px-4"
        colors={["#06b6d4", "#3b82f6", "#8b5cf6", "#22d3ee", "#0ea5e9"]}
        waveOpacity={0.3}
        backgroundFill="#0f172a"
        blur={8}
        speed="slow"
      >
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium">Welcome to Logicpulse Innovation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovating <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Next-Gen</span> Custom Software Development Services For Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pushing your ideas towards reality. We deliver multidimensional services with our unmatched core principles to push your business to new heights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 font-semibold"
              >
                Book A Call
              </HoverBorderGradient>
            </Link>
            <Link href="#services">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-slate-900 text-gray-300 px-8 py-4 font-semibold"
              >
                Our Services
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </WavyBackground>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services <span className="gradient-text">Empower Enterprises</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in custom software development that aids to design, integrate, and upgrade software solutions to cater to your unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
                features={service.features.slice(0, 3)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Logicpulse Innovation</span>
              </h2>
              <p className="text-gray-600 mb-6">
                {company.mission}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {company.stats.map((stat, idx) => (
                  <div key={idx} className="glass rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Learn More About Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {company.values.slice(0, 4).map((value, idx) => (
                <div
                  key={idx}
                  className="glass rounded-xl p-5 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="text-gray-900 font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering multidimensional services with our unmatched core principles to push our clients to new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to build innovative software solutions that drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 font-semibold"
              >
                Get Started Today
              </HoverBorderGradient>
            </Link>
            <Link href="/services/custom-app-development">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-slate-900/80 text-white px-8 py-4 font-semibold"
              >
                Explore Services
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
