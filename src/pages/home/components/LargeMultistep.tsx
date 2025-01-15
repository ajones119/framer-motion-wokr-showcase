
import { lumberjackImageConfig } from "@/components/animation-wrappers/page-scroll-progress";
import SpriteSheetAnimation from "@/components/animation-wrappers/sprite";
import PYLogo from "@/components/misc/pylogo";
import {motion} from "motion/react";
import { useRef } from "react";

const LargeMultistepExample = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    return (<div className="flex w-full">
            <motion.div
                className="fixed top-0 left-0"
            >
                <div
                    id="black-backdrop"
                    className="fixed top-0 left-0 pointer-events-none h-screen w-screen bg-black z-50 opacity-0"
                />
                <motion.div
                    id="star-backdrop"
                    initial={{
                        x: '-100%'
                    }}
                    className="fixed top-0 left-0 pointer-events-none h-screen w-screen bg-black z-50"
                    style={{
                        backgroundImage: 'url(/starsky.jpg)',
                        backgroundRepeat: 'repeat',
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundSize: "800px 400px",
                    }}
                />
                <motion.div
                    id="mountain-backdrop"
                    initial={{
                        x: '-100%'
                    }}
                    className="fixed top-0 left-0 pointer-events-none h-screen w-screen bg-red z-50 opacity-0"
                    style={{
                        backgroundImage: 'url(/mountain-bg.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                    }}
                />
                <motion.div
                    id="lumberJackContainer"

                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 10,
                        originX: 0,
                        zIndex: 200,
                        backgroundColor: 'red'
                    }}
                >
                    <div
                        id="lumberjackWalk"
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: 0
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
                        id="lumberjackStill"
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: 0
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
                        id="lumberjackRun"
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: 0
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
                    <div
                        id="lumberjackPush"
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: 0
                        }}
                    >
                        <SpriteSheetAnimation
                            imageUrl={lumberjackImageConfig['push'].imageUrl}
                            frameHeight={48}
                            frameWidth={48}
                            numberOfFrames={lumberjackImageConfig['push'].numberOfFrames}
                            heightOffset={0}
                            fps={lumberjackImageConfig['push'].fps}
                        />
                    </div>
                    <div
                        id="lumberjackCut"
                        className="mt-[-15px] ml-[-15px] absolute"
                        style={{
                            zIndex: 23,
                            opacity: 0
                        }}
                    >
                        <SpriteSheetAnimation
                            imageUrl={lumberjackImageConfig['cut'].imageUrl}
                            frameHeight={48}
                            frameWidth={48}
                            numberOfFrames={lumberjackImageConfig['cut'].numberOfFrames}
                            heightOffset={0}
                            fps={lumberjackImageConfig['cut'].fps}
                        />
                    </div>

                </motion.div>
                
                <motion.div
                    initial={{x: -1000}}
                    className="fixed"
                    style={{
                        zIndex: 200,
                        left: 0,
                        bottom: 40
                    }}
                    id="tree"
                >
                    <img src='/fir_tree_4.png' />
                </motion.div>

                <motion.div
                    initial={{x: -1000}}
                    className="fixed"
                    style={{
                        zIndex: 200,
                        left: 0,
                        bottom: 40
                    }}
                    id="tree2"
                >
                    <img src='/fir_tree_3.png' />
                </motion.div>

                <motion.div
                    initial={{x: 3000}}
                    className="fixed"
                    style={{
                        zIndex: 200,
                        left: 0,
                        bottom: 40
                    }}
                    id="tree3"
                >
                    <img src='/fir_tree_4.png' />
                </motion.div>

                <motion.div
                    initial={{x: -1000}}
                    className="fixed"
                    style={{
                        zIndex: 200,
                        left: 0,
                        bottom: 40
                    }}
                    id="tree4"
                >
                    <img src='/fir_tree_4.png' />
                </motion.div>

                <motion.div
                    initial={{x: -1000}}
                    className="fixed"
                    style={{
                        zIndex: 200,
                        left: 0,
                        bottom: 40
                    }}
                    id="tree5"
                >
                    <img src='/fir_tree_3.png' />
                </motion.div>

                <div
                    id="pyLogo"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 200,
                        opacity: 0,
                        scale: 1.2
                    }}
                >
                    <PYLogo />
                </div>
            </motion.div>

            <motion.div id='text-crawl-container-outer'
            className="pointer-events-none"
                style={{
                    position: "fixed",
                    top: 0,
    
                    left: '32vw',
                    zIndex: 200,
                    opacity: 0,
                    perspective: '400px',
                }}>
                <div
                    id='text-crawl-container-inner'
                    className="max-w-[600px] text-yellow-300 font-extrabold text-2xl pointer-events-none"
                    style={{
                        position: 'relative',
                        top: -100,
                        transformOrigin: "50% 100%"
                    }}
                >
                    <div id="title" className="flex flex-col gap-4">
                        <h1>PerformYard</h1>
                        <p>Take Flight. Perform Better.</p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4">
                            <p>A long time ago, in a workplace not so far away…</p>
                            <h2>PERFORMYARD</h2>
                            <p>
                            In a time of growth and change, organizations across the galaxy struggled to unlock the full potential of their employees. Goals were forgotten, feedback was lost in the void, and engagement fell to the dark side.
                            </p>
                            <p>
                            But hope was not lost. From the ashes of chaos, <strong>PerformYard</strong> emerged—a powerful platform designed to bring balance to performance tracking and feedback.
                            </p>
                            <p>
                            By harnessing the wisdom of reviews, the power of clear goals, and the voice of anonymous engagement, PerformYard unites employees and leaders across the cosmos.
                            </p>
                            <p>
                            Join the Rebellion against inefficiency. Lead your team to greatness. <strong>PerformYard—where feedback takes flight.</strong>
                            </p>
                        </div>
                    
                    </div>
                </div>
                <audio ref={audioRef} id="audio">
                <source
                    type="audio/mpeg"
                    src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
                />
</audio>
            </motion.div>
    </div>)
}

export default LargeMultistepExample


/*
 <div className="w-full m-auto p-2">
            <h3 className="font-bold text-2xl">Controls</h3>
            <h6>Animate Controls</h6>
            <Button
                onClick={() => {
                    startAnimation()
                }}
            >Run Animation</Button>
        </div>
*/

/*potential steps
1 screen fades to black
2. sprite fades in
3. sprite walks to edge of screen and "pulls" in new color (maybe try adding dust???)
4. sprite runs off screen
5. PY logo  with starwars esc intro???


*/