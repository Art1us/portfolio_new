import { IShipData, Journey } from "../types/types"

interface IDestroyersData extends IShipData {
    shuttles?: { id: number; journey: Journey }[]
    jumpDelay: number
}

export const destroyers: IDestroyersData[] = [
    /* {
        id: 0,
        journey: [[[200, 0, -800], 1], [[0, 0, 0]]],
        shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ],
    }, */
    {
        id: 1,
        journey: [[[0, 0, 0], 0.2], [[10, 0, 10]]],
        jumpDelay: 0,
        shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ],
    },
    /* {
        id: 2,
        journey: [[[5, 23, -400], 0], [[20, 25, 500]]],
        jumpDelay: 1000,
    },
    {
        id: 3,
        journey: [[[2, -10, -375], 0], [[12, -5, 500]]],
        jumpDelay: 1100,
    },
    {
        id: 4,
        journey: [[[25, 5, -405], 0], [[-40, 10, 500]]],
        jumpDelay: 2000,
    },
    {
        id: 5,
        journey: [[[22, -10, -370], 0], [[-30, 20, 500]]],
        jumpDelay: 2050,
    }, */
]