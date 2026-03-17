"use client";
import AthleteSpotlight from "@/components/Home/AthleteSpotlight";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import { SponsorsSection } from "@/components/Home/Sponsors";

// image import
import bkash from "@/assets/images/home/sponsors/bKash.png";
import daraz from "@/assets/images/home/sponsors/daraz.png";
import jamuna from "@/assets/images/home/sponsors/jamuna.png";
import meghna from "@/assets/images/home/sponsors/meghna.png";
import OurMission from "@/components/Home/OurMission";
import UpcomingEvents from "@/components/Home/UpcommingEvents";
import QuickLinks from "@/components/Home/QuickLinks";
import RunningNotice from "@/components/news/RunningNotice";
import AthleteSpotlight2 from "@/components/Home/AthleteSpotlight2";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import { useGetHomePageElements } from "@/api/hooks/home/home.hook";


const sponsors = [
  {
    name: "bKash",
    logo: bkash,
    url: "https://bkash.com",
  },
  {
    name: "Daraz",
    logo: daraz,
    url: "https://daraz.com.bd",
  },
  {
    name: "jamuna",
    logo: jamuna,
    url: "https://jamunabd.com",
  },
  {
    name: "MGI",
    logo: meghna,
    url: "https://mgi.com.bd",
  },
  {
    name: "Citygroup",
    logo: jamuna,
    url: "https://citygroup.com.bd",
  },
  {
    name: "Jamuna",
    logo: bkash,
    url: "https://jamuna.tv",
  },
  {
    name: "Citygroup",
    logo: jamuna,
    url: "https://citygroup.com.bd",
  },
  {
    name: "Jamuna",
    logo: bkash,
    url: "https://jamuna.tv",
  },
];

const HomePage = () => {
  const { data, error, isLoading } = useGetHomePageElements();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const notice = data?.data?.notice;           // Notice[]
  const elements = data?.data?.elements;       // StepGroup[]
  const news = data?.data?.newsAnnouncements;  // NewsAnnouncement[]
  const athletes = data?.data?.athletes;       // Athlete[]

  const mappedNotices = notice?.map((n, index) => ({
    id: index.toString(),
    text: n.message,
    isNew: n.isNew,
  }));

  const missionData = elements?.find(
    (el) => el.stepGroupName === "our_mission"
  );
  console.log(missionData)
  return (
    <div>
      <Hero />
      {notice && <RunningNotice notices={mappedNotices} />}
      {/* <RunningNotice /> */}

      {missionData && <OurMission missionData={missionData} />}
      <LatestNews />
      {/* <LatestNews /> */}
      <UpcomingEvents />
      {/* <AthleteSpotlight /> */}
      <AthleteSpotlight2 />
      {/* <SponsorsSection sponsors={sponsors} page="home" /> */}
      <QuickLinks />
    </div>
  );
};

export default HomePage;
