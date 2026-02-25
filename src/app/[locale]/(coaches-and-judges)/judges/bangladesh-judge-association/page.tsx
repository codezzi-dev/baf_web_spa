"use client";

import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Users,
  Mail,
  Phone,
  Award,
  Shield,
  Briefcase,
} from "lucide-react";

import DynamicHeading from "@/components/Home/HeadingComponent";
import Loading from "@/components/common/Loading";
import MissionVissionSection, {
  MissionVision,
} from "@/components/about-us/mission-vision/MissionVisionSection";
import StatisticsSection from "@/components/common/StatisticsSection";
import CoreValuesSection, {
  CoreValues,
} from "@/components/about-us/mission-vision/CoreValuesSection";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";

/* -------------------- SAME DUMMY IMPORTS -------------------- */

import monirul_islam from "@/assets/images/organizational-people/monirul_islam.jpg";
import nayeem from "@/assets/images/organizational-people/nayeem.jpg";
import abdun_naser_khan from "@/assets/images/organizational-people/abdun-naser-khan.png";
import iqbal_hossain from "@/assets/images/organizational-people/iqbal_hossain.jpg";
import shah_alom from "@/assets/images/organizational-people/shah_alam.jpg";

/* -------------------- KEEP FULL MEMBER STRUCTURE -------------------- */

const judgeMembers = [
  {
    id: 1,
    full_name: "Major General (Retd.) Dr Md Nayeem Ashfaque Chowdhury",
    category: ["executive"],
    position: "Chief Judge",
    email: "arif.hossain@example.com",
    phone: "+8801743-487255",
    image: nayeem,
    bio: "Leading national judging standards and technical supervision.",
    achievements: [
      "Established national officiating guidelines",
      "Improved rule enforcement systems",
    ],
  },
  {
    id: 2,
    full_name: "Brigadier General Md. Monirul Islam",
    category: ["technical"],
    position: "Technical Lead",
    email: "farzana.ahmed@example.com",
    phone: "+8801711000002",
    image: monirul_islam,
    bio: "Ensures compliance with international judging standards.",
    achievements: [
      "Modernized event supervision",
      "Introduced technical review system",
    ],
  },
  {
    id: 3,
    full_name: "Abdun Naser Khan",
    category: ["finance", "sponsor"],
    position: "Finance Coordinator",
    email: "rukhsana.begum@example.com",
    phone: "+8801711000018",
    image: abdun_naser_khan,
    bio: "Manages funding and sponsorship coordination.",
    achievements: ["Secured event sponsorship", "Optimized financial workflow"],
  },
  {
    id: 4,
    full_name: "Md. Iqbal Hossain",
    category: ["technical"],
    position: "Senior Judge",
    email: "tanvir.alam@example.com",
    phone: "+8801945-239748",
    image: iqbal_hossain,
    bio: "Supports rule interpretation and technical coordination.",
    achievements: ["Trained regional judges", "Improved technical accuracy"],
  },
  {
    id: 5,
    full_name: "Md Shah Alam",
    category: ["operations"],
    position: "Operations Member",
    email: "rafiq.hasan@example.com",
    phone: "+8801711-401018",
    image: shah_alom,
    bio: "Supports administrative coordination and event planning.",
    achievements: [
      "Streamlined coordination process",
      "Improved event logistics",
    ],
  },
];

/* -------------------- CATEGORY INFO (KEPT STRUCTURE) -------------------- */

const categoryInfo = {
  all: {
    color: "from-[#00704A] to-[#005239]",
    icon: Shield,
  },
  executive: {
    color: "from-[#00704A] to-[#005239]",
    icon: Users,
  },
  technical: {
    color: "from-[#C1272D] to-[#A01F25]",
    icon: Award,
  },
  finance: {
    color: "from-[#D4AF37] to-[#B8941F]",
    icon: Briefcase,
  },
  sponsor: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
  operations: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
} as const;

/* -------------------- MISSION / VISION (REWRITTEN FOR JUDGES) -------------------- */

const judgeAssociationCompass: MissionVision = {
  option: [
    {
      icon: "Users",
      title: "Our Mission",
      description:
        "To develop and maintain professional athletics officiating standards through training, certification, and ethical governance across Bangladesh.",
      tags: ["Integrity", "Fair Play", "Standards"],
      color: "tag-green",
    },
    {
      icon: "Target",
      title: "Our Vision",
      description:
        "To become the leading authority for athletics officiating excellence and technical regulation in Bangladesh.",
      tags: ["Leadership", "Excellence", "Authority"],
      color: "tag-red",
    },
  ],
};

