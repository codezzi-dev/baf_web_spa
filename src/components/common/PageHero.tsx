import { GenericElement } from "@/api/types/common/generic.type";
import { Calendar } from "lucide-react";
import React from "react";
interface PageHeroProps {
  pageGenericElements: GenericElement;
}
const PageHero: React.FC<PageHeroProps> = ({ pageGenericElements }) => {
  return (
    <div className="text-center mb-16 pt-48">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00704A]/10 to-[#C1272D]/10 rounded-full mb-6">
        <Calendar className="w-4 h-4 text-[#00704A]" />
        <span className="text-sm font-semibold text-[#00704A]">
          {pageGenericElements?.pageTopTag}
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-[#2D3436] mb-6">
        {(() => {
          const title = pageGenericElements?.pageTopTitle || "";
          const words = title.split(" ");
          const half = Math.ceil(words.length / 2);

          return (
            <>
              {words.slice(0, half).join(" ")}{" "}
              <span className="bg-gradient-to-r from-[#00704A] to-[#005239] bg-clip-text text-transparent">
                {words.slice(half).join(" ")}
              </span>
            </>
          );
        })()}
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {pageGenericElements?.pageTopSummary}
      </p>
    </div>
  );
};

export default PageHero;
