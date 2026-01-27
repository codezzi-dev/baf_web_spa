import { GenericElement } from '@/api/types/common/generic.type'
import { Calendar } from 'lucide-react'
import React from 'react'
interface PageHeroProps {
    pageGenericElements: GenericElement;
}
const PageHero: React.FC<PageHeroProps> = ({ pageGenericElements }) => {
    return (
        <div className="text-center mb-16 pt-48">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00704A]/10 to-[#C1272D]/10 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-[#00704A]" />
                <span className="text-sm font-semibold text-[#00704A]">{pageGenericElements?.pageTopTag}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3436] mb-6">
                {pageGenericElements?.pageTopTitle?.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="bg-gradient-to-r from-[#00704A] to-[#005239] bg-clip-text text-transparent">
                    {pageGenericElements?.pageTopTitle?.split(' ').pop()}
                </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {pageGenericElements?.pageTopSummary}
            </p>
        </div>
    )
}

export default PageHero