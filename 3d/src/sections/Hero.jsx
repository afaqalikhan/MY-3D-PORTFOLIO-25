import HeroText from "../components/HeroText";
import ParallexBackground from "../components/ParallexBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";
import { easing } from "maath";
import { Suspense } from "react";

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
          <Suspense fallback={ <Loader/> }>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
