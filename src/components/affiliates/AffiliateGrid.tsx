import AffiliateCard, { Organization } from "./AffiliateCard";

interface AffiliateGridProps {
  searchQuery: string;
  activeCategory: string;
}

const organizations: Organization[] = [
  {
    id: "1",
    name: "Government Physical Education College, Rajshahi",
    description: "Premier institution for physical education and sports training in the Rajshahi region.",
    location: "Rajshahi, Bangladesh",
    phone: "+880 721-750123",
    email: "info@gpecrajshahi.edu.bd",
    website: "https://gpecrajshahi.edu.bd",
    category: "universities",
    status: "active",
  },
  {
    id: "2",
    name: "Government Physical Education College, Chittagong",
    description: "Leading physical education institution serving the Chittagong division.",
    location: "Chittagong, Bangladesh",
    phone: "+880 31-2856789",
    category: "universities",
    status: "verified",
  },
  {
    id: "3",
    name: "Khulna Divisional Government Physical Education College, Sreepur",
    description: "Government institution dedicated to physical education excellence in Khulna.",
    location: "Sreepur, Khulna, Bangladesh",
    phone: "+880 41-720456",
    website: "https://kdgpec.edu.bd",
    category: "universities",
    status: "active",
  },
  {
    id: "4",
    name: "Sylhet Division Sports Association",
    description: "Regional sports governing body for Sylhet division athletics programs.",
    location: "Sylhet, Bangladesh",
    phone: "+880 821-714567",
    email: "sylhetdsa@gmail.com",
    category: "secondary",
    status: "online",
  },
  {
    id: "5",
    name: "Rangpur Division Sports Association",
    description: "Coordinating athletics and sports development across Rangpur division.",
    location: "Rangpur, Bangladesh",
    phone: "+880 521-62890",
    category: "secondary",
    status: "active",
  },
  {
    id: "6",
    name: "Mymensingh Division Sports Association",
    description: "Promoting sports excellence and athletic development in Mymensingh region.",
    location: "Mymensingh, Bangladesh",
    phone: "+880 91-67234",
    email: "mdsa.mymensingh@gmail.com",
    category: "secondary",
    status: "verified",
  },
  {
    id: "7",
    name: "University of Dhaka",
    description: "The premier national university with outstanding athletics and sports programs.",
    location: "Dhaka University Campus, Dhaka",
    phone: "+880 2-9661920",
    email: "sports@du.ac.bd",
    website: "https://du.ac.bd",
    category: "universities",
    status: "active",
  },
  {
    id: "8",
    name: "Bangladesh University of Engineering and Technology (BUET)",
    description: "Leading engineering university with active athletics and sports facilities.",
    location: "Palashi, Dhaka, Bangladesh",
    phone: "+880 2-9665650",
    website: "https://buet.ac.bd",
    category: "universities",
    status: "verified",
  },
  {
    id: "9",
    name: "University of Rajshahi",
    description: "Major public university committed to sports excellence and athletic development.",
    location: "Rajshahi University Campus, Rajshahi",
    phone: "+880 721-750041",
    email: "sports@ru.ac.bd",
    category: "universities",
    status: "active",
  },
  {
    id: "10",
    name: "University of Chittagong",
    description: "Prominent university fostering sports talent and athletic achievements.",
    location: "Chittagong University, Chittagong",
    phone: "+880 31-726311",
    category: "universities",
    status: "online",
  },
  {
    id: "11",
    name: "Jahangirnagar University",
    description: "Renowned residential university with strong athletics tradition.",
    location: "Savar, Dhaka, Bangladesh",
    phone: "+880 2-7791045",
    email: "sports@juniv.edu",
    website: "https://juniv.edu",
    category: "universities",
    status: "active",
  },
  {
    id: "12",
    name: "Bangladesh Krira Shikkha Protisthan (BKSP)",
    description: "National sports institute for nurturing young athletic talent.",
    location: "Zirani, Savar, Dhaka",
    phone: "+880 2-7742601",
    email: "info@bksp.gov.bd",
    website: "https://bksp.gov.bd",
    category: "secondary",
    status: "verified",
  },
  {
    id: "13",
    name: "Bangladesh Army",
    description: "Armed forces athletics program promoting sports excellence among personnel.",
    location: "Dhaka Cantonment, Dhaka",
    phone: "+880 2-8712345",
    category: "police",
    status: "active",
  },
  {
    id: "14",
    name: "Bangladesh Police",
    description: "National police force athletics and sports development programs.",
    location: "Police Headquarters, Dhaka",
    phone: "+880 2-8315678",
    email: "sports@police.gov.bd",
    category: "police",
    status: "verified",
  },
  {
    id: "15",
    name: "Bangladesh Technical Education Board (BTEB)",
    description: "Technical education authority supporting sports in vocational institutions.",
    location: "Agargaon, Dhaka, Bangladesh",
    phone: "+880 2-8181234",
    website: "https://bteb.gov.bd",
    category: "secondary",
    status: "online",
  },
];

const AffiliateGrid = ({ searchQuery, activeCategory }: AffiliateGridProps) => {
  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = !activeCategory || org.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrganizations.map((org) => (
          <AffiliateCard key={org.id} organization={org} />
        ))}
      </div>

      {filteredOrganizations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No organizations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AffiliateGrid;
