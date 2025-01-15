
import {motion, useTime, useTransform} from "motion/react";
import React from 'react';

const UseTransformExample = () => {
    //useTime returns a motion value that updates once per frame with the duration, in milliseconds, since it was first created. 
    const time = useTime();
    // useTransform takes in a MotionValue, inputRange, and outputRange. Then it returns a new MotionValue that can be mapped to a style
    // note MotionValue's are mapped to an element's inline style NOT their animation property
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

    return (<div className="flex flex-col justify-center items-center">
        <motion.div style={{ rotate }} className="h-20 w-20 bg-white rounded-md" />
    </div>);
}

export default UseTransformExample