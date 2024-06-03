import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css'

function Model(modelUrl: string) {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas camera={{ position: [0.8, 0, 0.1], fov: 25 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <spotLight />
      <directionalLight intensity={Math.PI * 1} position={[10, 30, 5]} />
      <directionalLight intensity={Math.PI * 0.5} position={[-10, 5, 5]} />
      <directionalLight intensity={Math.PI * 1} position={[10, -25, 10]} />
      <directionalLight intensity={Math.PI * 1} position={[0, -10, 10]} />
      <directionalLight intensity={Math.PI * 0.5} position={[10, 25, -10]} />
      <Suspense fallback={null}>
        <Model modelUrl='scene.gltf' />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;



