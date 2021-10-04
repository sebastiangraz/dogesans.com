/** @jsxImportSource theme-ui */

import React, { useState, useEffect, useRef } from "react"
import Matter from "matter-js"
import { useWindowDimension } from "./useWindowDimension"
import sausage from "../assets/sausage.png"
import sausageInv from "../assets/sausage-inv.png"
import doggo from "../assets/doggo.png"
import { useResponsiveValue } from "@theme-ui/match-media"

export function SaucisseComponent() {
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
        Common = Matter.Common,
        Events = Matter.Events,
        Runner = Matter.Runner

    const [width, height] = useWindowDimension()

    const boxRef = useRef(null),
        canvasRef = useRef(null),
        engine = Engine.create(),
        world = engine.world

    useEffect(() => {
        var render = Render.create({
            element: boxRef.current,
            engine: engine,
            canvas: canvasRef.current,
            options: {
                pixelRatio: "1",
                width: width,
                height: height,
                wireframes: false,
                background: "transparent",
            },
        })
        Runner.run(engine, {
            isFixed: true,
        })
        Render.run(render)

        var hongery = Bodies.rectangle(0, 0, 200, 160, {
            // friction: Infinity,

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

        var bridge = Composites.stack(150, 290, 13, 1, 0, 0, function (x, y) {
            return Bodies.rectangle(x, y, 180, 300, {
                collisionFilter: { group: group },
                density: 0.005,
                frictionAir: 0.05,
                render: {
                    sprite: {
                        // yOffset: -0.05,
                        yScale: 0.5,
                        xScale: 0.5,
                        texture: Common.choose([sausageInv, sausage]),
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
                    },
                },
            })

        mouseConstraint.mouse.element.removeEventListener(
            "mousewheel",
            mouseConstraint.mouse.mousewheel,
            { passive: true }
        )
        mouseConstraint.mouse.element.removeEventListener(
            "DOMMouseScroll",
            mouseConstraint.mouse.mousewheel,
            { passive: true }
        )

        mouseConstraint.mouse.element.removeEventListener(
            "touchmove",
            mouseConstraint.mouse.mousemove,
            { passive: true }
        )
        mouseConstraint.mouse.element.removeEventListener(
            "touchstart",
            mouseConstraint.mouse.mousedown,
            { passive: true }
        )
        mouseConstraint.mouse.element.removeEventListener(
            "touchend",
            mouseConstraint.mouse.mouseup,
            { passive: true }
        )
        World.add(world, mouseConstraint)

        render.mouse = mouse
    })

    return (
        <div ref={boxRef} sx={{}} style={{ width: "100%", height: "100%" }}>
            <canvas ref={canvasRef} />
        </div>
    )
}

export const Saucisse = React.memo(SaucisseComponent)
