import { useFrame } from "@react-three/fiber";

import React, { useRef } from "react";

const Box = (props) => {
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += 0.001));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

export default Box;

// ref.current.rotation.x += 0.01 означає що обертання буде відбуватись навколо осі x
// mesh це сітка
// boxGeometry відповідає за модель (каркас)
// meshBasicMaterial відповідає за матеріал
// ref використовується для звертання до Дом вузла для анімації
