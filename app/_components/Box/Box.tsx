import React from 'react';
import BoxProps from '@/app/_components/Box/Box.type';
import { extend } from '@react-three/fiber';
import ColorShiftMaterial from '../../_shaders/first/shader';

extend({ ColorShiftMaterial });

const Box = (props: BoxProps) => {
  const { className, size, castShadow = false } = props;
  const meshRef = React.useRef<HTMLDivElement>(null);
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame

  return (
    <mesh
      {...props}
      ref={meshRef}
      className={className}
      rotation={[0, 0, 0]}
      castShadow={castShadow}
    >
      <colorShiftMaterial />
      <boxGeometry args={size} />
    </mesh>
  );
};

export default Box;
