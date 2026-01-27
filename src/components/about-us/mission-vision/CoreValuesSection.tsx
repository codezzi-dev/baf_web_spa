import { icons, Target } from 'lucide-react'
import React, { FC } from 'react'
import SectionHeader from './SectionHeader'

export type CoreValues = {
  title: string,
  description: string,
  values:
  {
    icon: string,
    title: string,
    description: string
    color: string,
  }[]
}

type CoreValuesProps = {
  coreValues: CoreValues
}
const CoreValuesSection: FC<CoreValuesProps> = ({ coreValues }) => {

  return (
    <div className="mb-20">
      <SectionHeader header = {coreValues}/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreValues.values.map((value, index) => {
          const Icon = icons[value.icon] ?? Target;
          // const Icon = value.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3436] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default CoreValuesSection;