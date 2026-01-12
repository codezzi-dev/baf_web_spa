import React from "react";
import DynamicHeading from "./HeadingComponent";
import Image from "next/image";
import imranur_rahman from "@/assets/images/home/featured-athlete/Imranur-Rahman.png"
import shirin_akter from "@/assets/images/home/featured-athlete/Shirin-Akter.jpg"
import sumaya_Dewan from "@/assets/images/home/featured-athlete/Sumaya-Dewan .jpg"
import md_ismail from "@/assets/images/home/featured-athlete/Md-Ismail.png"


const FeaturedAthletes: React.FC = () => {
  const athletes = [
    {
      id: 1,
      name: "Imranur Rahman",
      specialty: "100m Sprint",
      bestTime: "10.01s",
      goldMedals: 5,
      silverMedals: 0o0,
      emoji: "🏃",
      image: imranur_rahman,
      gradient: "from-blue-500 to-blue-400",
    },
    {
      id: 2,
      name: "Shirin Akter",
      specialty: "400m Hurdles",
      bestTime: "11.06s",
      goldMedals: 15,
      silverMedals: 2,
      emoji: "🏃‍♀️",
      image: shirin_akter,
      gradient: "from-yellow-500 to-yellow-300",
    },
    {
      id: 3,
      name: "Ismail Hossain",
      specialty: "Long Jump",
      bestTime: "10.20s",
      goldMedals: 0o5,
      silverMedals: 3,
      emoji: "⛹️",
      image:md_ismail,
      gradient: "from-red-500 to-red-400",
    },
    {
      id: 4,
      name: "Sumaya Dewan",
      specialty: "Marathon",
      bestTime: "11.06s",
      goldMedals: 2,
      silverMedals: 2,
      emoji: "🏃‍♀️",
      image:sumaya_Dewan,
      gradient: "from-purple-500 to-purple-400",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {athletes.map((athlete) => (
            <div
              key={athlete.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Image/Emoji */}
              {/* <div
                className={`h-64 bg-gradient-to-br ${athlete.gradient} flex items-center justify-center text-white text-5xl`}
              >
                {athlete.emoji}
              </div> */}
              
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
    </section>
  );
};

export default FeaturedAthletes;
