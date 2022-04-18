import * as React from 'react';
import {Resource} from "./state";

export declare type ResourceBarProps = {
    resource: Resource,
    color: string,
    style?: React.CSSProperties
}

export const ResourceBar = ({resource, color, style}: ResourceBarProps) => (
    <div style={{...style, display: "flex", justifyContent: "left", alignContent: "end", flexDirection: "row"}}>
        <div style={{width: "100%", height: "100%"}}>
            <div style={{
                position: "fixed",
                paddingLeft: "5px",
                paddingTop: "auto",
                offset: "bottom",
                display: "block",
                zIndex: 2
            }}>{resource.amount.toFixed(0)}/{resource.max.toFixed(0)}</div>
            <div style={{width: "100%", height: "100%"}}>
                <div style={{
                    zIndex: 1,
                    width: `${resource.max > 0 ? resource.percent().toFixed(0) : 0}%`,
                    height: "100%",
                    color: color,
                    backgroundColor: color
                }}/>
            </div>
        </div>
    </div>
)


export type ResourcesProps = {
    resources: ({ name: string } & ResourceBarProps)[]
}

export const Resources = ({resources}: ResourcesProps) => {
    const data = resources.map(({resource, color, name}) =>
        <tr>
            <td style={{verticalAlign: "middle"}}>{name}:</td>
            <td><ResourceBar resource={resource} color={color} style={{
                width: "200px",
                height: "20px"
            }}/></td>
        </tr>
    )
    return (
        <table children={data}/>
    )
}
