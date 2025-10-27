import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import sky from "../assets/sky.jpg";
import mountain from "../assets/mountain-3.png";
import planet from "../assets/planets.png";
import mountain2 from "../assets/mountain-2.png";
import mountain1 from "../assets/mountain-1.png";

const ParallexBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {damping : 50});
  const mountain3Y = useTransform(x, [0, 0.5], ["0", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0", "0%"]);

  return (
    <div className="bg-black/40 absolute inset-0">
      <div className="h-screen relative overflow-y-hidden">
        {/* Background Sky */}
        <div
          style={{
            backgroundImage: `url(${sky})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          className="absolute inset-0 -z-50 h-screen w-full"
        />
        {/* Mountain Layer 3 */}
        <motion.div
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain3Y,
          }}
          className="absolute inset-0 -z-40"
        />
        {/* planets */}
        <motion.div
          style={{
            backgroundImage: `url(${planet})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x:planetsX
          }}
          className="absolute inset-0 -z-30"
        />
        {/* Mountain layer 2 */}
        <motion.div
          style={{
            backgroundImage: `url(${mountain2})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain2Y,
          }}
          className="absolute inset-0 -z-20"
        />
        {/* Mountain layer 1 */}
        <motion.div
          style={{
            backgroundImage: `url(${mountain1})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain1Y,
          }}
          className="absolute inset-0 -z-10"
        />
      </div>
    </div>
  );
};

export default ParallexBackground;
