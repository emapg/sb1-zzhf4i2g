import * as THREE from 'three';

interface OrbitRingProps {
  radius: number;
}

export function OrbitRing({ radius }: OrbitRingProps) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#666666" opacity={0.3} transparent />
    </line>
  );
}