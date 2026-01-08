import { motion } from "framer-motion";
import { BookOpen, Heart, Lightbulb, Sparkles, Star, MapPin, Plane, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/decorations/FloatingElements";

const About = () => {
  const milestones = [
    { icon: Star, label: "Class 4th student", color: "text-sunshine" },
    { icon: BookOpen, label: "Published my first book", color: "text-coral" },
    { icon: Plane, label: "Travelled across India & abroad", color: "text-sky" },
    { icon: Music, label: "4th year Bharatnatyam student", color: "text-lavender" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-peach/30 to-background overflow-hidden">
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
              className="w-20 h-20 rounded-full bg-gradient-to-br from-peach to-coral flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm Jisha Negi! <Sparkles className="inline w-8 h-8 text-sunshine animate-sparkle" />
            </h1>
            <p className="text-xl text-muted-foreground">
              A young explorer who loves reading, travelling, and learning new things!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card-magical border border-border"
            >
              <div className="prose prose-lg max-w-none">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3"
                >
                  <Heart className="w-8 h-8 text-primary animate-gentle-bounce" />
                  About Me
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-lg leading-relaxed mb-6"
                >
                  I am a student of class 4th at Smt. R.S.B. Arya Vidya Mandir, Juhu. I love reading, 
                  travelling, exploring nature, and learning new things. I also write! I might be only 
                  9 years old but I have already visited many parts of India — from the snowy mountains 
                  of Kargil, Kashmir, Himachal, and Uttarakhand to the forests of Assam, the beaches of 
                  Goa and Udupi, and the historic cities of Lucknow and Mysore.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-sky/10 rounded-2xl p-6 my-8"
                >
                  <div className="flex items-start gap-4">
                    <Plane className="w-8 h-8 text-sky flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">My Adventures Abroad</h3>
                      <p className="text-muted-foreground">
                        I have also travelled to the Maldives, Thailand, and the USA. In Florida, I went to 
                        an elementary school for the short time I was in Tampa Bay. In the USA, I visited 
                        famous places like NASA, Disneyland and watched "The Lion King" at Broadway in New York!
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-lavender/10 rounded-2xl p-6 my-8"
                >
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-lavender flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Unforgettable Experiences</h3>
                      <p className="text-muted-foreground">
                        I have climbed apricot trees in Kargil, ridden a shikara in Kashmir, seen two-hump 
                        camels in Ladakh, watched dolphins in Northeast India, played in the snow in Manali 
                        and Patnitop, and explored temples, beaches, and forests across India.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-coral/10 rounded-2xl p-6 my-8"
                >
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-8 h-8 text-coral flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">My Love for Reading</h3>
                      <p className="text-muted-foreground">
                        My favourite authors are Enid Blyton, J.K. Rowling, Sudha Murthy, and Rick Riordan 
                        (Percy Jackson). I have read all of Tintin, and classical biographies like Marie 
                        Curie, Gandhi, Einstein, Jhansi Ki Rani, and Dhyan Chand.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-lg leading-relaxed mb-6"
                >
                  I am an outdoor person and enjoy swimming, gymnastics, cycling, trekking, and art. 
                  I am also a 4th year student of Bharatnatyam at Nalanda Dance Institute at Juhu, Mumbai.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-sunshine/10 rounded-2xl p-6 my-8"
                >
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-8 h-8 text-sunshine flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">What Travel Has Taught Me</h3>
                      <p className="text-muted-foreground">
                        Travelling has taught me about nature, animals, people, and different cultures. 
                        I am grateful to my parents, my school, and God for giving me so many opportunities 
                        to explore this beautiful world. I hope to explore many more places!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            My Journey ✨
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-magical border border-border"
              >
                <milestone.icon className={`w-10 h-10 ${milestone.color} mx-auto mb-4`} />
                <p className="text-foreground font-medium text-sm">{milestone.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-coral/20 to-lavender/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Explore My Stories?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/books">
                <Button variant="coral" size="lg">
                  See My Books
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="sky" size="lg">
                  Support My Writing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
