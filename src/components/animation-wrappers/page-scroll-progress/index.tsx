
import { motion, useSpring, useScroll, useMotionTemplate, useMotionValueEvent } from "motion/react"
import { PropsWithChildren, useCallback, useState} from "react"
import SpriteSheetAnimation from "../sprite";

export const lumberjackImageConfig = {
    'walk': {
        imageUrl:'/Woodcutter_walk.png',
        numberOfFrames: 6,
        fps: 20
    },
    'still': {
        imageUrl:'/Woodcutter_idle.png',
        numberOfFrames: 4,
        fps: 10
    },
    'run': {
        imageUrl:'/Woodcutter_run.png',
        numberOfFrames: 6,
        fps: 20
    },
    'push': {
        imageUrl:'/Woodcutter_push.png',
        numberOfFrames: 6,
        fps: 20
    },
    'cut': {
        imageUrl:'/Woodcutter_attack2.png',
        numberOfFrames: 6,
        fps: 20
    }
}

export default function PageScrollProgress({children}: PropsWithChildren) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    //motion template takes in a format and makes a motion value string
    const left = useMotionTemplate`calc(${scaleX} * ${window.innerWidth - 20}px)`;

    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'rest'>('rest');
    const [animation, setAnimation ] = useState<'still' | 'walk' | 'run'>('still')

    //https://motion.dev/docs/react-use-motion-value-event#advanced
    useMotionValueEvent(scaleX, "change", useCallback(() => {
        const current = scrollYProgress.get();
        const previous = scrollYProgress.getPrevious() || 0;

        if (previous && current > previous) {
            scrollDirection !== 'down' && setScrollDirection('down');
        } else if (previous && current < previous) {
            scrollDirection !== 'up' && setScrollDirection('up')
        } else {
            //setScrollDirection('rest')
        }

        const diff = Math.abs((current - previous) * 100);
        if (diff > 0.3) {
            animation !== 'run' && setAnimation('run');
        } else if (diff > 0.02) {
            animation !== 'walk' && setAnimation('walk');
        } else {
            animation !== 'still' && setAnimation('still');
        } 
    }, [animation, scrollDirection]))

    return (
        <div className="flex justify-center m-auto">
            <div className="flex w-screen fixed top-0 left-0 z-40">
                <motion.div
                    id="scroll-indicator"
                    style={{
                        scaleX,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 20,
                        originX: 0,
                        backgroundColor: "#cbd5e1",
                        zIndex: 20
                    }}
                />
                <motion.div
                    style={{
                        position: "relative",
                        top: 0,
                        left,
                        right: 0,
                        height: 10,
                        originX: 0,
                        zIndex: 21,
                        transform: scrollDirection == 'up' ? 'scaleX(-1)' : undefined
                    }}
                >
                    <div
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: animation === 'walk' ? 1 : 0
                        }}
                    >
                        <SpriteSheetAnimation
                            imageUrl={lumberjackImageConfig['walk'].imageUrl}
                            frameHeight={48}
                            frameWidth={48}
                            numberOfFrames={lumberjackImageConfig['walk'].numberOfFrames}
                            heightOffset={0}
                            fps={lumberjackImageConfig['walk'].fps}
                        />
                    </div>
                    <div
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: animation === 'still' ? 1 : 0
                        }}
                    >
                        <SpriteSheetAnimation
                            imageUrl={lumberjackImageConfig['still'].imageUrl}
                            frameHeight={48}
                            frameWidth={48}
                            numberOfFrames={lumberjackImageConfig['still'].numberOfFrames}
                            heightOffset={0}
                            fps={lumberjackImageConfig['still'].fps}
                        />
                    </div>
                    <div
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: animation === 'run' ? 1 : 0
                        }}
                    >
                        <SpriteSheetAnimation
                            imageUrl={lumberjackImageConfig['run'].imageUrl}
                            frameHeight={48}
                            frameWidth={48}
                            numberOfFrames={lumberjackImageConfig['run'].numberOfFrames}
                            heightOffset={0}
                            fps={lumberjackImageConfig['run'].fps}
                        />
                    </div>

                </motion.div>
            </div>
            {children}
        </div>
    )
}
