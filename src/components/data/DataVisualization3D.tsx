
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface DataPoint {
  position: [number, number, number];
  size: number;
  color: string;
}

// Generate some sample data points for visualization
const generateDataPoints = (count: number): DataPoint[] => {
  return Array.from({ length: count }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ],
    size: Math.random() * 0.5 + 0.2,
    color: [
      '#2A9D8F',
      '#3E78B2', 
      '#1A2B49',
      '#435B66',
      '#CBE2F5'
    ][Math.floor(Math.random() * 5)]
  }));
};

const DataPoints = ({ points }: { points: DataPoint[] }) => {
  return (
    <>
      {points.map((point, i) => (
        <DataSphere key={i} point={point} />
      ))}
    </>
  );
};

const DataSphere = ({ point }: { point: DataPoint }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!sphereRef.current) return;
    // Add subtle movement to each sphere
    sphereRef.current.rotation.x += 0.002;
    sphereRef.current.rotation.y += 0.003;
  });
  
  return (
    <mesh 
      position={point.position} 
      ref={sphereRef}
    >
      <sphereGeometry args={[point.size, 16, 16]} />
      <meshStandardMaterial 
        color={point.color}
        roughness={0.5}
        metalness={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Completely rewritten Lines component to avoid the error
const Lines = ({ points }: { points: DataPoint[] }) => {
  // Create fewer lines to reduce complexity
  const connections = React.useMemo(() => {
    return Array.from({ length: points.length / 4 }, () => {
      const startIdx = Math.floor(Math.random() * points.length);
      const endIdx = Math.floor(Math.random() * points.length);
      return {
        start: points[startIdx].position,
        end: points[endIdx].position,
        color: points[startIdx].color
      };
    });
  }, [points]);

  return (
    <>
      {connections.map((connection, i) => (
        <SimpleLine 
          key={i}
          start={connection.start} 
          end={connection.end} 
          color={connection.color} 
        />
      ))}
    </>
  );
};

// Fixed line implementation using THREE.Line primitive
const SimpleLine = ({ 
  start, 
  end, 
  color 
}: { 
  start: [number, number, number]; 
  end: [number, number, number]; 
  color: string; 
}) => {
  // Create points for the line
  const points = React.useMemo(() => {
    // Create an array of Vector3 points
    const pointsArray = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ];
    
    // Create a BufferGeometry from the points
    const geometry = new THREE.BufferGeometry().setFromPoints(pointsArray);
    return geometry;
  }, [start, end]);

  return (
    <primitive object={new THREE.Line(
      points,
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 })
    )} />
  );
};

const Scene = () => {
  const dataPoints = generateDataPoints(40);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Float
        speed={2} 
        rotationIntensity={0.5} 
        floatingRange={[-0.2, 0.2]}
      >
        <DataPoints points={dataPoints} />
        <Lines points={dataPoints} />
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
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md text-data-navy dark:text-data-lightblue text-sm pointer-events-none">
        <p>Interactive 3D Data Visualization</p>
        <p className="text-xs text-muted-foreground">Drag to rotate • Scroll to zoom</p>
      </div>
    </motion.div>
  );
}
