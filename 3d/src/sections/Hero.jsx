import React from "react";
import HeroText from "../components/HeroText";
import ParallexBackground from "../components/ParallexBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Astronaut } from "../components/Astronaut";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex justify-center items-start md:justify-center md:items-start  min-h-screen overflow-hidden px-5 sm:px-10 lg:px-15 border border-amber-500">
      <HeroText />
      <ParallexBackground />
      <figure
        style={{
          width: "100vw",
          height: "100vh",
        }}
        className="absolute inset-0"
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Astronaut
            scale={isMobile && 0.23}
            position={isMobile && [0, -1.5, 0]}
          />
          <OrbitControls />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
