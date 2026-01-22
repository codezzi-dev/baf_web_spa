import { HistoryContent } from '@/api/types/the-federation/history.type';
import { Award, Calendar, Trophy, Users } from 'lucide-react';
import React from 'react'


interface HistoryStatisticsProps {
  historyContent: HistoryContent;
}
const HistoryStatistics: React.FC<HistoryStatisticsProps> = ({historyContent})  => {
  const historyContentArray = Object.entries(historyContent);
  return (
         <div className="grid md:grid-cols-4 gap-6 mb-20">
          {historyContentArray.map((stat, index) => {
            const key = stat[0]
            function getLabel(key: string) {
              switch (key) {
                case "historyYearsOfExcellence":
                  return "Years of Excellence";
                case "historyNumbersOfNationalChampion":
                  return "National Champions";
                case "historyNumbersOfInternationalMedals":
                  return "International Medals";
                case "historyNumbersOfActiveAthletes":
                  return "Active Athletes";
                default:
                  return key;
              }
            }
          
            const label = getLabel(key)
            const value = stat[1]
            const Icon = key === "historyYearsOfExcellence" ? Calendar
                  : key === "historyNumbersOfNationalChampion" ? Trophy
                    : key === "historyNumbersOfInternationalMedals" ? Award
                        : Users;
            const color = key === "historyYearsOfExcellence" ? "bg-tag-green"
                  : key === "historyNumbersOfNationalChampion" ? "bg-tag-red"
                  : key === "historyNumbersOfInternationalMedals" ? "bg-tag-yellow"
                  : "bg-[#00704A]";

            return (
              <div
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-xl bg-[#FBFBFB]"
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${color} flex items-center justify-center shadow-lg`}
                  >
                  <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-700 mb-2">{value}+</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              </div>
            );
          })}
        </div>
  )
}

export default HistoryStatistics