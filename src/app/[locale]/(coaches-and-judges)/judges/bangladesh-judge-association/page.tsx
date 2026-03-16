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

import monirul_islam from "@/assets/images/organizational-people/monirul_islam.jpg";
import nayeem from "@/assets/images/organizational-people/nayeem.jpg";
import abdun_naser_khan from "@/assets/images/organizational-people/abdun-naser-khan.png";
import iqbal_hossain from "@/assets/images/organizational-people/iqbal_hossain.jpg";
import shah_alom from "@/assets/images/organizational-people/shah_alam.jpg";
import kitab_ali from "@/assets/images/organizational-people/kitab_ali.jpg";

const dummyMembers = [
  {
    id: 1,
    full_name: "Major General (Retd.) Dr Md Nayeem Ashfaque Chowdhury",
    category: ["executive"],
    position: "President",
    email: "arif.hossain@example.com",
    phone: "+8801743-487255",
    photo_url:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    image: nayeem,
    bio: "Leading the Bangladesh Athletics Federation with a focus on development and excellence.",
    achievements: ["Led national sports program", "Increased funding by 30%"],
  },
  {
    id: 2,
    full_name: "Brigadier General Md. Monirul Islam ",
    category: ["futurePlanning"],
    position: "Vice-President",
    email: "farzana.ahmed@example.com",
    phone: "+8801711000002",
    photo_url:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    image: monirul_islam,
    bio: "Oversees operational efficiency and compliance across departments.",
    achievements: ["Implemented digital systems", "Improved logistics chain"],
  },
  {
    id: 3,
    full_name: "Abdun Naser Khan",
    category: ["finance", "sponsor"],
    position: "Vice-President",
    email: "rukhsana.begum@example.com",
    phone: "+8801711000018",
    photo_url: "https://randomuser.me/api/portraits/women/39.jpg",
    image: abdun_naser_khan,
    bio: "Leads marketing campaigns and brand development.",
    achievements: [
      "Secured national sponsorship deal",
      "Increased brand engagement by 45%",
    ],
  },
  {
    id: 4,
    full_name: "Md. Iqbal Hossain",
    category: [
      "inventory",
      "media",
      "trainingSelection",
      "evaluation",
      "tenderEvaluation",
    ],
    position: "Vice-President",
    email: "tanvir.alam@example.com",
    phone: "+8801945-239748",
    photo_url: "https://randomuser.me/api/portraits/men/24.jpg",
    image: iqbal_hossain,
    bio: "Coaching national athletes with innovative training strategies.",
    achievements: [
      "Trained 5 national champions",
      "Introduced AI-driven performance analysis",
    ],
  },
  {
    id: 5,
    full_name: "Md. Shah Alam",
    category: ["calendar", "trainingSelection"],
    position: "General Secretary",
    email: "rafiq.hasan@example.com",
    phone: "+8801711-401018",
    photo_url: "",
    image: shah_alom,
    bio: "Handles day-to-day management and coordination within the federation.",
    achievements: [
      "Optimized internal workflows",
      "Reduced operational costs by 20%",
    ],
  },
  {
    id: 6,
    full_name: "Md Kitab Ali",
    category: [
      "calendar",
      "trainingSelection",
      "futurePlanning",
      "tenderEvaluation",
    ],
    position: "Joint-Secretary",
    email: "nadia.rahman@example.com",
    phone: "+8801843-936782",
    photo_url: "https://randomuser.me/api/portraits/women/33.jpg",
    image: kitab_ali,
    bio: "Supports strategic initiatives and athlete welfare programs.",
    achievements: [
      "Established athlete mentorship programs",
      "Expanded outreach initiatives",
    ],
  },
];

const categoryInfo = {
  all: {
    color: "from-[#00704A] to-[#005239]",
    icon: Shield,
  },
  finance: {
    color: "from-[#00704A] to-[#005239]",
    icon: Shield,
  },
  inventory: {
    color: "from-[#C1272D] to-[#A01F25]",
    icon: Users,
  },
  calendar: {
    color: "from-[#D4AF37] to-[#B8941F]",
    icon: Award,
  },
  sponsor: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
  media: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
  trainingSelection: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
  evaluation: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
  futurePlanning: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
  tenderEvaluation: {
    color: "from-[#00704A] to-[#005239]",
    icon: Briefcase,
  },
} as const;

const coachAssociationCompass: MissionVision = {
  option: [
    {
      icon: "Users",
      title: "Our Mission",
      description:
        "To empower and unite athletics coaches across Bangladesh through professional development, ethical leadership, and collaborative excellence, ensuring every athlete receives world-class coaching that enables them to reach their full potential.",
      tags: ["Coaches", "Development", "Standards"],
      color: "tag-green",
    },
    {
      icon: "Target",
      title: "Our Vision",
      description:
        "To be recognized as South Asia's leading athletics coaching organization, producing internationally certified coaches who consistently develop world-class athletes and contribute to Bangladesh's prominence in global athletics competitions.",
      tags: ["Performance", "Collaboration", "Impact"],
      color: "tag-red",
    },
  ],
};

