import React, {PropsWithChildren, useRef, useState} from 'react';
import {motion} from "framer-motion"

const Magnetic = ({children}: PropsWithChildren) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({x: 0, y: 0});

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const {clientX, clientY} = e;
            const {width, height, left, top} = ref.current?.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            setPosition({x, y});
        }
    }

    const onMouseLeave = () => {
        setPosition({x: 0, y: 0})
    }
    const {x, y} = position;
    return <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={{x, y}}
    >
        {children}
    </motion.div>
}

export default Magnetic; 