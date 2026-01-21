import { GenericElement } from '@/api/types/common/generic.type';
import { formatPipeString } from '@/utils/formatters';
import { TrendingUp } from 'lucide-react';
import React from 'react'
interface PageFooterProps {
    pageGenericElements: GenericElement;
}
const PageFooter: React.FC<PageFooterProps> = ({ pageGenericElements }) => {
    const pageBottomTags = formatPipeString(pageGenericElements.pageBottomTags);
    return (
        <section className="py-20 bg-gradient-to-br from-[#00704A] to-[#005239] text-white relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                        <TrendingUp className="w-10 h-10" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold">{pageGenericElements?.pageBottomTitle}</h2>

                    <p className="text-xl text-white/90 leading-relaxed">{pageGenericElements?.pageBottomSummary}</p>

                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        {pageBottomTags.map((tag, index) =>(<div key={index} className="bg-white/20 text-white border-none text-lg px-6 py-2 rounded-xl">{tag}</div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageFooter