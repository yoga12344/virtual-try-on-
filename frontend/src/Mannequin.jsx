import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Mannequin({ shoulderWidth }) {
  const group = useRef();

  // Convert real measurements to 3D scale (Approximate logic)
  // Assuming base scale is 1, and 40cm is average shoulder
  const scaleFactor = shoulderWidth ? shoulderWidth / 40 : 1; 

  useFrame((state, delta) => {
    // Optional: Make it breathe or rotate slowly
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} position={[0, -1.5, 0]} scale={[scaleFactor, 1, 1]}>
      {/* HEAD */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>

      {/* NECK */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6, 32]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>

      {/* TORSO (The Shirt Area) */}
      <mesh position={[0, 1, 0]}>
        {/* Width changes based on shoulderWidth prop */}
        <boxGeometry args={[1.2, 2, 0.5]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      {/* LEFT ARM */}
      <mesh position={[-0.75, 1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 2, 32]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>

      {/* RIGHT ARM */}
      <mesh position={[0.75, 1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 2, 32]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>

      {/* LEGS */}
      <mesh position={[-0.3, -1.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 3, 32]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.3, -1.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 3, 32]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}