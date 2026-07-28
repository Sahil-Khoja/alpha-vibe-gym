import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function Dumbbell() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.2;
      ref.current.rotation.y += dt * 0.35;
    }
  });
  return (
    <group ref={ref as never}>
      {/* bar */}
      <mesh castShadow>
        <cylinderGeometry args={[0.18, 0.18, 3, 32]} />
        <meshStandardMaterial color="#c9d3e0" metalness={1} roughness={0.15} />
      </mesh>
      {/* plates */}
      {[-1.35, -1.05, 1.05, 1.35].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.22, 48]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#0b0f17" : "#1a2233"} metalness={0.8} roughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.2;
  });
  return (
    <mesh ref={ref} position={[2.6, -1.6, -2]} scale={1.4}>
      <icosahedronGeometry args={[1, 6]} />
      <MeshDistortMaterial color="#3b82f6" distort={0.4} speed={1.4} roughness={0.2} metalness={0.6} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <pointLight position={[-4, -2, -2]} color="#ef4444" intensity={20} distance={10} />
      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
          <group rotation={[0.4, 0.3, 0.6]}>
            <Dumbbell />
          </group>
        </Float>
        <Blob />
        <Sparkles count={60} scale={10} size={2} speed={0.4} color="#7cc0ff" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
