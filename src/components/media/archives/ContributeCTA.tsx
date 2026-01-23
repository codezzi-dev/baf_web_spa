import { Upload, FolderArchive } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ContributeCTA = () => {
  return (
    <section className="bg-tag-green rounded-2xl p-8 md:p-12 text-center text-white">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
          <FolderArchive className="w-8 h-8" />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Have Historical Content to Share?
      </h2>
      
      <p className="text-white/80 max-w-xl mx-auto mb-8">
        Help us preserve Bangladesh Athletics history by contributing your photos, 
        documents, or memories.
      </p>
      
      <Button
        variant="outline"
        size="lg"
        className="bg-transparent border-white text-white hover:bg-white hover:text-[hsl(var(--green-dark))]"
      >
        <Upload className="w-4 h-4 mr-2" />
        Contribute to Archives
      </Button>
    </section>
  );
};

export default ContributeCTA;
