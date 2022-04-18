import * as React from 'react';
import {createRoot} from "react-dom/client";
import {Resources} from './ui';
import Game from "./game";
import State from "./state";

class UI extends React.Component<{ state: State }, { width: number, height: number }> {
    state = {
        width: 200,
        height: 200,
        absoluteWidth: 200,
        absoluteHeight: 200,
        absoluteLeft: 0,
        absoluteTop: 0
    };

    render() {
        return (
            <div style={{backgroundColor: "grey", width: '500px', height: '500px'}}>
                <div>{`${process.env.PACKAGE_VERSION}`}</div>
                <Resources resources={[
                    {name: "Health", color: "red", resource: this.props.state.health},
                    {name: "Energy", color: "green", resource: this.props.state.energy},
                ]}/>
            </div>
        );
    }
}

const game = new Game()
const rootElem = document.getElementById('root')!
const root = createRoot(rootElem)


const simFps = 30
const interval = simFps / 1000
setInterval(() => {
    const state = game.tick()
    const app = <div><UI state={state}/></div>
    root.render(app)
}, interval)
