import React from 'react';
import BoxProps from '@/app/_components/Box/Box.type';
// import ColorShiftMaterial from '../../_shaders/first/shader';


const Box = (props: BoxProps) => {
  const { size, castShadow = false } = props;
  const meshRef = React.useRef<HTMLDivElement>(null);
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame

  return (
    <mesh
      {...props}
      ref={meshRef}
      rotation={[0, 0, 0]}
      castShadow={castShadow}
    >
      <boxGeometry args={size}  />
    </mesh>
  );
};

export default Box;
