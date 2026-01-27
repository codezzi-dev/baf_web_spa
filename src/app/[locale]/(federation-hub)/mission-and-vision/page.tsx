"use client";
import React from "react";
import {
  Sparkles,
  Zap,
} from "lucide-react";
import DynamicHeading from "@/components/Home/HeadingComponent";
import MissionVissionSection, { MissionVision } from "@/components/about-us/mission-vision/MissionVisionSection";
import CoreValuesSection, { CoreValues } from "@/components/about-us/mission-vision/CoreValuesSection";
import StrategicObjectivesSection, { StrategicObjectives } from "@/components/about-us/mission-vision/StrategicObjectivesSection";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import { useGetAllMissionVisions } from "@/api/hooks/the-federation/mission-vision";

const compass: MissionVision = {
  option: [
    {
      icon: "Target",
      title: "Our Mission",
      description: "To develop, promote, and elevate athletics in Bangladesh by providing world-class training,competitive opportunities, and support systems that enable our athletes to achieve excellence at national and international levels. We are committed to fostering a culture of sportsmanship, integrity, and continuous improvement while ensuring athletics is accessible to all Bangladeshis, regardless of background or circumstance.",
      tags: ["Development", "Excellence", "Accessibility"],
      color: "tag-green",
    },
    {
      icon: "Eye",
      title: "Our Vision",
      description: "To be recognized as a leading athletics federation in South Asia, producing world-class athletes who compete at the highest levels including the Olympic Games and World Championships.We envision a Bangladesh where athletics is celebrated, supported, and serves as a source of national pride, inspiring future generations to pursue excellence in sports and life.",
      tags: ["Leadership", "Pride", "Inspiration"],
      color: "tag-red",
    }
  ]
}
const coreValues: CoreValues = {
  title: "Core Values",
  description: "The fundamental principles that guide our decisions, actions, and interactions",
  values: [
    {
      icon: "Trophy",
      title: "Excellence",
      description: "Pursuing the highest standards in training, competition, and sportsmanship",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Heart",
      title: "Integrity",
      description: "Upholding honesty, fairness, and ethical conduct in all our activities",
      color: "from-[#C1272D] to-[#A01F25]",
    },
    {
      icon: "Users",
      title: "Inclusivity",
      description: "Creating opportunities for all athletes regardless of background or ability",
      color: "from-[#D4AF37] to-[#B8941F]",
    },
    {
      icon: "TrendingUp",
      title: "Development",
      description: "Continuous improvement through innovation, education, and dedication",
      color: "from-[#D4AF37] to-[#B8941F]",
    },
    {
      icon: "Shield",
      title: "Safety",
      description: "Ensuring athlete wellbeing and promoting clean, fair competition",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Globe",
      title: "Unity",
      description: "Building a strong athletics community that represents Bangladesh with pride",
      color: "from-[#C1272D] to-[#A01F25]",
    },
  ]
};
const strategicObjectives: StrategicObjectives = {
  title: "Strategic Objectives",
  description: "Key focus areas driving our mission forward",
  objectives: [
    {
      icon: "Target",
      title: "Talent Identification & Development",
      points: [
        "Implement nationwide grassroots programs",
        "Establish regional training centers",
        "Create clear athlete progression pathways",
        "Provide world-class coaching and facilities",
      ],
    },
    {
      icon: "Award",
      title: "Competitive Excellence",
      points: [
        "Win medals at South Asian Games",
        "Qualify athletes for Olympic Games",
        "Break national and regional records",
        "Develop podium-ready athletes",
      ],
    },
    {
      icon: "BookOpen",
      title: "Education & Awareness",
      points: [
        "Conduct anti-doping education programs",
        "Provide sports science knowledge",
        "Offer career guidance for athletes",
        "Promote healthy lifestyle choices",
      ],
    },
    {
      icon: "Users",
      title: "Community Engagement",
      points: [
        "Partner with schools and universities",
        "Organize public athletics events",
        "Build fan and supporter communities",
        "Increase media coverage and visibility",
      ],
    },
  ]
};

const MissionAndVision = () => {
  const { data, error, isLoading } = useGetAllMissionVisions();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  data && console.log(data)
  // const historyContent = data?.data?.historyContent;
  // const historyMilestones = data?.data?.historyMilestones;
  // const pageGenericElements = data?.data?.pageGenericElements;
  return (
    <div className="bg-[#F2F0EF]">
      <div className="py-16 px-4 lg:px-0 pt-40 main_container ">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00704A]/10 to-[#C1272D]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00704A]" />
            <span className="text-sm font-semibold text-[#00704A]">Our Purpose</span>
          </div>

          <DynamicHeading title="Mission & Vision" className="text-4xl lg:text-6xl font-bold" />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guiding principles that drive our commitment to athletics excellence and the development of world-class
            athletes in Bangladesh
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <MissionVissionSection missionVision={compass} />

        {/* Core Values Section */}
        <CoreValuesSection coreValues={coreValues} />

        {/* Strategic Objectives Section */}
        <StrategicObjectivesSection strategicObjectives={strategicObjectives} />
      </div>
      <div>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#00704A] to-[#005239] text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <Zap className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold">Join Our Journey</h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Whether you're an aspiring athlete, coach, volunteer, or supporter, you have a place in our mission.
                  Together, we're building the future of Bangladesh athletics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionAndVision;
