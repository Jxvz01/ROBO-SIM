import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import { OrbitControls, Environment, Sky, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

const Ground = () => {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[100, 1, 100]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
    </RigidBody>
  )
}

const TestBox = () => {
  return (
    <RigidBody position={[0, 5, 0]}>
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0ea5e9" />
      </mesh>
    </RigidBody>
  )
}

function Scene() {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[100, 100, 100]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      <Physics
        gravity={[0, -9.81, 0]}
        timeStep={1 / 120}
        numSolverIterations={12} /* Increased iterations for precision */
      >
        <Suspense fallback={null}>
          <Ground />
          <TestBox />
        </Suspense>
      </Physics>

      <OrbitControls makeDefault />
      <PerspectiveCamera makeDefault position={[10, 10, 10]} />
    </>
  )
}

function App() {
  return (
    <div className="w-full h-full bg-slate-900 relative">
      <div className="absolute top-4 left-4 z-10 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-2xl">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text text-transparent italic">
          ROBO SIM v1.0
        </h1>
        <p className="text-white/60 text-sm mt-1">High-Precision Robotics Simulation</p>
      </div>

      <Canvas shadows>
        <Scene />
      </Canvas>

      {/* Overlay UI Placeholder */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-xl p-3 rounded-full border border-white/5 shadow-2xl">
        <button className="px-6 py-2 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-medium transition-all">Sumo</button>
        <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all">Soccer</button>
        <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all">Track</button>
      </div>
    </div>
  )
}

export default App
