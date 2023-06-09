import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { Position, Rotation } from "../../../types/types"
import { SHUTTLE_SIZE } from "../../../const/sizes"

type GLTFResult = GLTF & {
    nodes: {
        Material1022: THREE.Mesh
        Material1020: THREE.Mesh
        Material2006: THREE.Mesh
        Material3: THREE.Mesh
        Material4: THREE.Mesh
        Material5: THREE.Mesh
        Material1019: THREE.Mesh
        Material1018: THREE.Mesh
        Material1017: THREE.Mesh
        Material2005: THREE.Mesh
        Material1016: THREE.Mesh
        Material2004: THREE.Mesh
        Material1015: THREE.Mesh
        Material2003: THREE.Mesh
        Material1014: THREE.Mesh
        Material2002: THREE.Mesh
        Material1025: THREE.Mesh
        Material1026: THREE.Mesh
        Material1024: THREE.Mesh
        Material1021: THREE.Mesh
        Material2007: THREE.Mesh
        Material1023: THREE.Mesh
        Material2008: THREE.Mesh
        Material1002: THREE.Mesh
        Material1003: THREE.Mesh
        Material1004: THREE.Mesh
        Material1005: THREE.Mesh
        Material1006: THREE.Mesh
        Material1007: THREE.Mesh
        Material2: THREE.Mesh
        Material1008: THREE.Mesh
        Material1009: THREE.Mesh
        Material1010: THREE.Mesh
        Material1011: THREE.Mesh
        Material1012: THREE.Mesh
        Material1013: THREE.Mesh
        Material2001: THREE.Mesh
        Material1: THREE.Mesh
        Material1001: THREE.Mesh
    }
    materials: {
        material: THREE.MeshStandardMaterial
        Default: THREE.MeshStandardMaterial
        Ala_Sup__sotto: THREE.MeshStandardMaterial
        CORPO_SOTTO: THREE.MeshStandardMaterial
        GLOW: THREE.MeshStandardMaterial
        Front: THREE.MeshStandardMaterial
        SPORCO2: THREE.MeshStandardMaterial
        Muso: THREE.MeshStandardMaterial
        Sporco: THREE.MeshStandardMaterial
        Lower_wing: THREE.MeshStandardMaterial
        lower_wing__up: THREE.MeshStandardMaterial
        lower_wing__up_2: THREE.MeshStandardMaterial
        Base_wing: THREE.MeshStandardMaterial
        Upper_wing: THREE.MeshStandardMaterial
    }
}
interface IShuttleScene {
    shuttleRef: any
    position: Position
    rotation: Rotation
}

