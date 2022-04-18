// const initState: () => State = () => {
//     playerHealth: 0
// };

import State, {Resource} from "./state";

export default class Game {
    private lastFrame: number = Date.now()
    private state: State

    constructor() {
        this.state = {
            health: new Resource(100),
            energy: new Resource(500)
        }
    }

    private update(elapsed: number) {
        const seconds = elapsed / 1000
        this.state.health.subtract(elapsed * 0.005)
        // console.log(`tick ${elapsed}`)
    }

    tick(): State {
        const current = Date.now()
        const elapsed = current - this.lastFrame
        this.update(elapsed)
        this.lastFrame = current
        return this.state
    }
}