import { ITrack } from "./ITrack";


export interface IPlayer {
    active: null | ITrack
    volume: number
    duration: number
    currentTime: number
    pause: boolean
}

