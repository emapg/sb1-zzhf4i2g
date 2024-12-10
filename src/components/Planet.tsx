import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  radius: number;
  textureUrl: string;
  rotationSpeed?: number;
  onClick?: () => void;
}

export function Planet({ position, radius, textureUrl, rotationSpeed = 0.01, onClick }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = new THREE.TextureLoader().load(textureUrl);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} onClick={onClick}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </mesh>
  );
}