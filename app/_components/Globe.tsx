'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';

export default function Globe() {
  return (
    <div>
      Globe
      <Canvas>
        <ambientLight />
      </Canvas>
    </div>
  );
}