const coreValues: CoreValues = {
  title: "Our Strategic Objectives",
  description:
    "Six core objectives guiding our mission to elevate coaching standards and athlete performance across Bangladesh",
  values: [
    {
      icon: "Award",
      title: "Professional Development",
      description:
        "Continuous education and certification programs for coaches at all levels",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Users",
      title: "Community Building",
      description:
        "Foster collaboration and knowledge sharing among athletics coaches nationwide",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "Disk2",
      title: "Standards & Ethics",
      description:
        "Establish and maintain high coaching standards and ethical practices",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "TrendingUp",
      title: "Performance Excellence",
      description:
        "Enhance coaching methodologies to improve athlete performance and success",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "GraduationCap",
      title: "Coaching Education",
      description:
        "Provide accessible education and resources for aspiring and current coaches",
      color: "from-[#00704A] to-[#005239]",
    },
    {
      icon: "CircleCheckBig",
      title: "Recognition & Support",
      description:
        "Acknowledge achievements and provide support systems for coaching professionals",
      color: "from-[#00704A] to-[#005239]",
    },
  ],
};

const stats = [
  {
    value: "50+",
    label: "Qualified Judges",
  },
  {
    value: "8",
    label: "Divisions",
  },
  {
    value: "12",
    label: "Specializations",
  },
  {
    value: "25+",
    label: "Years Legacy",
  },
];

const BangladeshJudgeAssociationPage = () => {
  // Keeping loading behavior like your other pages (but no API fetch here)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake loader so you can see Loading component briefly (remove anytime)
    const t = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-40">
        {/* Hero Section */}
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

        <div className="pb-16 text-center">
          <StatisticsSection stats={stats} />
        </div>

        <div className=" mb-10 p-10 text-gray-600 rounded-2xl ">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-b from-[#00704A] to-[#005239] w-12 h-12 rounded-full flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-2xl text-gray-500 font-bold">Overview</span>
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

        {/* Cards Section */}
        <MissionVissionSection missionVision={coachAssociationCompass} />

        <CoreValuesSection coreValues={coreValues} />
        <div className="rounded-2xl p-12 ">
          <div className="flex justify-center align-center mb-10 gap-1">
            <div className="font-bold text-black text-3xl">Executive</div>
            <div className="font-bold text-tag-green text-3xl">Committee</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-center">
            Our Qualified Judges
          </p>
          <div>
            {dummyMembers?.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyMembers.map((member) => {
                  const colorKey = (member.category?.[0] ??
                    "all") as keyof typeof categoryInfo;
                  const cat = categoryInfo[colorKey] ?? categoryInfo.all;

                  return (
                    <Card
                      key={member.id}
                      className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                    >
                      {/* Photo */}
                      <div className="h-80 bg-gradient-to-br from-white-100 to-white-200 relative overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image?.src}
                            alt={member.full_name}
                            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <div
                              className={`w-28 h-28 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}
                            >
                              <span className="text-4xl font-semibold text-white">
                                {member.full_name?.charAt(0)}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge
                            className={`bg-gradient-to-r ${cat.color} text-white border-none px-2 py-1 rounded-2xl`}
                          >
                            {member.position}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#2D3436] mb-3">
                          {member.full_name}
                        </h3>

                        {member.bio && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {member.bio}
                          </p>
                        )}

                        {member.achievements?.length > 0 && (
                          <div className="mb-4 pb-4 border-b border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Award className="w-4 h-4 text-[#D4AF37]" />
                              <span className="text-sm font-semibold text-gray-700">
                                Key Achievements
                              </span>
                            </div>

                            <ul className="space-y-1">
                              {member.achievements.slice(0, 2).map((a, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                                  <span className="line-clamp-1">{a}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="space-y-2">
                          {member.email && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4 text-[#00704A]" />
                              <a
                                href={`mailto:${member.email}`}
                                className="hover:text-[#00704A] transition-colors"
                              >
                                {member.email}
                              </a>
                            </div>
                          )}

                          {member.phone && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4 text-[#C1272D]" />
                              <a
                                href={`tel:${member.phone}`}
                                className="hover:text-[#C1272D] transition-colors"
                              >
                                {member.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="border-none shadow-lg">
                <CardContent className="p-16 text-center">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No members found</p>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="mt-16 p-4 bg-gradient-to-b from-[#00704A] to-[#005239] rounded-2xl">
            <div className="flex flex-col items-center">
              <div className="text-[#e5e7eb] mt-6">
                <Users size={48} />
              </div>
              <div className="font-bold text-white m-3 text-3xl">
                Join Our Community
              </div>
              <div className="text-center text-white m-3 text-lg">
                Become a member of Bangladesh's premier athletics coaching
                association and <br /> access exclusive resources, training, and
                networking opportunities
              </div>
              <div className="flex justify-center gap-4 my-6">
                <div>
                  <button className="bg-background rounded-2xl p-4 text-[#00704A] hover:bg-accent">
                    Apply for Membership
                  </button>
                </div>
                <div>
                  <button className="rounded-2xl p-4 text-white border-2 border-white hover:bg-white/20">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshJudgeAssociationPage;
