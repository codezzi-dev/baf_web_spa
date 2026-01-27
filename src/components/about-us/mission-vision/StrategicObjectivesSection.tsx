import { icons, Target } from 'lucide-react'
import React, { FC } from 'react'
import SectionHeader from './SectionHeader'
export type StrategicObjectives = {
    title: string,
    description: string,
    objectives:
    {
        icon: string,
        title: string,
        points: string[]
    }[]
}

type StrategicObjectivesProps = {
    strategicObjectives: StrategicObjectives
}

const StrategicObjectivesSection: FC<StrategicObjectivesProps> = ({ strategicObjectives }) => {
    return (
        <div className="mb-10">
            <SectionHeader header = {strategicObjectives} />
            <div className="grid md:grid-cols-2 gap-8">
                {strategicObjectives.  objectives.map((objective, index) => {
                    const Icon = icons[objective.icon] ?? Target;
                    return (
                        <div
                            key={index}
                            className="rounded-2xl bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00704A] to-[#005239] flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2D3436]">{objective.title}</h3>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {objective.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00704A] mt-2 flex-shrink-0" />
                                            <span className="text-gray-600">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default StrategicObjectivesSection