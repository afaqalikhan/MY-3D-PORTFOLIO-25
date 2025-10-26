import { HTML, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <HTML center className="text-xl font-normal text-center">
      {progress} % loaded
    </HTML>
  );
};

export default Loader;
