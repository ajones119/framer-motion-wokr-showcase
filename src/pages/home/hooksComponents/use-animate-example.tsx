
import { Button } from "@/components/ui/button";
import {motion, useAnimate} from "motion/react";

const UseAnimateExample = () => {
    //we can run this animate function to animate the container or its children using selectors
    // note the id and element type selectors work, but I have been unable to animate based on class thusfar
    const [ref, animate] = useAnimate();

    const handleAnimation = (selector?: string) => {
        animate(selector || ref.current, {
            x: [0, 40, -40, 0],
        }, {
            duration: 2,
            times: [0.01, 0.2, 0.6, 0.5]
        })
    }

    return (<div className="flex w-full">
        <div className=" w-full flex items-center justify-center border aspect-square border-accent-foreground">
            <motion.div
                ref={ref}
                className=""
            >
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <span>span 4</span>
                    <li id="animate-meh">item 5 *</li>
                    <li>item 6</li>
                </ul>
            </motion.div>
        </div>
        <div className="w-full m-auto p-2 flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Controls</h3>
            <h6>Animate Controls</h6>
            <Button
                onClick={() => handleAnimation()}
            >Run Animate All</Button>
            <Button
                onClick={() => handleAnimation('li')}
            >Run Animate Li</Button>
            <Button
                onClick={() => handleAnimation('#animate-meh')}
            >Run Animate By Id</Button>
        </div>
    </div>)
}

export default UseAnimateExample