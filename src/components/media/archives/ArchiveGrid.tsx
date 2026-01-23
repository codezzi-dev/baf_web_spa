import ArchiveCard, { ArchiveItem } from "./ArchiveCard";

const archiveItems: ArchiveItem[] = [
  {
    id: "1",
    title: "1st National Athletics Championship 1972",
    description: "Historic first national championship held after independence, marking the beginning of organized athletics in Bangladesh.",
    year: 1972,
    date: "Nov 14, 1972",
    category: "photo",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
    badge: "Featured",
  },
  {
    id: "2",
    title: "Bangladesh Athletics Federation Founding Documents",
    description: "Original founding documents and constitution of Bangladesh Athletics Federation established in 1972.",
    year: 1972,
    date: "Dec 15, 1972",
    category: "documents",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
    badge: "Featured",
  },
  {
    id: "3",
    title: "First South Asian Games Participation 1984",
    description: "Bangladesh's debut in South Asian Games in Kathmandu. Nepal sent 11 athletes representing the nation.",
    year: 1984,
    date: "Sep 1, 1984",
    category: "photo",
    image: "https://images.unsplash.com/photo-1461896836934- voices?w=600",
    badge: "Event",
  },
  {
    id: "4",
    title: "National Stadium Opening Ceremony 1985",
    description: "Photo collection from the grand opening of National Stadium, Bangladesh's premier athletics venue.",
    year: 1985,
    date: "Jan 15, 1985",
    category: "photo",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
    badge: "Photo History",
  },
  {
    id: "5",
    title: "Bangladesh Athletics Annual Report 1990",
    description: "Comprehensive annual report documenting achievements, challenges, and future plans for athletics development.",
    year: 1990,
    date: "Mar 21, 1990",
    category: "documents",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    badge: "Featured",
  },
  {
    id: "6",
    title: "Asian Games Dhaka Bid Presentation 1995",
    description: "Historical video footage of Bangladesh's bid to host Asian Games, showcasing our world-class infrastructure.",
    year: 1995,
    date: "Jun 22, 1995",
    category: "video",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600",
    badge: "Video",
  },
  {
    id: "7",
    title: "Historic Press Conference - First Olympic Qualification 1996",
    description: "Rare photos and exclusive footage of Bangladesh's first Olympic qualified athlete announcement.",
    year: 1996,
    date: "Jul 15, 1996",
    category: "photo",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600",
    badge: "Photo History",
  },
  {
    id: "8",
    title: "20th Anniversary Celebration 1991",
    description: "Photo archive from the 20th anniversary celebration of Bangladesh Athletics Federation.",
    year: 1991,
    date: "Dec 15, 1991",
    category: "photo",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600",
    badge: "Featured",
  },
  {
    id: "9",
    title: "Documentary: Journey of Bangladesh Athletics 2000",
    description: "Full documentary covering 30 years of athletics history from 1972 to 2000.",
    year: 2000,
    date: "Dec 01, 2000",
    category: "video",
    image: "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?w=600",
    badge: "Video",
  },
  {
    id: "10",
    title: "International Athletic Meet Dhaka 2005",
    description: "Complete records and results from the international athletic meet held in Dhaka with 15 participating nations.",
    year: 2005,
    date: "Nov 20, 2005",
    category: "news",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
    badge: "Event",
  },
  {
    id: "11",
    title: "Coaching Manual Archives 1980-2010",
    description: "Collection of coaching manuals, training guides, and educational materials used over three decades.",
    year: 2010,
    date: "Jan 1, 2010",
    category: "documents",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600",
    badge: "Featured",
  },
  {
    id: "12",
    title: "Golden Jubilee Celebration 2021",
    description: "Videos from 50th anniversary celebration of Bangladesh Athletics Federation with international dignitaries.",
    year: 2021,
    date: "Dec 16, 2021",
    category: "video",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
    badge: "Event",
  },
];

interface ArchiveGridProps {
  searchQuery: string;
  activeCategory: string;
  selectedYear: string;
}

const ArchiveGrid = ({ searchQuery, activeCategory, selectedYear }: ArchiveGridProps) => {
  const filteredItems = archiveItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === "" || item.category === activeCategory;

    const matchesYear =
      selectedYear === "All Years" ||
      selectedYear === "" ||
      (selectedYear === "2020s" && item.year >= 2020 && item.year < 2030) ||
      (selectedYear === "2010s" && item.year >= 2010 && item.year < 2020) ||
      (selectedYear === "2000s" && item.year >= 2000 && item.year < 2010) ||
      (selectedYear === "1990s" && item.year >= 1990 && item.year < 2000) ||
      (selectedYear === "1980s" && item.year >= 1980 && item.year < 1990) ||
      (selectedYear === "1970s" && item.year >= 1970 && item.year < 1980);

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section className="mb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <ArchiveCard key={item.id} item={item} />
        ))}
      </div>
      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No archives found matching your criteria.
        </div>
      )}
    </section>
  );
};

export default ArchiveGrid;