/* -------------------- CORE VALUES (JUDGE FOCUSED) -------------------- */

const judgeCoreValues: CoreValues = {
  title: "Our Core Objectives",
  description:
    "Guiding principles that shape professional athletics officiating in Bangladesh.",
  values: [
    {
      icon: "Shield",
      title: "Integrity",
      description: "Maintain impartial decision-making in competitions.",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Award",
      title: "Technical Accuracy",
      description:
        "Ensure correct interpretation and application of athletics rules.",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Users",
      title: "Professional Development",
      description:
        "Continuous training and certification for registered judges.",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Briefcase",
      title: "Accountability",
      description:
        "Uphold responsibility in officiating decisions and event management.",
      color: "from-[#00704A] to-[#005239]",
    },
  ],
};

/* -------------------- STATS -------------------- */

const stats = [
  { value: "80+", label: "Certified Judges" },
  { value: "8", label: "Divisions" },
  { value: "20+", label: "National Events" },
  { value: "15+", label: "Years Legacy" },
];

/* -------------------- PAGE -------------------- */

const BangladeshJudgeAssociationPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-40">
        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00704A]/10 to-[#C1272D]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00704A]" />
            <span className="text-sm font-semibold text-[#00704A]">
              Bangladesh Athletics
            </span>
          </div>

          <DynamicHeading
            title="Bangladesh Athletics Judge Association"
            className="text-4xl lg:text-6xl font-bold"
          />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to maintaining fairness, integrity, and professional
            standards in athletics officiating across Bangladesh.
          </p>
        </div>

        {/* STATS */}
        <div className="pb-16 text-center">
          <StatisticsSection stats={stats} />
        </div>

        {/* OVERVIEW */}
        <div className="mb-10 p-10 text-gray-600 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-b from-[#00704A] to-[#005239] w-12 h-12 rounded-full flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-2xl text-black font-bold">Overview</span>
          </div>
          The Bangladesh Athletics Judge Association (BAJA) is responsible for
          developing professional officiating standards and ensuring fair
          competition management across national athletics events.
          <br />
          <br />
          Through structured training programs and certification systems, we
          promote technical excellence and accountability among registered
          judges.
        </div>

        {/* MISSION & VISION */}
        <MissionVissionSection missionVision={judgeAssociationCompass} />

        {/* CORE VALUES */}
        <CoreValuesSection coreValues={judgeCoreValues} />

        {/* EXECUTIVE / MEMBERS */}
        <div className="rounded-2xl p-12">
          <div className="flex justify-center mb-10 gap-1">
            <div className="font-bold text-black text-3xl">Executive</div>
            <div className="font-bold text-tag-green text-3xl">Committee</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judgeMembers.map((member) => {
              const colorKey =
                (member.category?.[0] as keyof typeof categoryInfo) || "all";

              const cat = categoryInfo[colorKey] ?? categoryInfo.all;

              return (
                <Card
                  key={member.id}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="h-80 relative">
                    {member.image && (
                      <img
                        src={member.image.src}
                        alt={member.full_name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    <div className="absolute bottom-4 left-4">
                      <Badge
                        className={`bg-gradient-to-r ${cat.color} text-white border-none px-2 py-1 rounded-2xl`}
                      >
                        {member.position}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      {member.full_name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                    {member.achievements && (
                      <ul className="text-xs text-gray-600 space-y-1 mb-4">
                        {member.achievements.map((a, i) => (
                          <li key={i}>• {a}</li>
                        ))}
                      </ul>
                    )}

                    <div className="space-y-2">
                      {member.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-[#00704A]" />
                          <a
                            href={`mailto:${member.email}`}
                            className="hover:text-[#00704A]"
                          >
                            {member.email}
                          </a>
                        </div>
                      )}

                      {member.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-[#C1272D]" />
                          <a href={`tel:${member.phone}`}>{member.phone}</a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* JOIN SECTION */}
        <div className="mt-16 p-4 bg-gradient-to-b from-[#00704A] to-[#005239] rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="text-white mt-6">
              <Users size={48} />
            </div>

            <div className="font-bold text-white m-3 text-3xl">
              Become a Registered Judge
            </div>

            <div className="text-center text-white m-3 text-lg">
              Join the national officiating network and contribute to fair
              athletics competitions.
            </div>

            <div className="flex justify-center gap-4 my-6">
              <button className="bg-background rounded-2xl p-4 text-[#00704A] hover:bg-accent">
                Apply for Certification
              </button>

              <button className="rounded-2xl p-4 text-white border-2 border-white hover:bg-white/20">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshJudgeAssociationPage;
