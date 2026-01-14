import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, User } from "lucide-react";
import  Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import StoryCard from "@/components/press-releases/StoryCard";
import { stories, storyDetails } from "@/components/data/Stories";
import { cn } from "@/lib/utils";

const categoryStyles = {
  announcement: "bg-badge-announcement text-white",
  event: "bg-badge-event text-white",
  partnership: "bg-badge-partnership text-white",
};

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params promise to get the dynamic id
  const { id } = await params;
  const story = stories.find((s) => s.id === id);
  const details = id ? storyDetails[id] : null;

  if (!story || !details) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-20 text-center  ">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Story not found
          </h1>
          <Link href="/" className="mt-4 inline-block text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }
    const relatedStories = stories.filter((s) => s.id !== story.id).slice(0, 3);
    return (
    <div className="min-h-screen bg-background pt-30 pb-10">
      <div className="container mx-auto px-4 py-10">
        <Link href="/press-releases" className="inline-flex items-center text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Press Releases
        </Link>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
                src={story.image}
                alt={story.title}
                className="w-full h-auto rounded-lg mb-6"
            />
            <Badge
              className={cn(    
                "absolute top-4 left-4 border-0 text-xs font-medium",
                categoryStyles[story.category]
              )}
            >
                {story.category}
            </Badge>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            {story.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4 mr-2" />
                {details.author}, {details.authorRole} &nbsp;|&nbsp; <Calendar className="h-4 w-4 mr-2" /> {story.date}
            </div>
            <div className="prose prose-lg max-w-none text-foreground mb-8">
                {details.content.map((para, index) => (
                    <p key={index}>{para}</p>
                ))} 
            </div>
            <Separator className="my-8" />
            <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="black" size="small" className="border-0">
                    <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="black" size="small" className="border-0">
                    <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="black" size="small" className="border-0">
                    <Linkedin className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
      { relatedStories.length > 0 && (
      <div className="container mx-auto px-4 mt-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedStories.map((relatedStory) => (
            <StoryCard key={relatedStory.id} story={relatedStory} />
            ))}
        </div>
      </div>
      )}
    </div>


  );
}