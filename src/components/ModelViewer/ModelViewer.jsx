import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../Box";
import Section from "../Section/Section";
import css from "./ModelViewer.module.css";
import { Kotlovan } from "../../models/Kotlovan";
import { OrbitControls } from "@react-three/drei";

const ModelViewer = () => {
  return (
    <Section>
      <div className={css.canvasWrapper}>
        <Canvas camera={{ position: [0, 90, 0] }}>
          {/* <Box position={[-4, 0, 0]} />
          <Box position={[0, 0, 0]} />
          <Box position={[0, 0, 0]} rotation={(Math.PI / 4, Math.PI / 4, 0)} />
          <Box position={[4, 0, 0]} /> */}
          <OrbitControls />
          <hemisphereLight intensity={(0, 3)} />
          <Suspense>
            <Kotlovan />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
};

export default ModelViewer;

// для ініціалізації програми three js потрібно три складових:
// Сцена (Canvas )
// камера (camera)
// та рендеринг (задається автоматично)
// Розміри Canvas будуть приймати розмір батька
// camera={{ position: [0, 0, 5] }}  координати положення камери xyz*/
