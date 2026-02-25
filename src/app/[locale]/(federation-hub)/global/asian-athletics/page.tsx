"use client";

import PageHero from "@/components/common/PageHero";
import Contact from "@/components/common/Contact";
import StatisticsSection from "@/components/common/StatisticsSection";
import MissionCard from "@/components/common/MissionCard";
import FeatureCard from "@/components/common/FeatureCard";
import Footer from "@/components/common/PageFooter2";
import Region from "@/components/common/RegionCard";
import CoreValuesSection, {
  CoreValues,
} from "@/components/about-us/mission-vision/CoreValuesSection";

import {
  Globe,
  MapPin,
  CalendarRange,
  Users,
  Award,
  Target,
  CircleCheckBig,
  TrendingUp,
} from "lucide-react";

export default function EventsPage() {
  const pageGenericElements = {
    pageTopTag: "Continental Governing Body",
    pageTopTitle: "Asian Athletics Association",
    pageTopSummary:
      "The continental governing body for athletics in Asia, promoting and developing track and field sports across 45 member countries",
  };

  const stats = [
    {
      value: "45",
      label: "Member Nations",
    },
    {
      value: "51",
      label: "Year Of Service",
    },
    {
      value: "4.5B",
      label: "Population Coverage",
    },
    {
      value: "200+",
      label: "Annual Competitions",
    },
  ];

  const coreValues: CoreValues = {
    title: "Major Championships",
    description: "",
    values: [
      {
        icon: "Award",
        title: "Professional Development",
        description:
          "Continuous education and certification programs for coaches at all levels",
        color: "from-[#00704A] to-[#005239]",
      },
      {
        icon: "Award",
        title: "Community Building",
        description:
          "Foster collaboration and knowledge sharing among athletics coaches nationwide",
        color: "from-[#00704A] to-[#005239]",
      },
      {
        icon: "Award",
        title: "Standards & Ethics",
        description:
          "Establish and maintain high coaching standards and ethical practices",
        color: "from-[#00704A] to-[#005239]",
      },
      {
        icon: "Award",
        title: "Performance Excellence",
        description:
          "Enhance coaching methodologies to improve athlete performance and success",
        color: "from-[#00704A] to-[#005239]",
      },
      {
        icon: "Award",
        title: "Coaching Education",
        description:
          "Provide accessible education and resources for aspiring and current coaches",
        color: "from-[#00704A] to-[#005239]",
      },
      {
        icon: "Award",
        title: "Recognition & Support",
        description:
          "Acknowledge achievements and provide support systems for coaching professionals",
        color: "from-[#00704A] to-[#005239]",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <PageHero pageGenericElements={pageGenericElements} />

        <div className="relative mb-10 p-10 text-gray-600 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00704A] via-[#C1272D] to-[#D4AF37]" />
          <div className="flex justify-evenly items-center gap-6">
            <div className="bg-secondary rounded-2xl m-4 p-8 w-50 shadow-xl">
              <Globe size={128} color="#00704A" />
            </div>
            <div className="w-160">
              <Contact
                title="Headquarters"
                icon={<MapPin size={24} />}
                iconColor="text-[#00704A]"
                description={
                  <>
                    <p>Singapore</p>
                  </>
                }
              />
              <Contact
                title="Founded"
                icon={<CalendarRange size={24} />}
                iconColor="text-[#C1272D]"
                description={
                  <>
                    <p>November 26, 1973</p>
                  </>
                }
              />
              <Contact
                title="Membership"
                icon={<Users size={24} />}
                iconColor="text-[#D4AF37]"
                description={
                  <>
                    <p>45 Member Federations</p>
                  </>
                }
              />
              <Contact
                title="President"
                icon={<Award size={24} />}
                iconColor="text-[#7e22ce]"
                description={
                  <>
                    <p>Dahlan Jumaan Al Hamad (Qatar)</p>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <StatisticsSection stats={stats} />

        <div className=" mb-10 p-10 text-gray-600 rounded-2xl ">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl text-black font-bold">About AAA</span>
          </div>
          The Asian Athletics Association (AAA) is the continental governing
          body for the sport of athletics in Asia. Established in 1973, AAA
          operates under the umbrella of World Athletics and is responsible for
          organizing continental athletics competitions and developing the sport
          across the Asian continent.
          <br /> <br /> AAA represents 45 member federations spanning from the
          Middle East to East Asia, covering one of the most populous and
          diverse regions in the world. The association organizes major
          championships including the Asian Athletics Championships, Asian
          Indoor Championships, and Asian Cross Country Championships.
          <br /> <br />
          Through its development programs, AAA works to elevate the standard of
          athletics across Asia, providing technical support, coaching
          education, and competitive opportunities for athletes at all levels.
          The organization plays a crucial role in preparing Asian athletes for
          World Championships and Olympic Games.
        </div>

        <div className="flex justify-around gap-4">
          <MissionCard
            title="Mission"
            icon={<Target size={24} className="text-white" />}
            iconBgClass="bg-gradient-to-b from-[#00704A] to-[#005239]"
            description={
              <>
                To promote, coordinate, and develop athletics in Asia, ensuring
                excellence in competition while fostering unity and cooperation
                among member federations.
              </>
            }
            bulletPoints={[
              "Organize world-class continental championships",
              "Organize world-class continental championships",
              "Enhance competitive standards in Asian athletics",
            ]}
            bulletIcon={<CircleCheckBig size={20} className="text-[#00704A]" />}
          />

          <FeatureCard
            title="Key Priorities"
            icon={<TrendingUp size={24} className="text-white" />}
            iconGradient="bg-gradient-to-b from-[#C1272D] to-[#A01F25]"
            items={[
              {
                title: "Regional Excellence",
                description: "Position Asian athletics as a global powerhouse",
              },
              {
                title: "Youth Development",
                description:
                  "Invest in grassroots and junior athletics programs",
              },
              {
                title: "Technical Support",
                description: "Provide expertise to emerging athletics nations",
              },
              {
                title: "Competition Standards",
                description: "Maintain high-quality competition environments",
              },
            ]}
          />
        </div>
        <CoreValuesSection coreValues={coreValues} />

        <Region
          title="Regional"
          highlightedText="Zones"
          highlightColorClass="text-[#C1272D]"
          icon={<Globe size={32} />}
          items={[
            {
              title: "West Asia",
              description: "12 Countries",
            },
            {
              title: "Central Asia",
              description: "5 Countries",
            },
            {
              title: "South Asia",
              description: "7 Countries",
            },
            {
              title: "South East Asia",
              description: "11 Countries",
            },
            {
              title: "East Asia",
              description: "10 Countries",
            },
          ]}
        />

        <div className="flex flex-col items-center bg-secondary shadow-sm rounded-2xl border-gray-200 p-8">
          <div className="text-2xl font-bold mt-4 mb-6">
            Bangladesh & Asian Athletics
          </div>
          <div className="text-center text-gray-600 mb-6">
            Bangladesh is a founding member of the Asian Athletics Association
            and has been actively participating in continental competitions
            since 1973. As part of the South Asian zone, Bangladesh contributes
            to the regional athletics community and benefits from AAA's
            development initiatives.
            <br />
            <br />
            Bangladeshi athletes regularly compete in Asian Championships across
            various age categories and disciplines. The federation collaborates
            with AAA on technical development, coaching education programs, and
            youth athlete development initiatives.
          </div>
          <div className="m-4">
            <StatisticsSection stats={stats} />
          </div>
        </div>
        <Footer
          icon={<Globe size={48} />}
          title="Learn More"
          description={
            <>
              Visit the official Asian Athletics Association website for updates
              and results
            </>
          }
          backgroundClass="bg-gradient-to-b from-[#00704A] to-[#005239]"
          buttons={[
            {
              label: "Visit AAA Athletics",
              variant: "filled",
              onClick: () => console.log("Apply clicked"),
            },
          ]}
        />
      </div>
    </div>
  );
}
