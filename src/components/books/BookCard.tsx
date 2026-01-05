import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  description: string;
  ageGroup: string;
  coverImage: string;
  buyLink: string;
}

const BookCard = ({ title, description, ageGroup, coverImage, buyLink }: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-card-magical border border-border"
    >
      {/* Book Cover */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-lavender/30 to-sky/30">
        <img
          src={coverImage}
          alt={`Cover of ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Age Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-sunshine text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-magical">
            {ageGroup}
          </span>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-foreground line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
        
        <a href={buyLink} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <Button variant="coral" className="w-full gap-2">
            Buy This Book
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default BookCard;
