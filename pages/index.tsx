import {Canvas} from "@react-three/fiber";
import {Cylinder, GizmoHelper, GizmoViewport, OrbitControls, SpotLight} from "@react-three/drei";
import Spawner from "../components/spwaner/spawner";

export default function Home() {
    return (
        <>
            <div style={{position: "absolute", paddingLeft: 10, zIndex: 100}}>
                <h1>hello</h1>
                <button style={{bottom: 64, right: 64}}>Next</button>
            </div>
            <Canvas>
                <ambientLight/>
                <Spawner x={10}/>
            </Canvas>
        </>
    )
}
