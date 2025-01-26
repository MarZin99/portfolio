type RenderModelProps = {
  className?: string;
  children: React.ReactNode;
  camera: {
    position: [x: number, y: number, z: number];
    fov: number;
    near: number;
    far: number;
  };
};

export default RenderModelProps;
