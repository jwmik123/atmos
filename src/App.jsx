import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Overlay } from "./components/Overlay";

import { useState } from "react";

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, -1, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={20} damping={0.5}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.2} />
        </EffectComposer>
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
