import { motion } from "framer-motion";
import { useState } from "react";

interface ArtCardProps {
  image: string;
  caption?: string;
}

const ArtCard = ({ image, caption }: ArtCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden shadow-magical bg-card border border-border cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={image}
          alt={caption || "Artwork"}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      
      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent flex items-end p-4"
        >
          <p className="text-primary-foreground text-sm font-medium">{caption}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ArtCard;
