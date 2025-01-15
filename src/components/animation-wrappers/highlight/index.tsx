import {PropsWithChildren} from 'react';
import {motion} from "framer-motion"

const Highlight = ({children}: PropsWithChildren) => {

    return <motion.div
        style={{scale: 1}}
        className='rounded-md'
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