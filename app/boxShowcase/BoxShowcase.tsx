'use client';

import RenderModel from '../_components/RenderModel';
import Box from '@/app/_components/Box/Box';
import React from 'react';

const BoxShowcase = () => {
  return (
    <RenderModel camera={{ position: [0, 1, 5], fov: 45, near: 1, far: 20 }}>
      <ambientLight intensity={0.2} color={0x404040} />
      <color attach='background' args={['#15151a']} />
      <pointLight
        position={[7, 3, 4]}
        color={0xfdffe0}
        intensity={280}
        distance={10}
      />
      <Box size={[1, 1, 1]} castShadow />
    </RenderModel>
  );
};
export default BoxShowcase;
