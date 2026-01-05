import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";
import ArtCard from "@/components/art/ArtCard";
import FloatingElements from "@/components/decorations/FloatingElements";
import art1 from "@/assets/art-1.png";
import art2 from "@/assets/art-2.png";
import art3 from "@/assets/art-3.png";
import art4 from "@/assets/art-4.png";
import art5 from "@/assets/art-5.png";
import art6 from "@/assets/art-6.png";

const artworks = [
  {
    id: 1,
    image: art1,
    caption: "The Rainbow Garden - this inspired my forest story!",
  },
  {
    id: 2,
    image: art2,
    caption: "My friendly dragon, Sparkle! She guards the Cloud Kingdom.",
  },
  {
    id: 3,
    image: art3,
    caption: "Princess Marina from my underwater adventure book.",
  },
  {
    id: 4,
    image: art4,
    caption: "The animal tea party - one of my favorite scenes to draw!",
  },
  {
    id: 5,
    image: art5,
    caption: "My dream treehouse where all stories begin.",
  },
  {
    id: 6,
    image: art6,
    caption: "Unicorn friends playing in the magical meadow.",
  },
];

const Art = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-sky/30 to-background overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-sky to-mint flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              <Palette className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My Art & Drawings <Sparkles className="inline w-8 h-8 text-sunshine animate-sparkle" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to my art gallery! These drawings come straight from my imagination 
              and often inspire the stories I write. Hover over each one to learn more!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ArtCard image={artwork.image} caption={artwork.caption} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Message */}
      <section className="py-20 bg-gradient-to-br from-lavender/20 to-peach/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-3xl p-10 shadow-card-magical border border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Art Brings Stories to Life! 🎨
            </h2>
            <p className="text-muted-foreground text-lg">
              I love drawing just as much as I love writing! Every picture tells a story, 
              and sometimes my drawings become the inspiration for my next book. 
              Maybe one day, you'll see these characters in a story near you!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Art;
