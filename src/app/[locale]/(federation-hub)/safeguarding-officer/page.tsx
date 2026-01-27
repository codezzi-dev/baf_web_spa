import HeroSection from "@/components/safeguarding/HeroSection";
import OfficerCard from "@/components/safeguarding/OfficerCard";
import RolesResponsibilities from "@/components/safeguarding/RolesResponsibilities";
import WhenToContact from "@/components/safeguarding/WhenToContact";
import SafeguardingPrinciples from "@/components/safeguarding/SafeguardingPrinciples";
import ResourcesSection from "@/components/safeguarding/ResourcesSection";
import ImportantInfo from "@/components/safeguarding/ImportantInfo";
import ReportConcernCTA from "@/components/safeguarding/ReportConcernCTA";

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-36 space-y-8">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Officer Card + Roles Section */}
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <OfficerCard />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <RolesResponsibilities />
            <WhenToContact />
          </div>
        </section>
        
        {/* Safeguarding Principles */}
        <SafeguardingPrinciples />
        
        {/* Resources + Important Info */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <ResourcesSection />
          <ImportantInfo />
        </section>
        
        {/* CTA Section */}
        <ReportConcernCTA />
      </div>
    </div>
  );
};

export default Page;
