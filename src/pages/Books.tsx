import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import BookCard from "@/components/books/BookCard";
import FloatingElements from "@/components/decorations/FloatingElements";
import bookCover1 from "@/assets/book-cover-1.png";

const book = {
  id: 1,
  title: "Tu the Turtle God",
  description: "A magical tale about Tu, a wise and wonderful turtle who embarks on an extraordinary adventure. Join this heartwarming story filled with friendship, courage, and the wonders of nature!",
  ageGroup: "Ages 5-9",
  coverImage: bookCover1,
  buyLink: "https://www.bribooks.com/bookstore/tu-the-turtle-god-by-jisha-negi",
};

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

      {/* My Book */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <BookCard
              title={book.title}
              description={book.description}
              ageGroup={book.ageGroup}
              coverImage={book.coverImage}
              buyLink={book.buyLink}
            />
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
