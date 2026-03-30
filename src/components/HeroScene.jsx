import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ff4500"
          attach="material"
          distort={0.35}
          speed={2.5}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  )
}

function OrbitRing({ radius, speed, color, tilt }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed
    }
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <Torus args={[radius, 0.008, 16, 100]}>
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </Torus>
    </mesh>
  )
}

function FloatingParticles() {
  const count = 60
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return pos
  }, [])

  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#ff7b00" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function SmallOrb({ position, color, size = 0.25, speed = 1 }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
      ref.current.rotation.x = state.clock.elapsedTime * 0.5
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} transparent opacity={0.8} />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, 3, 3]} intensity={1.5} color="#ff4500" />
        <pointLight position={[4, -3, 2]} intensity={1} color="#ff7b00" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffa07a" />

        <AnimatedSphere />
        <OrbitRing radius={2.5} speed={0.3} color="#ffa07a" tilt={Math.PI / 4} />
        <OrbitRing radius={3.2} speed={-0.2} color="#ff4500" tilt={Math.PI / 3} />
        <OrbitRing radius={4} speed={0.15} color="#ff7b00" tilt={Math.PI / 6} />

        <SmallOrb position={[3, 1.5, 0]} color="#ffa07a" size={0.2} speed={1.2} />
        <SmallOrb position={[-3, -1, 0.5]} color="#ff4500" size={0.15} speed={0.8} />
        <SmallOrb position={[2.5, -2, -0.5]} color="#ff7b00" size={0.25} speed={1.5} />
        <SmallOrb position={[-2, 2, 0]} color="#ff8c00" size={0.12} speed={1} />

        <FloatingParticles />
        <Stars radius={30} depth={10} count={300} factor={2} fade speed={0.5} />
      </Canvas>
    </div>
  )
}
