import React, {useEffect} from "react";
import {motion, useMotionValue} from 'framer-motion';

import '../css/mousecursor.css'

const MouseCursor = () => {

    const cursorSize = 28;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouseMove = (e) => {
        const {clientX, clientY} = e;
        mouse.x.set(clientX - cursorSize/2);
        mouse.y.set(clientY - cursorSize/2);
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
    })

    return (<motion.div
    className="
    spray
    w-8
    h-8
    fixed
    bg-white
    rounded-full
    "
    style={{left: mouse.x, top: mouse.y}}>
    </motion.div>)
}

export default MouseCursor;