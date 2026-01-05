import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Star, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/decorations/FloatingElements";
import { useState } from "react";

const Support = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDonate = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const supportTiers = [
    {
      name: "Story Starter",
      amount: "$5",
      description: "Help buy art supplies for illustrations",
      icon: Star,
      color: "bg-sunshine",
    },
    {
      name: "Chapter Champion",
      amount: "$15",
      description: "Support the printing of new books",
      icon: Heart,
      color: "bg-coral",
    },
    {
      name: "Book Believer",
      amount: "$30",
      description: "Fund a complete book project",
      icon: Sparkles,
      color: "bg-lavender",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-coral/20 to-background overflow-hidden">
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
              className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-primary flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              <Heart className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Support My Stories <Sparkles className="inline w-8 h-8 text-sunshine animate-sparkle" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Your kindness helps me create more magical adventures for children everywhere!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Where Your Support Goes 💖
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every donation helps bring magical stories to life! Your support goes toward:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { emoji: "🎨", text: "Art supplies & illustrations" },
                { emoji: "📚", text: "Printing & publishing books" },
                { emoji: "✨", text: "Creating new adventures" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted/50 rounded-2xl p-6"
                >
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <p className="text-foreground font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            Choose Your Support Level
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl p-8 shadow-card-magical border border-border text-center"
              >
                <div className={`w-16 h-16 rounded-full ${tier.color} flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{tier.amount}</p>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <Button variant="coral" className="w-full" onClick={handleDonate}>
                  Donate {tier.amount}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Payment Options
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="gap-2" onClick={handleDonate}>
                <CreditCard className="w-5 h-5" />
                PayPal
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={handleDonate}>
                <Wallet className="w-5 h-5" />
                Stripe
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={handleDonate}>
                <CreditCard className="w-5 h-5" />
                UPI
              </Button>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              All payments are processed securely through trusted platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 shadow-magical border border-border">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Safety & Transparency 🛡️
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This website and all donations are managed by the child's parents/guardians. 
                    All funds go directly toward supporting creative projects, including book 
                    illustrations, printing, and publishing. We are committed to maintaining 
                    complete transparency and safety in all our operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card rounded-3xl p-10 shadow-glow text-center max-w-md mx-4"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-6xl mb-6"
            >
              💖
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Thank You So Much!
            </h2>
            <p className="text-muted-foreground">
              Your support means the world to me and helps me create more magical stories!
            </p>
            <div className="flex justify-center gap-2 mt-6">
              {["⭐", "✨", "🌟", "💫", "⭐"].map((star, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ delay: i * 0.1, repeat: Infinity, duration: 1.5 }}
                  className="text-2xl"
                >
                  {star}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Support;
