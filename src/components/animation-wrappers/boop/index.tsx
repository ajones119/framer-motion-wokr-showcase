import {PropsWithChildren} from 'react';
import {motion} from "framer-motion"

const Boop = ({children}: PropsWithChildren) => {


    return <motion.div
        style={{scale: 1}}
        whileHover={{
            scale: [1, 1.2, 1.1],
            transition: {
            duration: 0.2,
        },
        }}
    >
        {children}
    </motion.div>
}

export default Boop; 