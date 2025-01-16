import { lumberjackImageConfig } from "@/components/animation-wrappers/page-scroll-progress";
import SpriteSheetAnimation from "@/components/animation-wrappers/sprite";
import PYLogo from "@/components/misc/pylogo";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const tree = '/fir_tree_4.png';
const tree1 = '/fir_tree_1.png';
const tree2 = '/fir_tree_2.png';
const tree3 = '/fir_tree_3.png';
const tree4 = '/fir_tree_8.png';

const IntroParallax = () => {
    const container = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scaleSmall = useTransform(scrollYProgress, [0,1], [1,1.5]);
    const scale3 = useTransform(scrollYProgress, [0,1], [1,3]);
    const scale4 = useTransform(scrollYProgress, [0,1], [1,4]);
    const scale5 = useTransform(scrollYProgress, [0,1], [1,5]);
    const scale6 = useTransform(scrollYProgress, [0,1], [1,6]);
    const scale7 = useTransform(scrollYProgress, [0,1], [1,6]);
    const scale8 = useTransform(scrollYProgress, [0,1], [1,8]);
    const scale9 = useTransform(scrollYProgress, [0,1], [1,9]);

    const rotateX = useTransform(scrollYProgress, [0,1], [0, -15]);



    const pictures = [

        {
            src: <img src={tree1} className="fill" style={{objectFit: 'cover'}} />,
            scale: scaleSmall,
            top: 0,
            left: 20
        },
        {
            src: <img src={tree1} className="fill" style={{objectFit: 'cover'}} />,
            scale: scaleSmall,
            top: 0,
            left: 30
        },

        {
            src: <img src={tree1} className="fill" style={{objectFit: 'cover'}} />,
            scale: scaleSmall,
            top: 2,
            left: -10
        },

        {
            src: <img src={tree1} className="fill" style={{objectFit: 'cover'}} />,
            scale: scaleSmall,
            top: 0,
            left: 0
        },

        {
            src: <img src={tree1} className="fill" style={{objectFit: 'cover'}} />,
            scale: scaleSmall,
            top: 3,
            left: 26
        },


        //3
        {
            src: <PYLogo className="scale-75 max-w-[80vw]" />,
            scale: scale3,
            top: 0,
            left: 5
        },


        //4
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale4,
            top: -8,
            left: 2
        },

        {
            src: <img src={tree3} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale4,
            top: -6,
            left: -6
        },

        {
            src: <img src={tree3} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale4,
            top: -8,
            left: 19
        },

        {
            src: <img src={tree2} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale4,
            top: -6,
            left: 26
        },

        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale4,
            top: -4,
            left: 27
        },



        //5
        {
            src: <img src={tree2} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale5,
            top: -5,
            left: -2
        },

        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale5,
            top: -4,
            left: -10
        },

        {
            src: <img src={tree3} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale5,
            top: -5,
            left: 23
        },


        {
            src:  <div className="scale-150"><SpriteSheetAnimation
                    imageUrl={lumberjackImageConfig['cut'].imageUrl}
                    frameHeight={48}
                    frameWidth={48}
                    numberOfFrames={lumberjackImageConfig['cut'].numberOfFrames}
                    heightOffset={0}
                    fps={lumberjackImageConfig['cut'].fps}
                /></div>,
            scale: scale5,
            top: 18,
            left: 28
        },


        //6
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale6,
            top: -3,
            left: -4
        },
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale6,
            top: -2,
            left: 23
        },

        //7

        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale7,
            top: 1,
            left: -7
        },
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale7,
            top: 0,
            left: 28
        },
        {
            src: <img src={tree4} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale7,
            top: 26,
            left: 26
        },

        //8
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale8,
            top: 4,
            left: -10
        },
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale8,
            top: 5,
            left: 28
        },
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale8,
            top: 5,
            left: 0
        },

        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale8,
            top: 7,
            left: 19
        },

        //9
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale9,
            top: 9,
            left: -12
        },
        {
            src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale9,
            top: 9,
            left: 31
        },

    ]

    return (
        <div className="h-[400vh] relative" ref={container}>
            <motion.div style={{rotateX}} className="sticky top-0 h-[100vh] left-0 w-[98.5vw] overflow-hidden">
                { pictures.map((picture, index) => 
                    <motion.div style={{scale: picture.scale}} key={index} className="w-full h-full absolute flex items-center justify-center">
                        <div className="w-[25vw] h-[25vh] relative" style={{top: `${picture.top}vh`, left: `${picture.left}vw`}}>
                            
                            {picture.src}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default IntroParallax;
