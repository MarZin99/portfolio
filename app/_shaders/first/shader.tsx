import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// import shaderVertex from './shader.vertex.glsl';
// import shaderFragment from './shader.fragment.glsl';
//glsl import doesnt work

const ColorShiftMaterial = shaderMaterial(
  {},
  // shaderVertex, shaderFragment
  'varying vec2 vUv;\n' +
    'void main() {\n' +
    '    vUv = uv;\n' +
    '    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n' +
    '}',
  'uniform float time;\n' +
    'uniform vec3 color;\n' +
    'varying vec2 vUv;\n' +
    'void main() {\n' +
    '    gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);\n' +
    '}'
);
extend({ ColorShiftMaterial });

export default ColorShiftMaterial;
