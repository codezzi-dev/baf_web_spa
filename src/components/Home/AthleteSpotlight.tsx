import React from "react";
import DynamicHeading from "./HeadingComponent";
import Image from "next/image";
import { athletes } from "../data/Athletes";


const FeaturedAthletes: React.FC = () => {
 
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#00916e] font-semibold text-sm uppercase tracking-wider mb-2">Our Champions</div>
          {/* <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Athletes</h2> */}
          <DynamicHeading title="Featured Athletes" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the athletes who represent Bangladesh on the global stage
          </p>
        </div>

        {/* Athletes Grid */}
        <div className="marquee-container">
          <div className="flex marquee-content whitespace-nowrap space-x-6 py-12">
            {athletes.map((athlete) => (
              <div
                key={athlete.id}
                className="bg-white min-w-[300px] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >

                <div className="" >
                  <Image src={athlete.image} width={500} height={500} alt="imranur-rahman" className="h-72" />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{athlete.name}</h3>
                  <div className="bg-gradient-to-r from-[#C1272D] to-[#A01F25] bg-clip-text text-transparent font-semibold text-sm mb-4">
                    {athlete.specialty}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    {/* Best Time */}
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#00916e]">{athlete.bestTime}</div>
                      <div className="text-xs text-gray-500">Best Time</div>
                    </div>

                    {/* Gold */}
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#00916e]">{athlete.goldMedals}</div>
                      <div className="text-xs text-gray-500 font-medium">Gold</div>
                    </div>

                    {/* Silver */}
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#00916e]">{athlete.silverMedals}</div>
                      <div className="text-xs text-gray-500 font-medium">Silver</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAthletes;
