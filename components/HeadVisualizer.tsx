'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useDeviceStore } from '@/store/deviceStore';
import * as THREE from 'three';

const HeadModel = () => {
  const group = useRef<THREE.Group>(null!);
  const { scene } = useGLTF('/Head.glb');
  const { rollDiff, pitchDiff } = useDeviceStore();

  // Clone the scene to avoid issues with reusing the same object
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.degToRad(rollDiff);
      group.current.rotation.z = THREE.MathUtils.degToRad(pitchDiff);
    }
  });

  return <primitive object={clonedScene} ref={group} scale={0.15} position={[0, 0.2, 0]} />;
};

const HeadVisualizer = () => {
  const { isAlerting, alertReason } = useDeviceStore();

  const getAlertColor = () => {
    if (!isAlerting) return 'cyan';
    if (alertReason > 0) return 'red';
    return 'yellow';
  };

  return (
    <Canvas
      style={{ height: '400px', width: '100%' }}
      camera={{ position: [0, 0.2, 2.5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <React.Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 1, 2]} intensity={2} />
        <pointLight
          position={[0, 0.5, 1]}
          color={getAlertColor()}
          intensity={isAlerting ? 50 : 0}
          distance={2}
        />
        <HeadModel />
      </React.Suspense>
    </Canvas>
  );
};

export default HeadVisualizer;
