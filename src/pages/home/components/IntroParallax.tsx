import { lumberjackImageConfig } from "@/components/animation-wrappers/page-scroll-progress";
import SpriteSheetAnimation from "@/components/animation-wrappers/sprite";
import PYLogo from "@/components/misc/pylogo";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import UseTransformExample from "../hooksComponents/use-transform-example";

const image1 = '/mb1.jpg';
const image2 = '/mb2.jpg';
const image3 = '/tall-trees.jpg';
const image4 = '/mb-4.png';
const image5 = '/mountain-bg.jpg';
const mountain = '/nobgmtn1.png';

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

    const scale4 = useTransform(scrollYProgress, [0,1], [1,4]);
    const scale5 = useTransform(scrollYProgress, [0,1], [1,5]);
    const scale6 = useTransform(scrollYProgress, [0,1], [1,6]);
    const scale8 = useTransform(scrollYProgress, [0,1], [1,8]);
    const scale9 = useTransform(scrollYProgress, [0,1], [1,9]);

    const pictures = [
        {
            src: <PYLogo className="scale-75 max-w-[80vw]" />,
            scale: scale4,
            top: 0,
            left: 8
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
            scale: scale8,
            top: 0,
            left: 30
        },
        {
            src: <img src={mountain} className="fill" style={{objectFit: 'cover'}} />,
            scale: scale5,
            top: 22,
            left: 0
        },

    ]

    return (
        <div className="h-[300vh] relative" ref={container}>
            <div className="sticky top-0 h-[100vh] overflow-hidden">
                { pictures.map((picture, index) => 
                    <motion.div style={{scale: picture.scale}} key={index} className="w-full h-full absolute flex items-center justify-center">
                        <div className="w-[25vw] h-[25vh] relative" style={{top: `${picture.top}vh`, left: `${picture.left}vw`}}>
                            {picture.src}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default IntroParallax;



/*const pictures = [
    {
        src: <PYLogo className="scale-75 max-w-[80vw]" />,
        scale: scale4,
        top: 0,
        left: 8
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
        scale: scale8,
        top: 0,
        left: 30
    },
    {
        src: <img src={mountain} className="fill" style={{objectFit: 'cover'}} />,
        scale: scale5,
        top: 22,
        left: 0
    },

    {
        src: <img src={tree} className="fill" style={{objectFit: 'cover'}} />,
        scale: scale8,
        top: -25,
        left: 24
    },
    {
        src: <img src={image2} className="fill" style={{objectFit: 'cover'}} width={'50%'} />,
        scale: scale5,
        top: -20,
        left: 12
    },
    {
        src: <img src={image3} className="fill" style={{objectFit: 'cover'}} width={'50%'} />,
        scale: scale6,
        top: 10,
        left: -22
    },
    {
        src: <img src={image4} className="fill" style={{objectFit: 'cover'}} />,
        scale: scale8,
        top: -20,
        left: -24

    },
    {
        src: <img src={image5} className="fill" style={{objectFit: 'cover'}} />,
        scale: scale9,
        top: 20,
        left: 26
    },

]*/