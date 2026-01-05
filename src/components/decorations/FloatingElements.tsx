import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

interface FloatingElement {
  icon: "star" | "sparkle";
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const floatingElements: FloatingElement[] = [
  { icon: "star", size: 20, x: 10, y: 20, delay: 0, duration: 4 },
  { icon: "sparkle", size: 16, x: 85, y: 15, delay: 1, duration: 5 },
  { icon: "star", size: 14, x: 75, y: 70, delay: 2, duration: 4.5 },
  { icon: "sparkle", size: 18, x: 20, y: 75, delay: 0.5, duration: 5.5 },
  { icon: "star", size: 12, x: 90, y: 45, delay: 1.5, duration: 4 },
  { icon: "sparkle", size: 22, x: 5, y: 50, delay: 2.5, duration: 5 },
  { icon: "star", size: 16, x: 50, y: 10, delay: 0.8, duration: 4.2 },
  { icon: "sparkle", size: 14, x: 60, y: 85, delay: 1.8, duration: 5.2 },
];

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.icon === "star" ? (
            <Star
              className="text-sunshine fill-sunshine"
              style={{ width: element.size, height: element.size }}
            />
          ) : (
            <Sparkles
              className="text-primary"
              style={{ width: element.size, height: element.size }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
