import { Link } from "react-router-dom";
import { BookOpen, Heart, Shield, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-lavender flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Little Explorer
              </span>
              <Sparkles className="w-4 h-4 text-sunshine" />
            </Link>
            <p className="text-muted-foreground text-sm">
              A magical world of stories, dreams, and imagination created by a young author.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-foreground">Explore</h3>
            <div className="flex flex-col gap-2">
              <Link to="/books" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                My Books
              </Link>
              <Link to="/art" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                My Art
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Me
              </Link>
              <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Support My Writing
              </Link>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Safety & Trust</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              This website is managed by the child's parents. All content is protected and monitored to ensure a safe online presence.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Little Explorer. Made with{" "}
            <Heart className="w-4 h-4 inline text-primary animate-gentle-bounce" />{" "}
            and lots of imagination.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            <Shield className="w-3 h-3" />
            Parent-managed website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
