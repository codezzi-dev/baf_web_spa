import { Story } from "@/components/press-releases/StoryCard";

export const stories: Story[] = [
  {
    id: "1",
    title: "Bangladesh Athletics Federation Launches New Training Program",
    excerpt:
      "Aims to boost performance of young athletes nationwide with state-of-the-art facilities and international coaching standards.",
    date: "Oct 5, 2025",
    category: "announcement",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    slug: "new-training-program",
  },
  {
    id: "2",
    title: "National Athletics Championship 2025 Announced",
    excerpt:
      "Get ready for the biggest sporting event of the year featuring athletes from all 64 districts competing for national glory.",
    date: "Sep 25, 2025",
    category: "event",
    image:
      "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=800&q=80",
    slug: "national-championship-2025",
  },
  {
    id: "3",
    title: "Partnership with Global Sports Agency",
    excerpt:
      "New opportunities for international exposure and training programs for elite Bangladeshi athletes.",
    date: "Aug 20, 2025",
    category: "partnership",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    slug: "global-sports-partnership",
  },
  {
    id: "4",
    title: "Youth Development Initiative Reaches 10,000 Athletes",
    excerpt:
      "Our grassroots program continues to grow, nurturing the next generation of athletic talent across Bangladesh.",
    date: "Aug 10, 2025",
    category: "announcement",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    slug: "youth-development-milestone",
  },
];

export const storyDetails: Record<
  string,
  {
    content: string[];
    author: string;
    authorRole: string;
  }
> = {
  "1": {
    author: "Rahman Chowdhury",
    authorRole: "Communications Director",
    content: [
      "The Bangladesh Athletics Federation is proud to announce the launch of our most ambitious training program to date. This comprehensive initiative aims to revolutionize how we develop athletic talent in Bangladesh, providing world-class training opportunities to athletes across all 64 districts.",
      "The program, developed in collaboration with international coaching experts, introduces cutting-edge training methodologies that have proven successful in producing Olympic-level athletes. Our facilities have been upgraded with state-of-the-art equipment, including advanced biomechanics analysis systems and recovery technologies.",
      "\"This is a watershed moment for athletics in Bangladesh,\" said Federation President Md. Shafiqul Islam. \"We are committed to providing our athletes with every possible advantage as they compete on the world stage.\"",
      "The training program will focus on five key areas: sprint development, endurance training, technical disciplines, mental conditioning, and nutrition optimization. Each athlete will receive a personalized development plan created by our team of sports scientists and coaches.",
      "Phase one of the program begins immediately at our national training center in Dhaka, with regional centers to be established in Chittagong, Sylhet, and Khulna by the end of 2025. We expect to directly impact over 5,000 athletes in the first year alone.",
      "The Federation extends its gratitude to the Ministry of Youth and Sports for their continued support and to our corporate partners who have made this vision a reality. Together, we are building a brighter future for athletics in Bangladesh.",
    ],
  },
  "2": {
    author: "Fatima Begum",
    authorRole: "Events Coordinator",
    content: [
      "Mark your calendars! The National Athletics Championship 2025 is set to be the most spectacular sporting event in our federation's history. Athletes from all 64 districts will converge on the newly renovated Bangabandhu National Stadium for four days of elite competition.",
      "This year's championship features expanded categories and increased prize pools, reflecting our commitment to rewarding athletic excellence. The event will include competitions in over 40 disciplines, from traditional track events to field competitions.",
      "\"We expect record participation this year,\" said Event Director Kamal Hossain. \"The enthusiasm from regional federations has been overwhelming, and we're seeing incredible talent emerging from every corner of the country.\"",
      "The championship will also serve as a qualifying event for the upcoming Asian Athletics Championships, adding extra significance to every performance. Our selection committee will be watching closely for athletes who demonstrate championship-level potential.",
      "New this year is the integration of live streaming technology, allowing fans across Bangladesh and around the world to follow the action in real-time. We're also partnering with leading sports media outlets to ensure comprehensive coverage.",
      "Registration opens on October 1st through our official portal. We encourage all eligible athletes to register early as spots are expected to fill quickly. Let's make this championship one for the history books!",
    ],
  },
  "3": {
    author: "Dr. Nasreen Ahmed",
    authorRole: "International Relations",
    content: [
      "The Bangladesh Athletics Federation is thrilled to announce a landmark partnership with the Global Sports Development Agency (GSDA), opening unprecedented opportunities for our athletes on the international stage.",
      "This multi-year agreement includes athlete exchange programs, coaching clinics, and access to international competition circuits that were previously difficult for Bangladeshi athletes to enter. The partnership represents a significant step forward in our internationalization strategy.",
      "\"This partnership will transform how we develop elite athletes,\" said International Relations Director Dr. Nasreen Ahmed. \"Our athletes will now have regular exposure to world-class competition and training environments.\"",
      "Key components of the partnership include annual training camps at GSDA facilities in Europe and East Africa, mentorship programs pairing Bangladeshi coaches with international experts, and guaranteed entries to select Diamond League events for our top performers.",
      "The GSDA has an impressive track record of developing Olympic medalists from emerging athletics nations. Their expertise in sports science, anti-doping compliance, and athlete welfare aligns perfectly with our federation's values and goals.",
      "We will begin implementation immediately, with the first cohort of athletes traveling to GSDA's Kenya High Altitude Training Center in November. This is the beginning of a new era for Bangladeshi athletics.",
    ],
  },
  "4": {
    author: "Sadia Islam",
    authorRole: "Youth Programs Manager",
    content: [
      "We are proud to announce that our Youth Development Initiative has now reached more than 10,000 young athletes across Bangladesh, marking a significant milestone in our mission to nurture the next generation of athletic talent.",
      "Launched three years ago, this grassroots program has grown exponentially, establishing training centers in schools and communities in all 64 districts. The program provides free coaching, equipment, and nutritional support to talented young athletes aged 8-16.",
      "\"Every child deserves the chance to discover their athletic potential,\" said Youth Programs Manager Sadia Islam. \"This milestone proves that with the right support, we can reach young people in every corner of our nation.\"",
      "The program has already produced remarkable success stories. Several alumni have gone on to represent Bangladesh in junior international competitions, with three athletes from the 2022 cohort now training at our national center.",
      "Our network of over 200 volunteer coaches, many of them former national team athletes, form the backbone of this initiative. Their dedication to identifying and developing talent ensures that no promising athlete goes unnoticed.",
      "As we celebrate this achievement, we're also announcing an expansion goal: 25,000 athletes by 2027. With continued support from our sponsors and community partners, we're confident this ambitious target is within reach.",
    ],
  },
};
