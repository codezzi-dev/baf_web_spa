"use client";

import PageHero from "@/components/common/PageHero";
import Contact from "@/components/common/Contact";
import StatisticsSection from "@/components/common/StatisticsSection";
import StatCard from "@/components/Card/StatCard";
import MissionCard from "@/components/Card/MissionCard";
import FeatureCard from "@/components/Card/FeatureCard";
import Footer from "@/components/common/PageFooter2";
import ChampCard from "@/components/Card/ChampionshipCard";
import Region from "@/components/common/RegionCard";
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
        {/* Contact Section */}
        <div className="relative mb-10 p-6 md:p-10 text-gray-600 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tag-green via-tag-red to-tag-yellow" />
          <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-8">
            <div className="bg-tag-red/30 rounded-2xl p-6 md:p-8 shadow-xl flex justify-center items-center md:m-4">
              <MapPin
                size={96}
                className="md:w-[128px] md:h-[128px]"
                color="#C1272D"
              />
            </div>
            <div className="w-full md:w-160">
              <Contact
                title="Headquarters"
                icon={<MapPin size={24} />}
                iconColor="text-tag-green"
                description={<p>Singapore</p>}
              />

              <Contact
                title="Founded"
                icon={<CalendarRange size={24} />}
                iconColor="text-tag-red"
                description={<p>November 26, 1973</p>}
              />

              <Contact
                title="Membership"
                icon={<Users size={24} />}
                iconColor="text-tag-yellow"
                description={<p>45 Member Federations</p>}
              />

              <Contact
                title="President"
                icon={<Award size={24} />}
                iconColor="text-tag-purple"
                description={<p>Dahlan Jumaan Al Hamad (Qatar)</p>}
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
            iconBgClass="bg-gradient-to-b from-tag-green to-tag-greenDark"
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
            bulletIcon={<CircleCheckBig size={20} className="text-tag-green" />}
          />

          <FeatureCard
            title="Key Priorities"
            icon={<TrendingUp size={24} className="text-white" />}
            iconGradient="bg-gradient-to-b from-tag-red to-tag-redDark"
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

        <ChampCard
          title="Major"
          highlightedText="Championships"
          highlightColorClass="text-tag-red"
          items={[
            {
              title: "Asian Athletics Championships",
              icon: <Award size={28} />,
              showFrequency: true,
              frequency: "Biennial",
              showNextEdition: true,
              nextEdition: "2025",
            },
            {
              title: "Asian Indoor Championships",
              icon: <Award size={28} />,
              showFrequency: true,
              frequency: "Biennial",
              showNextEdition: true,
              nextEdition: "2026",
            },
            {
              title: "Asian Cross Country Championships",
              icon: <Award size={28} />,
              showFrequency: true,
              frequency: "Annual",
              showNextEdition: true,
              nextEdition: "2025",
            },
            {
              title: "Asian Race Walking Championships",
              icon: <Award size={28} />,
              showFrequency: true,
              frequency: "Biennial",
              showNextEdition: true,
              nextEdition: "2026",
            },
            {
              title: "Asian Youth Championships",
              icon: <Award size={28} />,
              showFrequency: true,
              frequency: "Biennial",
              showNextEdition: true,
              nextEdition: "2025",
            },
            {
              title: "Asian Junior Championships",
              icon: <Award size={28} />,
              showFrequency: true,
              frequency: "Biennial",
              showNextEdition: true,
              nextEdition: "2026",
            },
          ]}
        />

        <Region
          title="Regional"
          highlightedText="Zones"
          highlightColorClass="text-tag-red"
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
          <StatCard states={stats2} />
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
          backgroundClass="bg-gradient-to-b from-tag-red to-tag-redDark"
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
