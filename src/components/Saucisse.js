/** @jsxImportSource theme-ui */

import { useEffect, useRef } from "react"
import Matter from "matter-js"
import sausage from "../assets/sausage.png"
import doggo from "../assets/doggo.png"

export function Saucisse() {
    var Engine = Matter.Engine,
        World = Matter.World,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Constraint = Matter.Constraint,
        Mouse = Matter.Mouse,
        Body = Matter.Body,
        Bodies = Matter.Bodies,
        Render = Matter.Render,
        Vertices = Matter.Vertices,
        Common = Matter.Common

    Common.setDecomp(require("poly-decomp"))

    const sausageVec = Vertices.fromPath(
        `M3.61853 6.89582C5.36381 4.98144 8.13486 2.93464 12.0865 0.633704C64.7254 11.3578 94.5398 11.8496 147.826 0.653305C152.055 5.23279 153.875 8.78387 153.78 12.3413C153.683 15.9435 151.624 19.6908 147.715 24.6596C121.766 30.8322 101.378 33.8755 80.7527 33.857C60.1072 33.8385 39.1998 30.7522 12.2133 24.6414C8.86481 22.1537 6.21503 19.9624 4.36089 17.9343C2.48706 15.8847 1.47656 14.056 1.32542 12.3087C1.17625 10.5842 1.8564 8.82869 3.61853 6.89582Z`
    )

    const scene = useRef()
    var engine = Engine.create()
    var world = engine.world

    useEffect(() => {
        var render = Render.create({
            element: scene.current,
            engine: engine,

            options: {
                width: 1200,
                height: 1200,
                wireframes: false,
                background: "transparent",
            },
        })

        Matter.Runner.run(engine)
        Matter.Render.run(render)

        var group = Body.nextGroup(true)

        var hongery = Bodies.rectangle(200, 200, 140, 160, {
            isStatic: false,

            render: {
                sprite: {
                    yOffset: -0.02,
                    // xOffset: 0.241,
                    xScale: 0.5,
                    yScale: 0.5,
                    texture: doggo,
                },
            },
        })

        var ropeA = Composites.stack(-900, 250, 16, 1, 1, 1, function (x, y) {
            return Bodies.rectangle(x, y, 109, 53, {
                collisionFilter: { group: group },
                frictionAir: 0.05,

                // friction: 0.1,

                density: 0.004,
                render: {
                    sprite: {
                        yOffset: 0.25,
                        xScale: 0.5,
                        yScale: 0.5,
                        texture: sausage,
                    },
                },
            })
        })

        ropeA = Matter.Composite.add(ropeA, hongery)

        Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
            stiffness: 0.9,
            length: 0,
            render: { type: "line", strokeStyle: "#000", lineWidth: 2 },
        })

        Composite.add(world, [
            ropeA,
            // Constraint.create({
            //     bodyB: ropeA.bodies[0],
            //     pointA: { x: 1250, y: 700 },
            //     length: 0,
            //     stiffness: 0.6,
            //     render: {
            //         visible: false,
            //     },
            // }),
            // Constraint.create({
            //     bodyB: ropeA.bodies[ropeA.bodies.length - 1],
            //     pointA: { x: 200, y: 0 },
            //     length: 0,
            //     stiffness: 0.6,
            //     render: {
            //         visible: false,
            //     },
            // }),
            Constraint.create({
                pointA: { x: 1250, y: 700 },
                bodyB: ropeA.bodies[0],
                pointB: { x: -25, y: 0 },
                length: 2,
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            }),
            Constraint.create({
                frictionAir: 0.07,
                density: 0.004,
                pointA: { x: 200, y: -70 },
                bodyB: ropeA.bodies[ropeA.bodies.length - 1],
                pointB: { x: 20, y: 20 },
                length: 0.01,
                stiffness: 0.9,
                render: {
                    visible: false,
                },
            }),
        ])

        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.1,
                    render: {
                        visible: false,
                        type: "pin",
                        lineWidth: 1,
                    },
                },
            })

        mouseConstraint.mouse.element.removeEventListener(
            "mousewheel",
            mouseConstraint.mouse.mousewheel
        )
        mouseConstraint.mouse.element.removeEventListener(
            "DOMMouseScroll",
            mouseConstraint.mouse.mousewheel
        )

        World.add(world, mouseConstraint)
    }, [
        Bodies,
        Body,
        Composite,
        Composites,
        Constraint,
        Mouse,
        MouseConstraint,
        Render,
        World,
        engine,
        sausageVec,
        world,
    ])
    return <div ref={scene} style={{ width: "1200px", height: "1200px" }} />
}
