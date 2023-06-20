import { useEffect, useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export function Airplane(props) {
  const { nodes, materials } = useGLTF("./models/airplane/paper-airplane.glb");
  const meshRef = useRef();

  return (
    <>
      <directionalLight intensity={0.1} position={[0, 3, 1]} />
      <group {...props} dispose={null}>
        <mesh ref={meshRef} geometry={nodes.Plane.geometry}>
          <meshStandardMaterial {...materials.White} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("./models/airplane/paper-airplane.glb");
