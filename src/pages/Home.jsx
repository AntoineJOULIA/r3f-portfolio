import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";

const Home = () => {
  return (
    <section className="relative w-full h-screen">
      {/* <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-28">POPUP</div> */}
      <Canvas className="w-full h-full bg-transparent" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
