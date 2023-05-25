import { PI } from "../lib/math/basics"
import { IDestroyersData, IShipData, Journey, Position } from "../types/types"
import { ShipClass } from "./ShipClass"

export class DestroyerClass extends ShipClass {
    private shuttlesDeployed = 0
    private shuttles: IShipData[] | null

    constructor(data: IDestroyersData) {
        const inertia = 0.1
        const rateOfTurn = 0.003
        const maxSpeed = 4
        const turnDeceleration = 0.7
        const rateOfTurningList = 0.007 //positive
        const rateOfStabilizingList = 0.005 //positive
        const maxList = PI / 4 - 0.2 //radians

        const { journey, shuttles } = data

        super(journey, {
            inertia,
            rateOfTurn,
            maxSpeed,
            turnDeceleration,
            rateOfTurningList,
            rateOfStabilizingList,
            maxList,
        })
        this.shuttles = shuttles || null
    }

    public generateShuttleJourney(currentPosition: Position): Journey | null {
        if (!this.shuttles?.[this.shuttlesDeployed]) return null

        const [x0, y0, z0] = currentPosition
        const journey = [
            [[x0, y0, z0], 0.3],
            [[x0, y0 - 10, z0], 2],
            ...this.shuttles[this.shuttlesDeployed].journey,
        ]

        this.shuttlesDeployed++

        return journey as Journey
    }
}
