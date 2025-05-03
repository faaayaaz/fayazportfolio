
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// A simpler and more reliable approach for data points
const DataPoint = ({ position, size, color }: { position: [number, number, number], size: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.5} 
        metalness={0.2} 
        transparent 
        opacity={0.8} 
      />
    </mesh>
  );
};

const DataGrid = () => {
  // Create a grid of data points for a more organized visualization
  const colors = ['#2A9D8F', '#3E78B2', '#1A2B49', '#435B66', '#CBE2F5'];
  const gridSize = 3;
  const points = [];

  // Generate a structured grid of points
  for (let x = -gridSize; x <= gridSize; x++) {
    for (let y = -gridSize; y <= gridSize; y++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        // Only create points at certain intervals to avoid overcrowding
        if (Math.abs(x) % 2 === 0 && Math.abs(y) % 2 === 0 && Math.abs(z) % 2 === 0) {
          points.push({
            position: [x * 2, y * 2, z * 2] as [number, number, number],
            size: 0.4 + Math.random() * 0.3,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
      }
    }
  }
  
  return (
    <group>
      {points.map((point, i) => (
        <DataPoint 
          key={i} 
          position={point.position} 
          size={point.size} 
          color={point.color} 
        />
      ))}
    </group>
  );
};

const DataLabels = () => {
  return (
    <>
      <Text
        position={[0, -7, 0]}
        color="#2A9D8F"
        fontSize={0.8}
        anchorX="center"
        anchorY="middle"
      >
        Data Analytics
      </Text>
      
      <Text
        position={[7, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        color="#3E78B2"
        fontSize={0.7}
        anchorX="center"
        anchorY="middle"
      >
        Machine Learning
      </Text>
      
      <Text
        position={[0, 0, 7]}
        rotation={[0, Math.PI, 0]}
        color="#1A2B49"
        fontSize={0.7}
        anchorX="center"
        anchorY="middle"
      >
        Visualization
      </Text>
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <Float
        speed={2} 
        rotationIntensity={0.5} 
        floatingRange={[-0.2, 0.2]}
      >
        <DataGrid />
        <DataLabels />
      </Float>
      
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

export default function DataVisualization3D() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gradient-to-br from-data-navy/10 to-data-lightblue/10 rounded-xl overflow-hidden border border-data-lightblue/30 dark:border-data-blue/30"
    >
      <Canvas
        camera={{ position: [15, 10, 15], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md text-data-navy dark:text-data-lightblue text-sm pointer-events-none">
        <p>3D Data Visualization Grid</p>
        <p className="text-xs text-muted-foreground">Drag to rotate • Scroll to zoom</p>
      </div>
    </motion.div>
  );
}
