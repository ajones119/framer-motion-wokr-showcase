import {motion} from "motion/react";
import React from "react";

const BasicExample = () => {
    return (<div className="flex w-full">
        <div className=" w-full flex items-center justify-center border aspect-square border-accent-foreground">
            <motion.div
                className="bg-slate-400 border-black border-solid"
                //these animations will run any time the component mounts or the value changes
                animate={{
                    x: 20,
                    y: '30%',
                    opacity: 1
                }}

                //this is the starting styling of the component that then animated into the 'animate' prop
                initial={{
                    x: -20
                }}

                //here set set transition properties like easing, duration, spring configuration, etc.
                //type: spring can be tweaked with things like mass or friction, but the bounce property provides a quicker and intuitive API that works for the vast majority of cases
                transition={{
                    ease: 'easeInOut'
                }}
            />
        </div>
    </div>)
}

export default BasicExample