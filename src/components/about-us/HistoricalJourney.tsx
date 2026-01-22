import { Award, Flag, Star, Target, TrendingUp, Trophy, Users, Zap } from 'lucide-react';
import React from 'react'
import DynamicHeading from '../Home/HeadingComponent';
import { HistoryMilestone } from '@/api/types/the-federation/history.type';
interface HistoricalJourneyProps {
  historyMilestones: HistoryMilestone[];
}
const HistoricalJourney: React.FC<HistoricalJourneyProps> = ({ historyMilestones }) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
              Historical <span className="text-[#C1272D]">Milestones</span>
            </h2> */}
        <DynamicHeading title="Historical Milestones" />
        <div className="h-1 w-24 bg-gradient-to-r from-[#00704A] to-[#C1272D] mx-auto rounded-full" />
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00704A] via-[#C1272D] to-[#D4AF37] transform -translate-x-1/2" />

        <div className="space-y-12">
          {historyMilestones?.map((milestone, index) => {
            const Icon = milestone.milestoneIconTag === "foundation" ? Flag
              : milestone.milestoneIconTag === "award" ? Award
                : milestone.milestoneIconTag === "championship" ? Trophy
                  : milestone.milestoneIconTag === "success" ? Star
                    : milestone.milestoneIconTag === "goal" ? Target
                      : milestone.milestoneIconTag === "talent" ? Users
                        : milestone.milestoneIconTag === "growth" ? TrendingUp
                          : Zap;
            const colors = ["green", "red", "yellow"];
            const TAG_CLASSES: Record<string, string> = {
              green: "tag-green",
              red: "tag-red",
              yellow: "tag-yellow",
            };
            const color = colors[index % colors.length];
            const isEven = index % 2 === 0;

            return (
              <div
                key={milestone.milestoneYear}
                className={`flex flex-col md:flex-row items-center gap-8  ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } `}
              >
                {/* Content Card */}
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} `}>
                  <div className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl bg-[#FBFBFB]">
                    <div className="p-8">
                      <div
                        className={`inline-block px-3 py-1 rounded-full  bg-${TAG_CLASSES[color]} text-white border-none mb-4 text-sm font-semibold `}
                      >
                        {milestone.milestoneYear}
                      </div>

                      <h3 className="text-2xl font-bold text-[#2D3436] mb-3">{milestone.milestoneTitle}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.milestoneDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br bg-${TAG_CLASSES[color]} flex items-center justify-center shadow-2xl`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Spacer for even layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoricalJourney