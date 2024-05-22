import { OrbitControls, Stats, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Group, Object3DEventMap } from "three";

function Loader() {
  return <div className="loader"></div>;
}

const ContactModel = () => {
  const ref = useRef<Group<Object3DEventMap>>(null);
  const { nodes, materials } = useGLTF("/models/robot.glb");
  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [0, 1, 1] }} shadows>
        <spotLight
          position={[2.5, 5, 5]}
          angle={Math.PI / 3}
          penumbra={0.5}
          castShadow
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
          intensity={Math.PI * 50}
        />
        <spotLight
          position={[-2.5, 5, 5]}
          angle={Math.PI / 3}
          penumbra={0.5}
          castShadow
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
          intensity={Math.PI * 50}
        />
        <group ref={ref} dispose={null}>
          <group name="Scene">
            <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <primitive object={nodes.mixamorigHips} />
              <skinnedMesh
                castShadow
                name="Mesh"
                frustumCulled={false}
                geometry={nodes.Mesh.geometry}
                material={materials.SpacePirate_M}
                skeleton={nodes.Mesh.skeleton}
              />
            </group>
          </group>
        </group>
        <OrbitControls target={[0, 0.75, 0]} />
        <Stats />
      </Canvas>
    </Suspense>
  );
};

export default ContactModel;
