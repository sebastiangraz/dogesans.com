/** @jsxImportSource theme-ui */

import { useEffect, useRef } from "react"
import Matter from "matter-js"
import sausage from "../assets/sausage.png"
import sausageInv from "../assets/sausage-inv.png"
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
        Common = Matter.Common,
        Events = Matter.Events

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
                height: 1600,
                wireframes: false,
                background: "transparent",
            },
        })

        Matter.Runner.run(engine)
        Matter.Render.run(render)

        var hongery = Bodies.rectangle(0, 0, 200, 160, {
            friction: Infinity,

            render: {
                sprite: {
                    yOffset: 0.16,
                    xOffset: 0.075,
                    xScale: 0.5,
                    yScale: 0.5,
                    texture: doggo,
                },
            },
        })

        var group = Body.nextGroup(true)

        var bridge = Composites.stack(150, 290, 16, 1, 0, 0, function (x, y) {
            return Bodies.rectangle(x, y, 180, 300, {
                collisionFilter: { group: group },
                density: 0.005,
                frictionAir: 0.05,
                render: {
                    sprite: {
                        // yOffset: -0.05,
                        yScale: 0.5,
                        xScale: 0.5,
                        texture: Matter.Common.choose([sausageInv, sausage]),
                    },
                },
            })
        })

        bridge.bodies.unshift(hongery)

        Composites.chain(bridge, 0.3, 0, -0.3, 0, {
            stiffness: 0.9,
            length: 0,
            render: { type: "line", strokeStyle: "#000", lineWidth: 2 },
        })

        Composite.add(world, [
            bridge,

            Constraint.create({
                pointA: { x: 400, y: -80 },
                bodyB: bridge.bodies[0],
                pointB: { x: -25, y: 0 },
                length: 2,
                stiffness: 0.7,
                render: {
                    visible: false,
                },
            }),
            Constraint.create({
                pointA: { x: 1300, y: 800 },
                bodyB: bridge.bodies[bridge.bodies.length - 1],
                pointB: { x: 25, y: 0 },
                length: 0,
                stiffness: 1,
                render: {
                    visible: false,
                },
            }),
        ])
        var explosion = function (engine) {
            var bodies = Composite.allBodies(engine.world)

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i]

                if (!body.isStatic && body.position.y >= 500) {
                    var forceMagnitude = 0.05 * body.mass

                    Body.applyForce(body, body.position, {
                        x:
                            (forceMagnitude +
                                Common.random() * forceMagnitude) *
                            Common.choose([1, -1]),
                        y: -forceMagnitude + Common.random() * -forceMagnitude,
                    })
                }
            }
        }

        var counter = 0,
            rando = 0

        Events.on(engine, "beforeUpdate", function (event) {
            counter += 1

            // every 1.5 sec
            if (counter >= 60 * rando) {
                explosion(engine)

                // reset counter
                counter = 0
                rando = Common.random(6, 9)
            }
        })

        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.02,
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
        render.mouse = mouse
    }, [
        Bodies,
        Body,
        Common,
        Composite,
        Composites,
        Constraint,
        Events,
        Mouse,
        MouseConstraint,
        Render,
        World,
        engine,
        sausageVec,
        world,
    ])
    return <div ref={scene} style={{ width: "1200px", height: "100%" }} />
}
