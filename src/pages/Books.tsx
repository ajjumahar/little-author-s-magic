import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import BookCard from "@/components/books/BookCard";
import FloatingElements from "@/components/decorations/FloatingElements";
import bookCover1 from "@/assets/book-cover-1.png";
import bookCover2 from "@/assets/book-cover-2.png";
import bookCover3 from "@/assets/book-cover-3.png";

const books = [
  {
    id: 1,
    title: "The Magical Forest Friends",
    description: "Join Emma as she discovers a secret forest where animals talk, flowers sing, and every tree holds a wonderful secret! A heartwarming tale about friendship and the magic of nature.",
    ageGroup: "Ages 5-9",
    coverImage: bookCover1,
    buyLink: "https://amazon.com",
  },
  {
    id: 2,
    title: "Ocean Adventures with Finn",
    description: "Dive deep into the ocean with Finn the friendly mermaid! Discover underwater treasures, meet colorful sea creatures, and learn the importance of protecting our oceans.",
    ageGroup: "Ages 4-8",
    coverImage: bookCover2,
    buyLink: "https://amazon.com",
  },
  {
    id: 3,
    title: "The Cloud Kingdom",
    description: "What if you could live in the clouds? Follow Luna on her magical journey to a kingdom in the sky, where unicorns fly and dreams really do come true!",
    ageGroup: "Ages 6-10",
    coverImage: bookCover3,
    buyLink: "https://amazon.com",
  },
];

const Books = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-lavender/30 to-background overflow-hidden">
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
              className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-lavender flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My Books <Sparkles className="inline w-8 h-8 text-sunshine animate-sparkle" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Each book is a magical adventure waiting to be explored! 
              Click on any book to get your own copy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Book of the Month */}
      <section className="py-12 bg-gradient-to-r from-sunshine/20 via-coral/10 to-sunshine/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-center"
          >
            <span className="text-2xl">🌟</span>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Book of the Month</span>
              <h2 className="text-2xl font-bold text-foreground">The Magical Forest Friends</h2>
            </div>
            <span className="text-2xl">🌟</span>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BookCard
                  title={book.title}
                  description={book.description}
                  ageGroup={book.ageGroup}
                  coverImage={book.coverImage}
                  buyLink={book.buyLink}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              More Stories Coming Soon! ✨
            </h2>
            <p className="text-muted-foreground text-lg">
              I'm always writing new adventures! Check back soon for more magical stories, 
              or follow along to be the first to know when new books are ready.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Books;
