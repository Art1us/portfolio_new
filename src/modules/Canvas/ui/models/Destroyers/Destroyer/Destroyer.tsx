import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { DestroyerScene } from "./DestroyerScene"
import { IDestroyersData, Journey } from "../../../../types/types"
import { DestroyerClass } from "../../../../model/DestroyerClass"
import { alignToX } from "../../../../lib/alignToX"
import { Shuttle } from "../../Shuttle/Shuttle"

interface IDestroyer {
    data: IDestroyersData
}

export function Destroyer(props: IDestroyer) {
    const { data } = props
    const destroyerRef = useRef<THREE.Group>(null)
    const classRef = useRef(new DestroyerClass(data))
    const isCanMoveRef = useRef(false)
    const { position, rotation } = classRef.current.getData()

    const [isDeploymentStarted, setIsDeploymentStarted] = useState(false)
    const [shuttleJourneys, setShuttlesJourneys] = useState<Journey[] | null>(null)

    useEffect(() => {
        setTimeout(() => {
            isCanMoveRef.current = true
        }, data.jumpDelay)
    }, [])

    useFrame(() => {
        const { speed } = classRef.current
        if (!destroyerRef.current || speed === 0 || !isCanMoveRef.current) return
        const { position, rotation } = classRef.current.move(destroyerRef.current.position)
        destroyerRef.current.position.set(...position)
        rotation && destroyerRef.current.rotation.set(...alignToX(rotation))

        if (classRef.current.isReachedEnd && !isDeploymentStarted) {
            setIsDeploymentStarted(true)
            setShuttlesJourneys(classRef.current.generateShuttlesJourneys(position))
        }
    })

    return (
        <>
            <DestroyerScene
                destroyerRef={destroyerRef}
                position={position}
                rotation={alignToX(rotation)}
            />
            {isDeploymentStarted &&
                shuttleJourneys?.map((item, index) => {
                    const delay = index * (Math.floor(Math.random() * (1000 - 800 + 1)) + 800)
                    return (
                        <Shuttle key={`shuttle${data.id}.${index}`} journey={item} delay={delay} />
                    )
                })}
        </>
    )
}

//useGLTF.preload("/scene.gltf")
