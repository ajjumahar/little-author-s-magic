import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/decorations/FloatingElements";
import heroBanner from "@/assets/hero-banner.png";
import bookCover1 from "@/assets/book-cover-1.png";

const Home = () => {
  const featuredBook = {
    title: "The Magical Forest Friends",
    cover: bookCover1,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
        <FloatingElements />
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Magical storybook world"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-magical mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
              <span className="text-foreground font-medium">Welcome to my magical world!</span>
              <Star className="w-5 h-5 text-sunshine animate-sparkle" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Hi! I'm a{" "}
              <span className="text-primary">little explorer</span> who loves
              writing{" "}
              <span className="text-secondary-foreground bg-secondary px-3 py-1 rounded-xl">
                magical stories
              </span>{" "}
              <Sparkles className="inline w-8 h-8 text-sunshine animate-float" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Come explore enchanting tales filled with adventure, friendship, and the wonder of imagination! ✨📚
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/books">
                <Button variant="coral" size="xl" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Explore My Books
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="outline" size="xl" className="gap-2">
                  <Heart className="w-5 h-5" />
                  Support My Writing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Little About Me <Sparkles className="inline w-6 h-6 text-primary" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ever since I was little, I loved making up stories about magical worlds, 
              brave heroes, and adorable creatures. Now, I'm turning those dreams into 
              real books that kids everywhere can enjoy! Every story I write comes 
              straight from my imagination and my heart.
            </p>
            <Link to="/about">
              <Button variant="sky" size="lg">
                Read My Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Book <BookOpen className="inline w-8 h-8 text-primary" />
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover a magical story waiting just for you!
            </p>
          </motion.div>

          <div className="max-w-sm mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card-magical border border-border bg-card">
                <img
                  src={featuredBook.cover}
                  alt={featuredBook.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-primary-foreground font-bold text-xl">{featuredBook.title}</h3>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/books">
              <Button variant="coral" size="lg">
                Read More About My Book
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lavender/30 via-sky/20 to-peach/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-3xl p-10 shadow-card-magical border border-border"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-gentle-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Help Me Write More Stories!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your support helps me create new adventures, work with illustrators, 
              and share my stories with kids around the world!
            </p>
            <Link to="/support">
              <Button variant="magical" size="xl">
                Support My Dream ✨
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
