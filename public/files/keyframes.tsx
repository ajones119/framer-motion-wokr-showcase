import {motion, useAnimate} from "motion/react";
import React from "react";

const KeyFramesExample = () => {
    const [ref, animate] = useAnimate();

    return (<div className="flex w-full">
        <div className=" w-full flex items-center justify-center border aspect-square border-accent-foreground">
            <motion.div
                ref={ref}
                className="bg-slate-400 h-[100px] w-[100px]"
            />
        </div>
        <div className="w-full m-auto p-2">
            <h3 className="font-bold text-2xl">Controls</h3>
            <h6>Animate Controls</h6>
            <button
                onClick={() => {
                    animate(ref.current, {
                        //keyframes can be applied to an animation
                        // the duration for an animation defaults to 0.3 seconds, but if there are keyframes, its moved to 0.8 seconds
                        //null is used to signify a 'no change'
                        x: [0, 40, null, -40, null, 0],
                        rotate: [0, null, 90, null, -90, 0],
                        borderRadius: [8, 8, 50, null, 8, null],
                        scale: [1, 1, 1.2, null, 1, null]
                    }, {
                        duration: 3,
                        //times are values between 0 and 1 and signify a 0 to 100%
                        times: [0.01, 0.1, 0.2, 0.5, 0.8, 0.99]
                    })
                }}
            >Run Animation</button>
        </div>
    </div>)
}

export default KeyFramesExample