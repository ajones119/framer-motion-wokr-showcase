import {motion} from "motion/react"
import React, {PropsWithChildren } from "react";

const Highlight = ({children}: PropsWithChildren) => {

    return <motion.div
        style={{scale: 1}}
        className='rounded-md'
        // https://motion.dev/docs/react-gestures#animation-props
        // certain gestures can be animated too
        // whileTap, whileHover, whileFocus, whileDrag, and whileInView

        whileHover={{
            scale: 1.1,        // Slightly enlarge
            backgroundColor: "#ffffff", // Change background color to a highlight
            boxShadow: "0px 4px 15px rgba(255, 107, 107, 0.6)", // Add glow/shadow
            color: "#444444"
        }}
    >
        {children}
    </motion.div>
}

export default Highlight; 