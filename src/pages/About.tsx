import { motion } from "framer-motion";
import { BookOpen, Heart, Lightbulb, Sparkles, Star, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/decorations/FloatingElements";

const About = () => {
  const milestones = [
    { icon: Star, label: "Started writing at age 6", color: "text-sunshine" },
    { icon: BookOpen, label: "Published my first book", color: "text-coral" },
    { icon: Heart, label: "Thousands of happy readers", color: "text-primary" },
    { icon: Target, label: "Working on more books!", color: "text-sky" },
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
              About the Author <Sparkles className="inline w-8 h-8 text-sunshine animate-sparkle" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the young storyteller behind the magic!
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
                  My Story
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-lg leading-relaxed mb-6"
                >
                  She is a young storyteller who believes every child has magic inside them. 
                  From the moment she could hold a pencil, she's been creating worlds filled 
                  with wonder, adventure, and friendship. Her imagination knows no bounds – 
                  whether she's writing about talking animals in enchanted forests or brave 
                  heroes exploring underwater kingdoms.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground text-lg leading-relaxed mb-6"
                >
                  Her love for stories began when her parents read to her every night. Those 
                  magical moments inspired her to create her own tales – stories that would 
                  make other children feel the same wonder and joy she felt. Today, she 
                  spends her free time writing, drawing, and dreaming up new adventures.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-muted/50 rounded-2xl p-6 my-8"
                >
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-8 h-8 text-sunshine flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Where Do Ideas Come From?</h3>
                      <p className="text-muted-foreground">
                        "My ideas come from everywhere! Sometimes I see a butterfly and wonder 
                        where it's going. Sometimes I dream about magical places at night. 
                        And sometimes, I just start drawing and a whole story appears!"
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  Her dream? To become a full-time author and illustrator, creating stories 
                  that will be loved by children all around the world. She believes that 
                  through stories, we can learn kindness, bravery, and the importance of 
                  following our dreams – no matter how young we are.
                </motion.p>
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
            My Writing Journey ✨
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
              <Link to="/art">
                <Button variant="sky" size="lg">
                  View My Art
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
