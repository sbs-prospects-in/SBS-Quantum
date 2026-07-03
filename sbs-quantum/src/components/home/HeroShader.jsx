import { Suspense } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

export default function HeroShader() {
  const prefersReducedMotion = useReducedMotion();

  // If the user prefers reduced motion, render a fallback solid color or static image instead
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 w-full h-full bg-[#BE8C53] flex items-center justify-center">
        {/* We can use the fallback poster image here, but for now a gradient background works */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BE8C53] to-[#DBBA95] opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[#BE8C53] overflow-hidden">
      <Suspense fallback={<div className="w-full h-full bg-[#BE8C53]" />}>
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: 'absolute',
            top: 0,
            pointerEvents: 'none',
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={3.6}
            cPolarAngle={90}
            cameraZoom={1}
            color1="#BE8C53"
            color2="#DBBA95"
            color3="#BE8C53"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            fov={45}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="enabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="plane"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </Suspense>
    </div>
  );
}
