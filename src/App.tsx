import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from './components/Planet';
import { OrbitRing } from './components/OrbitRing';
import { InfoPanel } from './components/InfoPanel';
import { planets } from './data/planetData';
import { useState } from 'react';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 20, 35], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        {/* Sun */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshBasicMaterial color="#FDB813" />
        </mesh>

        {planets.map((planet, index) => (
          <group key={planet.name}>
            <OrbitRing radius={planet.position[0]} />
            <Planet
              position={planet.position}
              radius={planet.radius}
              textureUrl={planet.textureUrl}
              rotationSpeed={planet.rotationSpeed}
              onClick={() => setSelectedPlanet(planet)}
            />
          </group>
        ))}

        <OrbitControls 
          enablePan={false}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>

      <InfoPanel planetInfo={selectedPlanet} />
      
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-2xl font-bold mb-2">Solar System Explorer</h1>
        <p className="text-gray-400">Click on any planet to learn more about it</p>
      </div>
    </div>
  );
}

export default App;