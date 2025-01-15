import {motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Children, PropsWithChildren, useRef } from "react";

  const CardContainer = ({children, topOffset, range, targetScale, progress}: PropsWithChildren<{topOffset: string, range: number[], targetScale: number, progress: MotionValue<number>}>) => {

    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div className="flex items-center justify-center h-screen sticky top-0">
            <motion.div className="relative w-full" style={{top: topOffset, scale}}>
                {children}
            </motion.div>
        </div>
    )
  }

const CardsContainer = ({children = []}: PropsWithChildren) => {
    const childrenCount = Children.count(children);

    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start' , 'end end']
    });

    return (
            <div ref={ref} className="w-full">
                {
                    Children.map(children, ((child, index)=> {
                        const targetScale = 1 - ((childrenCount - index) * 0.05);

                        return (
                            <CardContainer progress={scrollYProgress} key={`card-${index}`} targetScale={targetScale} range={[index * (1/childrenCount), 1]} topOffset={`calc(-10% + ${index*20}px)`}>
                                {child}
                            </CardContainer>
                        )
                    }))
                }
            </div>
    )
}

export default CardsContainer;