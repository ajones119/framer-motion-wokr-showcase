import {motion} from "motion/react";

const SVGDrawExample = () => {

    return (<div className="flex w-full">
        <div className=" w-full flex flex-wrap items-center justify-evenly border aspect-square border-accent-foreground p-4">
            <motion.svg width={250} height={250} viewBox="0 0 576 512">
                <motion.path
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{repeat: Infinity, duration: 2}}
                    d="M100,20 
                        A80,80 0 1,1 99.9,20 
                    Z" 
                    fill="none" 
                    stroke="black" 
                    stroke-width="2" 
                />
            </motion.svg>
            <motion.svg width={100} height={100} viewBox="0 0 576 512">
                <motion.path
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{repeat: Infinity, duration: 4}}
                    fill="none" 
                    stroke="black" 
                    stroke-width="2" 
                    d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
            </motion.svg>
            <motion.svg width={150} height={150} viewBox="0 0 576 512">
                <motion.path
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{repeat: Infinity, duration: 2}}
                    d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0 28.9-159c2.1-11.3 3.1-22.8 3.1-34.3l0-14.7C416 86 330 0 224 0L83.8 0C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4z"
                    fill="none" 
                    stroke="black" 
                    stroke-width="2" 
                />
            </motion.svg>
            <motion.svg width={100} height={100} viewBox="0 0 576 512">
                <motion.path
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{repeat: Infinity, duration: 4}}
                    fill="none" 
                    stroke="black" 
                    stroke-width="2" 
                    d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2L0 192C0 86 86 0 192 0S384 86 384 192l0 270.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"                />
            </motion.svg>
        </div>
        <div className="w-full m-auto p-2">
            <h3 className="font-bold text-2xl">Draw SVGs</h3>
        </div>
    </div>)
}

export default SVGDrawExample


