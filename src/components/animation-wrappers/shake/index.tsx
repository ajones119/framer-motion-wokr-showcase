import {PropsWithChildren} from 'react';
import {motion} from "framer-motion"

const Shake = ({children}: PropsWithChildren) => {


    return <motion.div
        whileHover={{
            y: [0, -4, 0],
            transition: {
            duration: 0.3,
            repeat: Infinity,
        },
        }}
    >
        {children}
    </motion.div>
}

export default Shake; 