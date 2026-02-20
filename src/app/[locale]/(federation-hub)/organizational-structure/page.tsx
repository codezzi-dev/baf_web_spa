"use client";

import React, { Suspense, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Mail, Phone, Award, Shield, Briefcase, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import DynamicHeading from "@/components/Home/HeadingComponent";

import monirul_islam from '@/assets/images/organizational-people/monirul_islam.jpg'
import nayeem from '@/assets/images/organizational-people/nayeem.jpg'
import abdun_naser_khan from '@/assets/images/organizational-people/abdun-naser-khan.png'
import iqbal_hossain from '@/assets/images/organizational-people/iqbal_hossain.jpg'
import shah_alom from '@/assets/images/organizational-people/shah_alam.jpg'
import kitab_ali from '@/assets/images/organizational-people/kitab_ali.jpg'
import mizanur_rahman from '@/assets/images/organizational-people/mizanur_rahman.jpeg'

import sabbir_mostofa from '@/assets/images/organizational-people/sabbir-mostafa-khan.png'
import muzibar_rahman_mollick from '@/assets/images/organizational-people/mujibur-rahman-mollick.jpg'
import farid_khan_chowdhury from '@/assets/images/organizational-people/farid-khan-chowdhury.jpg'
import firoja from '@/assets/images/organizational-people/firoja-khatun.png'
import sharmistha_roy from '@/assets/images/organizational-people/sharmistha-roy.png'
import nasir_ahmed from '@/assets/images/organizational-people/m-m-nazir-ahmed.jpg'
import shirin_akter from '@/assets/images/organizational-people/shirin-akter.png'
import mujibur_rahman from '@/assets/images/organizational-people/mujibur-rahman.jpg'
import riajul_islam from '@/assets/images/organizational-people/md-riajul-islam.png'
import touhidul_islam from '@/assets/images/organizational-people/colonel-md-touhidul-islam.png'
import nadiruzamman from '@/assets/images/organizational-people/commander-nadiruzzaman.png'
import ekramul_haque from '@/assets/images/organizational-people/wing-commander-md-ekramul-haque.png'




// const categoryInfo = {
//   executive: {
//     title: "Executive Board",
//     description: "Leadership and strategic direction",
//     icon: Shield,
//     color: "from-[#00704A] to-[#005239]",
//   },
//   board: {
//     title: "Board of Directors",
//     description: "Governance and oversight",
//     icon: Users,
//     color: "from-[#C1272D] to-[#A01F25]",
//   },
//   technical: {
//     title: "Technical Committee",
//     description: "Technical expertise and coaching",
//     icon: Award,
//     color: "from-[#D4AF37] to-[#B8941F]",
//   },
//   administrative: {
//     title: "Administrative Staff",
//     description: "Operations and management",
//     icon: Briefcase,
//     color: "from-[#00704A] to-[#005239]",
//   },
// };


const categoryInfo = {
  all: {
    title: "Core-Leadership",
    description: "Core Leadership and strategic direction",
    icon: Shield,
    color: "from-[#00704A] to-[#005239]",
  },
  finance: {
    title: "Finance Board",
    description: "Leadership and strategic direction",
    icon: Shield,
    color: "from-[#00704A] to-[#005239]",
  },
  inventory: {
    title: "Inventory of Directors",
    description: "Governance and oversight",
    icon: Users,
    color: "from-[#C1272D] to-[#A01F25]",
  },
  calendar: {
    title: "Calendar Committee",
    description: "Technical expertise and coaching",
    icon: Award,
    color: "from-[#D4AF37] to-[#B8941F]",
  },
  sponsor: {
    title: "Sponsor Staff",
    description: "Operations and management",
    icon: Briefcase,
    color: "from-[#00704A] to-[#005239]",
  },
  media: {
    title: "Media Committee",
    description: "Operations and management",
    icon: Briefcase,
    color: "from-[#00704A] to-[#005239]",
  },
  trainingSelection: {
    title: "Training & Selection",
    description: "Training programs and selection process",
    icon: Briefcase,
    color: "from-[#00704A] to-[#005239]",
  },
  evaluation: {
    title: "Evaluation",
    description: "Performance evaluation",
    icon: Briefcase,
    color: "from-[#00704A] to-[#005239]",
  },
  futurePlanning: {
    title: "Future-Planning",
    description: "Operations and management",
    icon: Briefcase,
    color: "from-[#00704A] to-[#005239]",
  },
  tenderEvaluation: {
    title: "Purchase & Tender Evaluation",
    description: "Operations and management",
    icon: Briefcase,
    color: "from-[#00704A] to-[#005239]",
  },
};


// 🧍 Dummy data
const dummyMembers = [
  {
    id: 1,
    full_name: "Major General (Retd.) Dr Md Nayeem Ashfaque Chowdhury",
    category: ['executive'],
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
    category: ["finance", 'sponsor'],
    position: "Vice-President",
    email: "rukhsana.begum@example.com",
    phone: "+8801711000018",
    photo_url: "https://randomuser.me/api/portraits/women/39.jpg",
    image: abdun_naser_khan,
    bio: "Leads marketing campaigns and brand development.",
    achievements: ["Secured national sponsorship deal", "Increased brand engagement by 45%"],
  },
  {
    id: 4,
    full_name: "Md. Iqbal Hossain",
    category: ["inventory", "media", "trainingSelection", "evaluation", "tenderEvaluation"],
    position: "Vice-President",
    email: "tanvir.alam@example.com",
    phone: "+8801945-239748",
    photo_url: "https://randomuser.me/api/portraits/men/24.jpg",
    image: iqbal_hossain,
    bio: "Coaching national athletes with innovative training strategies.",
    achievements: ["Trained 5 national champions", "Introduced AI-driven performance analysis"],
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
    achievements: ["Optimized internal workflows", "Reduced operational costs by 20%"],
  },
  {
    id: 6,
    full_name: "Md Kitab Ali",
    category: ["calendar", "trainingSelection", "futurePlanning", "tenderEvaluation"],
    position: "Joint-Secretary",
    email: "nadia.rahman@example.com",
    phone: "+8801843-936782",
    photo_url: "https://randomuser.me/api/portraits/women/33.jpg",
    image: kitab_ali,
    bio: "Supports strategic initiatives and athlete welfare programs.",
    achievements: ["Established athlete mentorship programs", "Expanded outreach initiatives"],
  },
  {
    id: 7,
    full_name: "Md. Mizanur Rahman",
    category: ["trainingSelection", "futurePlanning"],
    position: "Joint-Secretary",
    email: "sajjad.karim@example.com",
    phone: "+8801819-868982",
    photo_url: "https://randomuser.me/api/portraits/men/9.jpg",
    image: mizanur_rahman,
    bio: "Manages the financial planning and auditing for the federation.",
    achievements: ["Digitized financial reporting", "Secured corporate sponsorships"],
  },
  {
    id: 8,
    full_name: "Dr. Md. Sabbir Mostafa Khan",
    category: ["finance", "sponsor"],
    position: "Treasurer",
    email: "rumana.akter@example.com",
    phone: "+8801911-554088",
    photo_url: "https://randomuser.me/api/portraits/women/52.jpg",
    image: sabbir_mostofa,
    bio: "Specializes in sprint and endurance training programs.",
    achievements: ["Developed athlete performance metrics", "Trained 3 regional winners"],
  },
  {
    id: 9,
    full_name: "Muzibar Rahman Mollick",
    category: ["trainingSelection"],
    position: "Member",
    email: "ashraful.islam@example.com",
    phone: "+8801711-306274",
    photo_url: "https://randomuser.me/api/portraits/men/15.jpg",
    image: muzibar_rahman_mollick,
    bio: "Responsible for managing public relations and media coverage.",
    achievements: ["Launched federation’s digital presence", "Increased media reach by 40%"],
  },
  {
    id: 10,
    full_name: "Farid Khan Chowdhury",
    category: ["calendar", "inventory", "media", "trainingSelection", "evaluation", "futurePlanning"],
    position: "Member",
    email: "khadija.jahan@example.com",
    phone: "+8801671-930327",
    photo_url: "https://randomuser.me/api/portraits/women/40.jpg",
    image: farid_khan_chowdhury,
    bio: "Coordinates executive operations and ensures policy implementation.",
    achievements: ["Implemented governance framework", "Improved cross-department efficiency"],
  },
  {
    id: 11,
    full_name: "Firoja Khatun",
    category: ["evaluation"],
    position: "Member",
    email: "mahfuz.rahman@example.com",
    phone: "+8801711-408136",
    photo_url: "https://randomuser.me/api/portraits/men/7.jpg",
    image: firoja,
    bio: "Provides medical and recovery support to athletes.",
    achievements: ["Reduced injury recovery time by 25%", "Designed rehab protocols"],
  },
  {
    id: 12,
    full_name: "Sharmistha Roy",
    category: ["evaluation"],
    position: "Member",
    email: "shamima.chowdhury@example.com",
    phone: "+8801715-530891",
    photo_url: "https://randomuser.me/api/portraits/women/46.jpg",
    image: sharmistha_roy,
    bio: "Supports strategic financial decisions and audits.",
    achievements: ["Improved budget allocation", "Streamlined expense approval"],
  },
  {
    id: 13,
    full_name: "M M Nazir Ahmed",
    category: ["inventory", "sponsor", "tenderEvaluation"],
    position: "Member",
    email: "rezaul.karim@example.com",
    phone: "+8801711-306310",
    photo_url: "https://randomuser.me/api/portraits/men/50.jpg",
    image: nasir_ahmed,
    bio: "Manages IT infrastructure and federation’s digital systems.",
    achievements: ["Modernized server systems", "Introduced digital attendance"],
  },
  {
    id: 14,
    full_name: "Shirin Akhter",
    category: ["media", "evaluation"],
    position: "Member",
    email: "tania.akhter@example.com",
    phone: "+8801711000013",
    photo_url: "https://randomuser.me/api/portraits/women/26.jpg",
    image: shirin_akter,
    bio: "Designs personalized nutrition plans for athletes.",
    achievements: ["Developed hydration protocol", "Improved recovery diet efficiency"],
  },
  {
    id: 15,
    full_name: "Mujibur Rahman",
    category: ["trainingSelection"],
    position: "Member",
    email: "imran.hossain@example.com",
    phone: "+8801712-004698",
    photo_url: "https://randomuser.me/api/portraits/men/19.jpg",
    image: mujibur_rahman,
    bio: "Provides legal guidance and manages compliance issues.",
    achievements: ["Updated policy documents", "Handled 20+ legal cases successfully"],
  },
  {
    id: 16,
    full_name: "Md. Riajul Islam ",
    category: ["finance", "media"],
    position: "Member",
    email: "shamim.rahman@example.com",
    phone: "+8801924-255377",
    photo_url: "https://randomuser.me/api/portraits/men/44.jpg",
    image: riajul_islam,
    bio: "Assists in managing organizational communications and planning.",
    achievements: ["Implemented project tracking system", "Enhanced internal communication"],
  },
  {
    id: 17,
    full_name: "L. Colonel Md. Touhidul Islam ",
    category: ["calendar", "futurePlanning"],
    position: "Member",
    email: "nusrat.islam@example.com",
    phone: "+88",
    photo_url: "https://randomuser.me/api/portraits/women/58.jpg",
    image: touhidul_islam,
    bio: "Oversees recruitment and staff welfare programs.",
    achievements: ["Introduced employee wellness plan", "Improved retention by 15%"],
  },
  {
    id: 18,
    full_name: "Commander N A S N Nadiruzzaman",
    category: ["calendar", "futurePlanning"],
    position: "Member",
    email: "aminul.haque@example.com",
    phone: "+88",
    photo_url: "https://randomuser.me/api/portraits/men/28.jpg",
    image: nadiruzamman,
    bio: "Develops strength programs to enhance athlete performance.",
    achievements: ["Reduced fatigue injuries", "Enhanced power output by 18%"],
  },
  {
    id: 19,
    full_name: "Wing Commander Md. Ekramul Haque",
    category: ["finance", "calendar", "futurePlanning"],
    position: "Member",
    email: "rukhsana.begum@example.com",
    phone: "+8801711000018",
    photo_url: "https://randomuser.me/api/portraits/women/39.jpg",
    image: ekramul_haque,
    bio: "Leads marketing campaigns and brand development.",
    achievements: ["Secured national sponsorship deal", "Increased brand engagement by 45%"],
  },
];

export default function BoardMembers() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMembers =
    activeCategory === "all" ? dummyMembers : dummyMembers.filter((m) => m.category.includes(activeCategory));
  // activeCategory === "all" ? dummyMembers : dummyMembers.filter((m) => m.category === activeCategory);

  console.log({ activeCategory })

  return (
    <div className="pt-40 bg-gradient-to-br from-[#F8F6F3] to-white ">
      <div className="main_container mx-auto px-3 md:px-0">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00704A]/10 to-[#C1272D]/10 rounded-full mb-6">
            <Users className="w-4 h-4 text-[#00704A]" />
            <span className="text-sm font-semibold text-[#00704A]">Leadership Team</span>
          </div>

          <DynamicHeading title="Board Members" className="text-4xl lg:text-6xl font-bold" />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders and professionals guiding Bangladesh Athletics Federation towards excellence and
            growth.
          </p>
        </div>
        {/* Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12 p-2 md:w-fit">
          <TabsList className="flex flex-row items-center gap-4 bg-white border border-gray-200 p-1 rounded-xl overflow-auto">
            {Object.entries(categoryInfo).map(([key, info]) => {
              const Icon = info.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-lg p-3  data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00704A] data-[state=active]:to-[#005239] data-[state=active]:text-white"
                >
                  <Icon className="w-4 h-4 mr" />
                  {info.title.split(" ")[0]}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Category Description */}
        <div className="mb-12">
          <Card className="border-none shadow-lg bg-gradient-to-r from-white to-[#F8F6F3]">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categoryInfo[activeCategory].color} flex items-center justify-center shadow-lg`}
                >
                  {React.createElement(categoryInfo[activeCategory].icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3436] mb-1">{categoryInfo[activeCategory].title}</h2>
                  <p className="text-gray-600">{categoryInfo[activeCategory].description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
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
                        className={`w-28 h-28 rounded-full bg-gradient-to-br ${categoryInfo[member.category[index]].color
                          } flex items-center justify-center shadow-md`}
                      >
                        <span className="text-4xl font-semibold text-white">{member.full_name.charAt(0)}</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge
                      className={`bg-gradient-to-r ${categoryInfo[member.category[index]]?.color
                        } text-white border-none px-2 py-1 rounded-2xl`}
                    >
                      {member.position}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">{member.full_name}</h3>

                  {member.bio && <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>}

                  {member.achievements && member.achievements.length > 0 && (
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm font-semibold text-gray-700">Key Achievements</span>
                      </div>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 2).map((a, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
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
                        <a href={`mailto:${member.email}`} className="hover:text-[#00704A] transition-colors">
                          {member.email}
                        </a>
                      </div>
                    )}

                    {member.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-[#C1272D]" />
                        <a href={`tel:${member.phone}`} className="hover:text-[#C1272D] transition-colors">
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-none shadow-lg">
            <CardContent className="p-16 text-center">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No board members in this category yet</p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mt-20">
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#00704A] to-[#005239] text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className=" mx-auto px-4 text-center relative z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Want to Join Our Team?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                We're always looking for passionate individuals dedicated to developing athletics in Bangladesh.
                Volunteer opportunities and positions are available.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href={`mailto:info@bdathletics.gov.bd`}>
                  <button className="px-8 py-3 bg-white text-[#00704A] rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
