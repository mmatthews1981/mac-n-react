import { createConnectedStore } from 'undux'

let initialState = {
    time: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
}

export default createConnectedStore(initialState)