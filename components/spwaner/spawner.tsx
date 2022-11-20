import {Cylinder, Plane} from "@react-three/drei";
import {useRef} from "react";
import {Color, Group, Object3D, Vector3} from "three";
import {useFrame} from "@react-three/fiber";

export default function Spawner({x} = {x: 10}) {
    function X_spawner(Zat = 0) {
        let obj = new Array(x);
        let X = -x / 2, Y = 0, Z = Zat;

        for (let i = 0; i < x; i++) {
            const height = .2 + Math.random();

            obj[i] = <Plane args={[.4, height]} position={[X += 1, height / 2, Z]} key={i}>
                <meshBasicMaterial color={new Color(0, 0, Z)}/>
            </Plane>;
        }
        return obj;
    }

    function Zx_spawner(n = 1) {
        let obj = new Array(n);
        for (let i = 0; i < n; i++) {
            obj[i] = X_spawner(-i);
        }
        return obj;
    }

    const ref = useRef<Group>(null!);

    useFrame(() => {
        ref.current.position.x -= .01;
    });

    return (
        <>
            <group ref={ref} position={[0, -2, 0]}>
                {Zx_spawner(10)}
            </group>
        </>
    )
}