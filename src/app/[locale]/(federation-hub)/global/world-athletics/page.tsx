"use client";

import PageHero from "@/components/common/PageHero";
import Contact from "@/components/common/Contact";
import StatisticsSection from "@/components/common/StatisticsSection";
import StatCard from "@/components/Card/StatCard";
import MissionCard from "@/components/Card/MissionCard";
import ChampCard from "@/components/Card/ChampionshipCard";
import FeatureCard from "@/components/Card/FeatureCard";
import Footer from "@/components/common/PageFooter2";

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

  const stats2 = [
    {
      value: "52",
      label: "Years of Membership",
      color: "#D4AF37",
    },
    {
      value: "100+",
      label: "Athletes Registered",
      color: "#00704A",
    },
    {
      value: "50+",
      label: "International Events",
      color: "#C1272D",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <PageHero pageGenericElements={pageGenericElements} />
        {/* Contact section */}
        <div className="relative mb-10 p-6 md:p-10 text-gray-600 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tag-green via-tag-red to-tag-yellow" />

          <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-8">
            <div className="bg-secondary rounded-2xl p-6 md:p-8 shadow-xl flex justify-center items-center md:m-4">
              <Globe
                size={96}
                className="md:w-[128px] md:h-[128px]"
                color="#00704A"
              />
            </div>

            <div className="w-full md:w-160">
              <Contact
                title="Headquarters"
                icon={<MapPin size={24} />}
                iconColor="text-tag-green"
                description={<p>Monaco</p>}
              />

              <Contact
                title="Founded"
                icon={<CalendarRange size={24} />}
                iconColor="text-tag-red"
                description={<p>July 17, 1912 (as IAAF)</p>}
              />

              <Contact
                title="Membership"
                icon={<Users size={24} />}
                iconColor="text-tag-yellow"
                description={<p>214 Member Federations</p>}
              />

              <Contact
                title="President"
                icon={<Award size={24} />}
                iconColor="text-tag-purple"
                description={<p>Sebastian Coe</p>}
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
            iconBgClass="bg-gradient-to-b from-tag-green to-tag-greenDark"
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
            bulletIcon={<CircleCheckBig size={20} className="text-tag-green" />}
          />

          <FeatureCard
            title="Key Priorities"
            icon={<TrendingUp size={24} className="text-white" />}
            iconGradient="bg-gradient-to-b from-tag-red to-tag-redDark"
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
        <ChampCard
          title="Our Strategic"
          highlightedText="Objectives"
          highlightColorClass="text-tag-red"
          items={[
            {
              title: "Professional Development",
              icon: <Award size={28} />,
              showFrequency: false,
              showDesc: true,
              desc: "Continuous education and certification programs for coaches at all levels",
              showNextEdition: false,
            },
            {
              title: "Community Building",
              icon: <Award size={28} />,
              showFrequency: false,
              showDesc: true,
              desc: "Foster collaboration and knowledge sharing among athletics coaches nationwide",
              showNextEdition: false,
            },
            {
              title: "Standards & Ethics",
              icon: <Award size={28} />,
              showFrequency: false,
              showDesc: true,
              desc: "Establish and maintain high coaching standards and ethical practices",
              showNextEdition: false,
            },
            {
              title: "Performance Excellence",
              icon: <TrendingUp size={28} />,
              showFrequency: false,
              showDesc: true,
              desc: "Enhance coaching methodologies to improve athlete performance and success",
              showNextEdition: false,
            },
            {
              title: "Coaching Education",
              icon: <Award size={28} />,
              showFrequency: false,
              showDesc: true,
              desc: "Provide accessible education and resources for aspiring and current coaches",
              showNextEdition: false,
            },
            {
              title: "Recognition & Support",
              icon: <Award size={28} />,
              showFrequency: false,
              showDesc: true,
              desc: "Acknowledge achievements and provide support systems for coaching professionals",
              showNextEdition: false,
            },
          ]}
        />

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
          <StatCard states={stats2} />
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
          backgroundClass="bg-gradient-to-b from-tag-green to-tag-greenDark"
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
