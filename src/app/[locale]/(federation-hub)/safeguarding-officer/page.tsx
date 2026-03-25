"use client";
import HeroSection from "@/components/safeguarding/HeroSection";
import OfficerCard from "@/components/safeguarding/OfficerCard";
import RolesResponsibilities from "@/components/safeguarding/RolesResponsibilities";
import WhenToContact from "@/components/safeguarding/WhenToContact";
import SafeguardingPrinciples from "@/components/safeguarding/SafeguardingPrinciples";
import ResourcesSection from "@/components/safeguarding/ResourcesSection";
import ImportantInfo from "@/components/safeguarding/ImportantInfo";
import ReportConcernCTA from "@/components/safeguarding/ReportConcernCTA";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import { useGetSafeguardingOfficer } from "@/api/hooks/the-federation/safeguarding-officer.hook";
import PageHero from "@/components/common/PageHero";

const Page = () => {
  const { data, error, isLoading } = useGetSafeguardingOfficer();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  data && console.log(data)
  const elements = data?.data?.elementDtos;
  const pageGenericElements = data?.data?.pageGenericElements;
  const pageSafeguardingOfficer = data?.data?.pageSafeguardingOfficerDto


  const roleAndResponsibilities = elements?.find(
    (el) => el.stepGroupName === "role_&_responsibilities"
  );
  const contactTheSafeguardingOfficer = elements?.find(
    (el) => el.stepGroupName === "contact_the_safeguarding_officer"
  );
  const ourSafeguardingPrinciples = elements?.find(
    (el) => el.stepGroupName === "our_safeguarding_principles"
  );
  const importantInformation = elements?.find(
    (el) => el.stepGroupName === "important_information"
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 space-y-8">
        {/* Hero Section */}
        {pageGenericElements && <PageHero pageGenericElements={pageGenericElements} />}

        {/* Officer Card + Roles Section */}
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            {contactTheSafeguardingOfficer && pageSafeguardingOfficer && (
              <OfficerCard
                contactTheSafeguardingOfficer={contactTheSafeguardingOfficer}
                pageSafeguardingOfficer={pageSafeguardingOfficer}
              />
            )}
          </div>
          <div className="lg:col-span-2 space-y-6">
            {roleAndResponsibilities &&
              (<RolesResponsibilities roleAndResponsibilities={roleAndResponsibilities} />)}
            <WhenToContact />
          </div>
        </section>

        {/* Safeguarding Principles */}
        {ourSafeguardingPrinciples && <SafeguardingPrinciples ourSafeguardingPrinciples={ourSafeguardingPrinciples} />}

        {/* Resources + Important Info */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <ResourcesSection />
          {importantInformation && <ImportantInfo importantInformation={importantInformation} />}
        </section>

        {/* CTA Section */}
        <ReportConcernCTA />
      </div>
    </div>
  );
};

export default Page;
