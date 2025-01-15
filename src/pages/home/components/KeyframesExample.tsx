
import { Button } from "@/components/ui/button";
import {motion, useAnimate} from "motion/react";

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
            <Button
                onClick={() => {
                    animate(ref.current, {
                        //null is used to signify a 'no change'
                        x: [0, 40, null, -40, null, 0],
                        rotate: [0, null, 90, null, -90, 0],
                        borderRadius: [8, 8, 50, null, 8, null],
                        scale: [1, 1, 1.2, null, 1, null]
                    }, {
                        duration: 3,
                        times: [0.01, 0.1, 0.2, 0.5, 0.8, 0.99]
                    })
                }}
            >Run Animation</Button>
        </div>
    </div>)
}

export default KeyFramesExample