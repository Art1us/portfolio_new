import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { deathStar } from "../../../const/deathStar"
import { DEATH_STAR_SIZE } from "../../../const/sizes"
import { DeathStarClass } from "../../../model/DeathStarClass"
import { useFrame } from "@react-three/fiber"
import { Rotation } from "modules/Canvas/types/types"
import { PI } from "modules/Canvas/lib/math/basics"
import { DeviceType } from "shared/data"

export function DeathStar({ currentDevice }: { currentDevice: DeviceType }) {
    const { journey, /* rateOfYRotation, */ jumpDelay } = deathStar[currentDevice]
    const deathStarScene = useGLTF("./death_star/scene.gltf")
    const deathStarRef = useRef<THREE.Group>(null)
    const classRef = useRef(new DeathStarClass(journey))
    const isCanMoveRef = useRef(false)
    const { position, rotation } = classRef.current.getData()

    function alignDeathStar(r: Rotation): Rotation {
        const [x, y, z] = r
        return [-z, y + PI / 2, -x]
    }

    useEffect(() => {
        setTimeout(() => {
            isCanMoveRef.current = true
        }, jumpDelay)
    }, [])

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!deathStarRef.current || isReachedEnd || speed === 0 || !isCanMoveRef.current) return
        const { position } = classRef.current.move(deathStarRef.current.position)
        deathStarRef.current.position.set(...position)
        /* if (rotation) {
            const [x, _, z] = alignDeathStar(rotation)
            deathStarRef.current.rotation.x = x
            deathStarRef.current.rotation.y -= rateOfYRotation
            deathStarRef.current.rotation.z = z
        } else {
            deathStarRef.current.rotation.y -= rateOfYRotation
        } */
    })

    return (
        <group
            ref={deathStarRef}
            scale={DEATH_STAR_SIZE}
            position={position}
            rotation={alignDeathStar(rotation)}
        >
            <primitive object={deathStarScene.scene} />
        </group>
    )
}
