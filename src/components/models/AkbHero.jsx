// src/components/models/AkbHero.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useProgress } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function AkbHero(props) {
  const group = useRef();
  const { progress } = useProgress();
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false);

  // load original scene
  const { scene } = useGLTF("/models/akb.glb");

  // clone the scene so this instance has its own skeleton/material objects
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // this keeps your nodes/materials lines and avoids sharing skeletons
  const { nodes, materials } = useGraph(clone);

  const mouse = useRef(new THREE.Vector2());

  // intro animation
  useGSAP(() => {
    if (progress === 100 && group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: () => setIsIntroAnimationDone(true),
      });
    }
  }, [progress]);

  // mouse-follow logic (after intro)
  useEffect(() => {
    if (!isIntroAnimationDone) return;

    function handleMouseMove(event) {
      const { innerWidth, innerHeight } = window;
      mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;

      const target = new THREE.Vector3(mouse.current.x, mouse.current.y, 1);

      const head = group.current.getObjectByName("Head");
      head?.lookAt(target);

      group.current.rotation.y = target.x * 0.5;
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isIntroAnimationDone]);


  useEffect(() => {
    if (!group.current || !clone) return;
    // add the clone so skeletons/bones exist in the scene graph (necessary for skinnedMesh)
    group.current.add(clone);
    return () => {
      try {
        group.current.remove(clone);
      } catch (e) { }
    };
  }, [clone]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}
