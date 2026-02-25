"use client";

import PageHero from "@/components/common/PageHero";
import Contact from "@/components/common/Contact";
import StatisticsSection from "@/components/common/StatisticsSection";
import MissionCard from "@/components/common/MissionCard";
import FeatureCard from "@/components/common/FeatureCard";
import Footer from "@/components/common/PageFooter2";
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
    pageTopTag: "Regional Governing Body",
    pageTopTitle: "South Asian Athletics Federation",
    pageTopSummary:
      "Promoting athletics excellence across South Asia through regional cooperation, competition, and athlete development programs",
  };

  const stats = [
    {
      value: "8",
      label: "Member Nations",
    },
    {
      value: "40+",
      label: "Year Active",
    },
    {
      value: "1.9B",
      label: "Population",
    },
    {
      value: "500+",
      label: "Annual Atheletes",
    },
  ];

  const coreValues: CoreValues = {
    title: "Our Strategic Objectives",
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
                    <p>New Delhi, India</p>
                  </>
                }
              />
              <Contact
                title="Founded"
                icon={<CalendarRange size={24} />}
                iconColor="text-[#C1272D]"
                description={
                  <>
                    <p>1984</p>
                  </>
                }
              />
              <Contact
                title="Membership"
                icon={<Users size={24} />}
                iconColor="text-[#D4AF37]"
                description={
                  <>
                    <p>8 Member Countries</p>
                  </>
                }
              />
              <Contact
                title="Affiliation"
                icon={<Award size={24} />}
                iconColor="text-[#7e22ce]"
                description={
                  <>
                    <p>Asian Athletics Association & World Athletics</p>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <StatisticsSection stats={stats} />

        <div className=" mb-10 p-10 text-gray-600 rounded-2xl ">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl text-black font-bold">About SAAF</span>
          </div>
          The South Asian Athletics Federation (SAAF) is the regional governing
          body for athletics in South Asia, operating under the Asian Athletics
          Association. Established in 1984, SAAF serves as a platform for
          athletic cooperation and competition among the eight South Asian
          nations.
          <br /> <br /> SAAF organizes the South Asian Athletics Championships
          and other regional competitions, providing crucial competitive
          opportunities for athletes from the region. The federation plays a
          vital role in developing athletics at the grassroots level and
          preparing athletes for continental and global competitions.
          <br /> <br />
          Despite limited resources compared to other Asian regions, SAAF has
          made significant strides in promoting athletics across South Asia. The
          federation focuses on youth development, coaching education, and
          creating pathways for talented athletes to reach international
          standards.
        </div>

        <div className="flex justify-around gap-4">
          <MissionCard
            title="Mission"
            icon={<Target size={24} className="text-white" />}
            iconBgClass="bg-gradient-to-b from-[#D4AF37] to-[#B8941F]"
            description={
              <>
                To promote and develop athletics across South Asia through
                regional cooperation, organize competitive events, and provide
                platforms for athletes to excel at national, continental, and
                international levels.
              </>
            }
            bulletPoints={[
              "Foster regional cooperation in athletics development",
              "Organize quality regional competitions",
              "Support grassroots athletics programs",
            ]}
            bulletIcon={<CircleCheckBig size={20} className="text-[#00704A]" />}
          />

          <FeatureCard
            title="Key Priorities"
            icon={<TrendingUp size={24} className="text-white" />}
            iconGradient="bg-gradient-to-b from-[#00704A] to-[#005239]"
            items={[
              {
                title: "Regional Unity",
                description: "Strengthen bonds through sport and shared goals",
              },
              {
                title: "Talent Development",
                description: "Identify and nurture young athletic talent",
              },
              {
                title: "Technical Excellence",
                description: "Improve coaching and training standards",
              },
              {
                title: "International Readiness",
                description:
                  "Prepare athletes for Asian and World competitions",
              },
            ]}
          />
        </div>
        <CoreValuesSection coreValues={coreValues} />

        <div className="flex flex-col items-center bg-secondary shadow-sm rounded-2xl border-gray-200 p-8">
          <div className="text-2xl font-bold mt-4 mb-6">
            Bangladesh & World Athletics
          </div>
          <div className="text-center text-gray-600 mb-6">
            Bangladesh Athletics Federation has been a proud member of World
            Athletics since 1972, shortly after the country's independence. This
            membership has enabled Bangladeshi athletes to compete on the world
            stage and benefit from international development programs.
            <br />
            <br />
            Through World Athletics' development initiatives, Bangladesh has
            received support in coaching education, technical expertise, and
            infrastructure development. The federation actively participates in
            World Athletics competitions and regional meets, contributing to the
            global athletics community.
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
              Visit the official World Athletics website for news, results, and
              resources
            </>
          }
          backgroundClass="bg-gradient-to-b from-[#00704A] to-[#005239]"
          buttons={[
            {
              label: "Visit World Athletics",
              variant: "filled",
              onClick: () => console.log("Apply clicked"),
            },
          ]}
        />
      </div>
    </div>
  );
}
