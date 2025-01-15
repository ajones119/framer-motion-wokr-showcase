import {PropsWithChildren} from 'react';
import {motion} from "framer-motion"

const Rotate = ({children}: PropsWithChildren) => {

    return <motion.div
        style={{scale: 1}}
        whileHover={{
            rotate: 180
        }}
        className='cursor-pointer'
    >
        {children}
    </motion.div>
}

export default Rotate; 