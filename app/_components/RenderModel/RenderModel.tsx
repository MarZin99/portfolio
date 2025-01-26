'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import styles from './RenderModel.module.css';
import clsx from 'clsx';
import RenderModelProps from './RenderModel.types';

const RenderModel = (props: RenderModelProps) => {
  const { className, children, camera } = props;
  return (
    <Canvas camera={camera} className={clsx(styles.canvas, className)}>
      {children}
    </Canvas>
  );
};

export default RenderModel;
