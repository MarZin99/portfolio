import React from 'react';
import BoxProps from '@/app/_components/Box/Box.type';

const Box = (props: BoxProps) => {
  const { className, size, castShadow = false } = props;
  const meshRef = React.useRef<HTMLDivElement>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = React.useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      className={className}
      rotation={[0, 0, 0]}
      castShadow={castShadow}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      <meshPhongMaterial />
    </mesh>
  );
};

export default Box;
