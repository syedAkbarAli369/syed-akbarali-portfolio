"use client";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

// Dynamically import Akb model to avoid R3F hook error
const Akb = dynamic(() => import("./models/Akb").then(mod => mod.Akb), {
  ssr: false,
});


export default function ContactExperience() {
  return (
    <div className="relative w-full h-[500px] md:h-full bg-black">
      <Canvas camera={{ position: [0, 0.9, 3], fov: 50 }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 6, 2]} intensity={1.8} castShadow />
        <group rotation={[-0.1, 0.2, 0]} position={[-0.6, -1.4, 0]}>
          <Akb scale={1.2} />
        </group>
      </Canvas>
    </div>
  );
}

