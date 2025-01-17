import { lumberjackImageConfig } from "@/components/animation-wrappers/page-scroll-progress";
import SpriteSheetAnimation from "@/components/animation-wrappers/sprite";
import PYLogo from "@/components/misc/pylogo";
import { useScroll, useTransform, motion } from "motion/react";
import { useMemo, useRef } from "react";

const tree = '/fir_tree_4.png';
//const tree1 = '/fir_tree_1.png';
const tree2 = '/fir_tree_2.png';
const tree3 = '/fir_tree_3.png';
const tree4 = '/fir_tree_8.png';

function getBiasedRandomTree() {
    const weights = [0.7, 0.2, 0.1]; // Probability for 1, 2, and 3 respectively
    const cumulativeWeights = weights.map((sum => value => sum += value)(0));
    const random = Math.random();

    if (random < cumulativeWeights[0]) {
        return tree;
    } else if (random < cumulativeWeights[1]) {
        return tree2;
    } else {
        return tree3;
    }
}


const X_POSITIONS = [-13, -10, -6, -2, 2, 16, 20, 24, 28, 31];
const percentOnSpot = [0.4, 0.4, 0.4, 0.4, 0.6, 0.5, 0.6, 0.3, 0.4, 0.5];
const baseHeight = -10;
const jitter = 2.5;

const IntroParallax = () => {
    const container = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const otherMap = [
        useTransform(scrollYProgress, [0,1], [1,1/1.05]),
        useTransform(scrollYProgress, [0,1], [1,1/1.05]),
        useTransform(scrollYProgress, [0,1], [1,1/1]),
        useTransform(scrollYProgress, [0,1], [1,1.5]),
        useTransform(scrollYProgress, [0,1], [1,2]),
        useTransform(scrollYProgress, [0,1], [1,3]),
        useTransform(scrollYProgress, [0,1], [1,4]),
        useTransform(scrollYProgress, [0,1], [1,5]),
        //useTransform(scrollYProgress, [0,1], [1,6]),
        useTransform(scrollYProgress, [0,1], [1,7]),
        useTransform(scrollYProgress, [0,1], [1,9]),
        useTransform(scrollYProgress, [0,1], [1,13]),
        useTransform(scrollYProgress, [0,1], [1,15]),
    ]

    const pictures = useMemo(() => {
        //console.log(Math.random())
        const treeMap = otherMap.map((_, rowIndex) => {
            const row = X_POSITIONS.filter(() => Math.random() < percentOnSpot[rowIndex]).map((pos, index) => {
                const distanceFromCenter = Math.abs(pos - 8); // Assuming `50` is the center in percentage
                console.log('distance from center', distanceFromCenter)
                const adjustedTop = baseHeight + rowIndex / 4 + distanceFromCenter / 4; // Adjust scaling factor for "steepness"
                return({
                    src: <img src={getBiasedRandomTree()} className="fill pixelate" style={{ objectFit: 'cover' }} />,
                    scale: otherMap[index] || otherMap[0],
                    top: adjustedTop ,
                    left: pos + (Math.random() * jitter) - (Math.random() * jitter),
            })});

            if (rowIndex === 4) {
                row.push({
                    src: <PYLogo className="scale-75 max-w-[80vw]" />,
                    scale: otherMap[rowIndex] || otherMap[0],
                    top: 5,
                    left: 5,
                })
            } else if (rowIndex === 6) {
                const pos = X_POSITIONS[2]
                const distanceFromCenter = Math.abs(pos - 8); // Assuming `50` is the center in percentage
                console.log('distance from center', distanceFromCenter)
                const adjustedTop = baseHeight + rowIndex / 4 + distanceFromCenter / 4; 
                row.push({
                    src: <img src={tree} className="fill pixilate" style={{ objectFit: 'cover' }} />,
                    scale: otherMap[rowIndex] || otherMap[0],
                    top: adjustedTop,
                    left: pos,
                });
                row.push({
                    src: (
                        <div className="scale-150">
                            <SpriteSheetAnimation
                                imageUrl={lumberjackImageConfig["cut"].imageUrl}
                                frameHeight={48}
                                frameWidth={48}
                                numberOfFrames={lumberjackImageConfig["cut"].numberOfFrames}
                                heightOffset={0}
                                fps={lumberjackImageConfig["cut"].fps}
                            />
                        </div>
                    ),
                    scale: otherMap[rowIndex] || otherMap[0],
                    top: adjustedTop + 26,
                    left: pos + 6,
                });
            } else if (rowIndex === X_POSITIONS.length-1){
                row.push({
                    src: <img src={tree4} className="fill pixilate" style={{ objectFit: 'cover' }} />,
                    scale: otherMap[rowIndex] || otherMap[0],
                    top: baseHeight + rowIndex/4 + 28,
                    left: X_POSITIONS[7],
                });
            }

            return row;
        })

        return treeMap;
    }, [otherMap.length])

    console.log(pictures)

    const rotateX = useTransform(scrollYProgress, [0,1], [0, -15]);


    

    return (
        <div className="h-[300vh] relative" ref={container}>
            <motion.div style={{rotateX}} className="sticky top-0 h-[100vh] left-0 w-[98.5vw] overflow-hidden">
                {pictures.map((pictureRow, rowIndex) => {
                    console.log("ROW", rowIndex, pictureRow)


                    return pictureRow.map((picture, index) => {
                        console.log(picture)
                        return (
                        <motion.div style={{scale: otherMap[rowIndex]}} key={`${rowIndex}-${index}`} className="w-full h-full absolute flex items-center justify-center">
                            <div className="w-[25vw] h-[25vh] relative" style={{top: `${picture.top}vh`, left: `${picture.left}vw`}}>
                                {picture.src}
                            </div>
                        </motion.div>
                    )})
                })}
            </motion.div>
        </div>
    );
}

export default IntroParallax;
