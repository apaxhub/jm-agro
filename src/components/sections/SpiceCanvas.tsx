"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sphere, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function SpiceModel() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.004;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.8}>
            <MeshDistortMaterial
                color="#74C69D"
                attach="material"
                distort={0.35}
                speed={1.2}
                roughness={0.3}
                metalness={0.1}
            />
        </Sphere>
    );
}

export default function SpiceCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} color="#F4F1E8" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#74C69D" />
            <SpiceModel />
            <Environment preset="forest" />
        </Canvas>
    );
}
