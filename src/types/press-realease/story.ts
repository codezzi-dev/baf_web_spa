export interface Story {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "announcement" | "event" | "partnership";
  image: string;
  slug: string;
  socialLinks?: StorySocialLinks[];
}
export interface StorySocialLinks {
  socialPlatform: string;
  url: string;
}


export interface StoryCardProps {
  story: Story;
  featured?: boolean;
}