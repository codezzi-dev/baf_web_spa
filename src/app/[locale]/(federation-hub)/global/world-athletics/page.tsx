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
    pageTopTag: "International Governing Body",
    pageTopTitle: "World Athletics",
    pageTopSummary:
      "The international governing body for the sport of athletics, overseeing track and field, cross country running, road running, race walking, mountain running, and ultra running",
  };

  const stats = [
    {
      value: "214",
      label: "Member Nations",
    },
    {
      value: "112",
      label: "Year Of History",
    },
    {
      value: "2000+",
      label: "Annual Events",
    },
    {
      value: "50M+",
      label: "Gloabal Athletes",
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
                    <p>Monaco</p>
                  </>
                }
              />
              <Contact
                title="Founded"
                icon={<CalendarRange size={24} />}
                iconColor="text-[#C1272D]"
                description={
                  <>
                    <p>July 17, 1912 (as IAAF)</p>
                  </>
                }
              />
              <Contact
                title="Membership"
                icon={<Users size={24} />}
                iconColor="text-[#D4AF37]"
                description={
                  <>
                    <p>214 Member Federations</p>
                  </>
                }
              />
              <Contact
                title="President"
                icon={<Award size={24} />}
                iconColor="text-[#7e22ce]"
                description={
                  <>
                    <p>Sebastian Coe</p>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <StatisticsSection stats={stats} />

        <div className=" mb-10 p-10 text-gray-600 rounded-2xl ">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl text-black font-bold">
              About World Athletics
            </span>
          </div>
          World Athletics, formerly known as the International Association of
          Athletics Federations (IAAF), is the international governing body for
          the sport of athletics. Founded in 1912, it oversees and regulates all
          aspects of track and field, cross country, road running, race walking,
          mountain running, and ultra running worldwide.
          <br /> <br /> The organization is responsible for the rules and
          regulations of athletics, organizing major international competitions
          including the World Athletics Championships, World Indoor
          Championships, World Cross Country Championships, and World Half
          Marathon Championships. It also manages the qualification process and
          technical standards for athletics at the Olympic Games.
          <br /> <br />
          World Athletics works to develop the sport at all levels, from
          grassroots participation to elite competition, and promotes athletics
          as one of the most accessible and inclusive sports globally. The
          organization is committed to maintaining the integrity of competition
          through robust anti-doping programs and technological innovations in
          timing and measurement.
        </div>

        <div className="flex justify-around gap-4">
          <MissionCard
            title="Mission"
            icon={<Target size={24} className="text-white" />}
            iconBgClass="bg-gradient-to-b from-[#00704A] to-[#005239]"
            description={
              <>
                To be the world leader of an independent and democratic sport
                respected for its integrity, social responsibility, diversity
                and quality.
              </>
            }
            bulletPoints={[
              "Inspire participation in athletics worldwide",
              "Maintain integrity and credibility of competition",
              "Promote athletics as a force for good",
            ]}
            bulletIcon={<CircleCheckBig size={20} className="text-[#00704A]" />}
          />

          <FeatureCard
            title="Key Priorities"
            icon={<TrendingUp size={24} className="text-white" />}
            iconGradient="bg-gradient-to-b from-[#C1272D] to-[#A01F25]"
            items={[
              {
                title: "Clean Sport",
                description:
                  "Leading the fight against doping with rigorous testing programs",
              },
              {
                title: "Development",
                description:
                  "Supporting member federations to grow athletics globally",
              },
              {
                title: "Innovation",
                description:
                  "Embracing technology to enhance sport and fan experience",
              },
              {
                title: "Sustainability",
                description:
                  "Promoting environmentally responsible sporting events",
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
