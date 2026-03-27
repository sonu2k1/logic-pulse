"use client";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";

export default function FooterContactSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl transition-shadow hover:shadow-cyan-500/10 duration-500 relative overflow-hidden">
          {/* Subtle gradient background for modern look */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/20 opacity-50 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Column: Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's <span className="text-cyan-400">Connect</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Reach out to us for any inquiries or collaborations. Our doors and inboxes are always open!
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-slate-400 transition-all duration-300">
                    <IconMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-slate-400 leading-relaxed">
                      1012, Sadarpur, Sector 45,<br />
                      Noida, near Amrapali Sapphire
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-5 group">
                  <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-slate-400 transition-all duration-300">
                    <IconPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:7683052910" className="text-slate-400 hover:text-cyan-400 transition-colors text-lg">
                      7683052910
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-5 group">
                  <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-slate-400 transition-all duration-300">
                    <IconMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:logicpulseinnovation@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors break-all text-lg">
                      logicpulseinnovation@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Map */}
            <div className="h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-700 relative group">
              <iframe
                src="https://maps.google.com/maps?q=Sadarpur%20Sector%2045%20Noida%20near%20Amrapali%20Sapphire&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 grayscale-[0.2] hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
