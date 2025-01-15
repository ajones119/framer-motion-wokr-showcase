
import {motion} from "motion/react";
import React, { useRef, useState } from "react";

const DraggableExample = () => {
    const draggableContainer = useRef<HTMLDivElement | null>(null);
    const [elastic, setElastic] = useState(0);
    const [dragMomentum, setDragMomentum] = useState(true);

    return (
        <div>
            <div className="flex gap-2">
                <div className="w-6/12 h-[300px] border-solid border border-slate-600" ref={draggableContainer}>
                    <motion.div
                        className="w-1/12 h-[50px] bg-slate-800 rounded-md"
                        drag
                        whileDrag={{scale: 1.1}}
                        whileHover={{scale: 1.2}}
                        dragConstraints={draggableContainer}
                        dragElastic={elastic}
                        dragMomentum={dragMomentum}
                    />
                </div>
            </div>
        </div>
    )
}

export default DraggableExample;