import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'




type props = {
    position: number[],
    linkToUrl: string,
    scale: number;
}

function Figure({ position, linkToUrl, scale }: props): React.ReactElement {
    // This reference will give us direct access to the mesh
    const positionVector: Vector3 = new Vector3().fromArray(position);

    const meshRef = useRef<THREE.Mesh>(null!);



    const gltf = useLoader(GLTFLoader, linkToUrl)


    return (

        <primitive
            // {...position}
            ref={meshRef}
            scale={scale}
            position={positionVector}

            object={gltf.scene} // Use the 'scene' property from the loaded GLTF model
        >
        </primitive>
    )
}

export default Figure