export function ShuttleScene(props: IShuttleScene) {
    const { shuttleRef, position, rotation } = props
    const { nodes, materials } = useGLTF("/shuttle/scene.gltf") as GLTFResult
    return (
        <group
            ref={shuttleRef}
            position={position}
            rotation={rotation}
            scale={SHUTTLE_SIZE}
            dispose={null}
        >
            <group
                position={[0.6, 0.57, 0.57]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={0.004}
            >
                <group position={[147.34, -34.03, -61.87]}>
                    <group position={[-9, -224.26, 69.54]}>
                        <group
                            position={[8.78, 154.27, 276.68]}
                            rotation={[0, 0, -Math.PI]}
                            scale={92.49}
                        >
                            <mesh
                                geometry={nodes.Material1020.geometry}
                                material={materials.Default}
                            />
                            <mesh
                                geometry={nodes.Material2006.geometry}
                                material={materials.Ala_Sup__sotto}
                            />
                            <mesh
                                geometry={nodes.Material3.geometry}
                                material={materials.CORPO_SOTTO}
                            />
                            <mesh geometry={nodes.Material4.geometry} material={materials.GLOW} />
                            <mesh geometry={nodes.Material5.geometry} material={materials.Front} />
                        </group>
                        <group
                            position={[209.05, 57, -173.15]}
                            rotation={[-0.03, 0, -Math.PI]}
                            scale={92.49}
                        >
                            <mesh
                                geometry={nodes.Material1017.geometry}
                                material={materials.Default}
                            />
                            <mesh
                                geometry={nodes.Material2005.geometry}
                                material={materials.Ala_Sup__sotto}
                            />
                        </group>
                        <group
                            position={[209.05, 114.78, -170.68]}
                            rotation={[0.03, 0, -Math.PI]}
                            scale={92.49}
                        >
                            <mesh
                                geometry={nodes.Material1016.geometry}
                                material={materials.Default}
                            />
                            <mesh
                                geometry={nodes.Material2004.geometry}
                                material={materials.Ala_Sup__sotto}
                            />
                        </group>
                        <group
                            position={[-191.48, 57, -173.15]}
                            rotation={[-0.03, 0, -Math.PI]}
                            scale={92.49}
                        >
                            <mesh
                                geometry={nodes.Material1015.geometry}
                                material={materials.Default}
                            />
                            <mesh
                                geometry={nodes.Material2003.geometry}
                                material={materials.Ala_Sup__sotto}
                            />
                        </group>
                        <group
                            position={[-191.48, 114.78, -170.68]}
                            rotation={[0.03, 0, -Math.PI]}
                            scale={92.49}
                        >
                            <mesh
                                geometry={nodes.Material1014.geometry}
                                material={materials.Default}
                            />
                            <mesh
                                geometry={nodes.Material2002.geometry}
                                material={materials.Ala_Sup__sotto}
                            />
                        </group>
                        <mesh
                            geometry={nodes.Material1019.geometry}
                            material={materials.CORPO_SOTTO}
                            position={[8.78, 154.27, 276.68]}
                            rotation={[0, 0, -Math.PI]}
                            scale={92.49}
                        />
                        <mesh
                            geometry={nodes.Material1018.geometry}
                            material={materials.CORPO_SOTTO}
                            position={[8.78, 154.27, 276.68]}
                            rotation={[0, 0, -Math.PI]}
                            scale={92.49}
                        />
                    </group>
                    <group
                        position={[7.96, 155.38, 65.64]}
                        rotation={[-0.32, 0, 0]}
                        scale={[1, 0.86, 0.99]}
                    >
                        <mesh geometry={nodes.Material1021.geometry} material={materials.SPORCO2} />
                        <mesh geometry={nodes.Material2007.geometry} material={materials.Muso} />
                    </group>
                    <group
                        position={[-0.17, -89.32, 334.68]}
                        rotation={[0.1, 0, -Math.PI]}
                        scale={[92.49, 78.5, 92.39]}
                    >
                        <mesh geometry={nodes.Material1023.geometry} material={materials.SPORCO2} />
                        <mesh geometry={nodes.Material2008.geometry} material={materials.Default} />
                    </group>
                    <group position={[424.4, -113.93, -332.49]}>
                        <group position={[-207.26, 42.72, 176.32]} rotation={[3.14, 1.57, -1.57]}>
                            <mesh
                                geometry={nodes.Material1007.geometry}
                                material={materials.lower_wing__up}
                            />
                            <mesh
                                geometry={nodes.Material2.geometry}
                                material={materials.lower_wing__up_2}
                            />
                        </group>
                        <mesh
                            geometry={nodes.Material1002.geometry}
                            material={materials.Sporco}
                            position={[-217.04, 81.63, 171.07]}
                            rotation={[-0.01, -0.02, 3.09]}
                            scale={2.58}
                        />
                        <mesh
                            geometry={nodes.Material1003.geometry}
                            material={materials.Sporco}
                            position={[-0.05, -72.68, -0.01]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={-92.49}
                        />
                        <mesh
                            geometry={nodes.Material1004.geometry}
                            material={materials.Sporco}
                            position={[-0.05, -72.68, -0.01]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={-92.49}
                        />
                        <mesh
                            geometry={nodes.Material1005.geometry}
                            material={materials.Sporco}
                            position={[-0.05, -72.68, -0.01]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={-92.49}
                        />
                        <mesh
                            geometry={nodes.Material1006.geometry}
                            material={materials.Lower_wing}
                            position={[-207.24, 42.71, 176.34]}
                            rotation={[3.14, 1.57, -1.57]}
                        />
                    </group>
                    <group
                        position={[-424.46, -113.93, -332.49]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                    >
                        <group position={[-207.26, 42.72, 176.32]} rotation={[3.14, 1.57, -1.57]}>
                            <mesh
                                geometry={nodes.Material1013.geometry}
                                material={materials.lower_wing__up}
                            />
                            <mesh
                                geometry={nodes.Material2001.geometry}
                                material={materials.lower_wing__up_2}
                            />
                        </group>
                        <mesh
                            geometry={nodes.Material1008.geometry}
                            material={materials.Sporco}
                            position={[-217.04, 81.63, 171.07]}
                            rotation={[-0.01, -0.02, 3.09]}
                            scale={2.58}
                        />
                        <mesh
                            geometry={nodes.Material1009.geometry}
                            material={materials.Sporco}
                            position={[-0.05, -72.68, -0.01]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={-92.49}
                        />
                        <mesh
                            geometry={nodes.Material1010.geometry}
                            material={materials.Sporco}
                            position={[-0.05, -72.68, -0.01]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={-92.49}
                        />
                        <mesh
                            geometry={nodes.Material1011.geometry}
                            material={materials.Sporco}
                            position={[-0.05, -72.68, -0.01]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={-92.49}
                        />
                        <mesh
                            geometry={nodes.Material1012.geometry}
                            material={materials.Lower_wing}
                            position={[-207.24, 42.71, 176.34]}
                            rotation={[3.14, 1.57, -1.57]}
                        />
                    </group>
                    <group position={[-0.15, -155.66, 456.22]}>
                        <mesh
                            geometry={nodes.Material1.geometry}
                            material={materials.Base_wing}
                            position={[-0.06, 92.39, -110]}
                            rotation={[0, 0, -Math.PI]}
                            scale={92.49}
                        />
                        <mesh
                            geometry={nodes.Material1001.geometry}
                            material={materials.Upper_wing}
                            position={[-0.06, 84.2, -110]}
                            rotation={[0, 0, -Math.PI]}
                            scale={92.49}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Material1022.geometry}
                        material={materials.material}
                        position={[1.57, 129.87, -3.45]}
                        rotation={[-2.09, 0, -Math.PI]}
                        scale={[0.97, 0.96, 0.87]}
                    />
                    <mesh
                        geometry={nodes.Material1025.geometry}
                        material={materials.SPORCO2}
                        position={[-0.07, 97.16, -77.99]}
                    />
                    <mesh
                        geometry={nodes.Material1026.geometry}
                        material={materials.SPORCO2}
                        position={[-0.07, 130.74, -76.36]}
                        scale={0.88}
                    />
                    <mesh
                        geometry={nodes.Material1024.geometry}
                        material={materials.SPORCO2}
                        position={[0.04, 7.22, -12.96]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.94}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/shuttle/scene.gltf")
