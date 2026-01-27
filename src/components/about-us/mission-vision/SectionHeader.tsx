import React, { FC } from 'react'
export type SectionHeader = {
    title: string,
    description: string,
}

type SectionHeaderProps = {
    header: SectionHeader
}
const SectionHeader: FC<SectionHeaderProps> = ({ header }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
                {header?.title?.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-[#D4AF37]">{header?.title.split(' ').pop()}</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00704A] to-[#C1272D] mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {header.description}
            </p>
        </div>
    )
}

export default SectionHeader