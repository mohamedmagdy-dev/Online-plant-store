import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleHeaderTheme } from "../features/theme/themeSlice";
import BenefitSection from "../components/BenefitSection";

import aboutImg from "../assets/imgs/about-us-bg.webp";

export default function AboutUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleHeaderTheme(true));
  }, [dispatch]);

  return (
    <main>
      {/* Section 1: Hero */}
      <section
        className="text-white pt-45 pb-35 px-4 text-center min-h-[90vh] flex flex-col justify-center bg-cover bg-center relative"
        style={{ background: `url(${aboutImg}) center/cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Overlay to make text readable */}
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-100 font-medium leading-relaxed drop-shadow-md">
            We are passionate about bringing nature closer to you. Our mission
            is to provide the best plants to brighten up your living spaces and
            improve your well-being.
          </p>
        </div>
      </section>

      {/* Section 2: Info & Statistics */}
      <section className="bg-white py-35 px-4 text-abyss">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center justify-between">
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Growing Green Since 2020
            </h2>
            <p className="text-xl text-gray mb-8 leading-relaxed">
              What started as a small local nursery has blossomed into an
              expansive online store. We handpick every plant, ensuring that
              only the healthiest and most vibrant greenery makes its way to
              your home.
            </p>
          </div>
          <div className="lg:w-7/12 grid grid-cols-2 gap-6 md:gap-8">
            <div className="group bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="block text-5xl md:text-6xl font-extrabold bg-linear-to-r from-mint to-sky bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                5K+
              </span>
              <span className="text-lg font-semibold text-charcoal">
                Happy Customers
              </span>
            </div>
            <div className="group bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="block text-5xl md:text-6xl font-extrabold bg-linear-to-r from-mint to-sky bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                150+
              </span>
              <span className="text-lg font-semibold text-charcoal">
                Plant Varieties
              </span>
            </div>
            <div className="group bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="block text-5xl md:text-6xl font-extrabold bg-linear-to-r from-mint to-sky bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                10+
              </span>
              <span className="text-lg font-semibold text-charcoal">
                Expert Botanists
              </span>
            </div>
            <div className="group bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="block text-5xl md:text-6xl font-extrabold bg-linear-to-r from-mint to-sky bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                99%
              </span>
              <span className="text-lg font-semibold text-charcoal">
                Delivery Success
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="bg-[#f8f9fa] py-35 px-4 text-abyss">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20">
            Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {/* Team Member 1 */}
            <div className="group w-full sm:w-80 bg-white rounded-[40px] p-10 flex flex-col items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-linear-to-r from-mint to-sky rounded-[30px] transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-60"></div>
                <img
                  src="https://i.pravatar.cc/300?img=11"
                  alt="John Doe"
                  className="relative w-40 h-40 rounded-[30px] object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-abyss">John Doe</h3>
              <p className="bg-linear-to-r from-mint to-sky bg-clip-text text-transparent text-lg font-bold">
                Founder & CEO
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group w-full sm:w-80 bg-white rounded-[40px] p-10 flex flex-col items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-linear-to-r from-mint to-sky rounded-[30px] transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-60"></div>
                <img
                  src="https://i.pravatar.cc/300?img=12"
                  alt="Michael Smith"
                  className="relative w-40 h-40 rounded-[30px] object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-abyss">
                Michael Smith
              </h3>
              <p className="bg-linear-to-r from-mint to-sky bg-clip-text text-transparent text-lg font-bold">
                Head Botanist
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group w-full sm:w-80 bg-white rounded-[40px] p-10 flex flex-col items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-linear-to-r from-mint to-sky rounded-[30px] transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-60"></div>
                <img
                  src="https://i.pravatar.cc/300?img=14"
                  alt="David Johnson"
                  className="relative w-40 h-40 rounded-[30px] object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-abyss">
                David Johnson
              </h3>
              <p className="bg-linear-to-r from-mint to-sky bg-clip-text text-transparent text-lg font-bold">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <BenefitSection />
    </main>
  );
}
