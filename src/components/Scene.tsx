import { useFrame, useThree } from "@react-three/fiber";
import { useRef, Ref } from "react";
import { OrbitControls } from "@react-three/drei";
import Figure from "./Figure";

interface Props {
    position?: number[];
    linkToUrl: string;
    scale?: number;
}



const Scene = ({ position = [-10, -10, -10], linkToUrl, scale = 1 }: Props) => {
    const {
        camera,
        gl: { domElement },
    } = useThree();


    const figureRef: Ref<any> = useRef(); // Create a ref for the Figure component

    useFrame(() => figureRef.current && figureRef.current.update())

    return (
        <>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
            <Figure position={position} linkToUrl={linkToUrl} scale={scale} />
            <OrbitControls enableZoom enableRotate maxPolarAngle={Math.PI / 2} args={[camera, domElement]} minDistance={100} maxDistance={160} />
        </>
    );
};

export default Scene;