"use client";

import { useGetAllHistories } from "@/api/hooks/the-federation/history.hook";
import PageHero from "@/components/common/PageHero";
import HistoryStatistics from "@/components/about-us/HistoryStatistics";
import HistoricalJourney from "@/components/about-us/HistoricalJourney";
import PageFooter from "@/components/common/PageFooter";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";

const History = () => {
  const { data, error, isLoading } = useGetAllHistories();
  
  if (isLoading) {
    return <Loading/>;
  }
  if (error) {
    return <Error/>;
  }
  const historyContent = data?.data?.historyContent;
  const historyMilestones = data?.data?.historyMilestones;
  const pageGenericElements = data?.data?.pageGenericElements;
  return (
    <div className="bg-[#F2F0EF]">
      <div className="main_container">
        {" "}
        {/* Hero Section */}
        {pageGenericElements && <PageHero pageGenericElements={pageGenericElements} />}
        {/* Statistics Grid */}
        {historyContent && <HistoryStatistics historyContent={historyContent} />}
        {/* Historical Journey Section */}
        {historyMilestones && <HistoricalJourney historyMilestones={historyMilestones} />}
      </div>
      {/* CTA Section */}
      {pageGenericElements && <PageFooter pageGenericElements={pageGenericElements} />}
    </div>
  );
};

export default History;
