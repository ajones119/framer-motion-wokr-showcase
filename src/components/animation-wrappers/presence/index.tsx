import { AnimatePresence, motion, MotionProps, AnimatePresenceProps } from "motion/react";
import { Children, isValidElement, PropsWithChildren } from "react";

type Props = {
    mode: AnimatePresenceProps["mode"],
    initial?: MotionProps["initial"]; // Type aligns with Framer Motion's `initial`
    animate?: MotionProps["animate"]; // Type aligns with Framer Motion's `animate`
    exit?: MotionProps["exit"]; // Type aligns with Framer Motion's `exit`
    transition?: MotionProps["transition"]; // Type aligns with Framer Motion's `transition`
}

const Presence = ({children, mode, initial, exit, animate, transition}: PropsWithChildren<Props>) => {

    return(
        <AnimatePresence initial={false} mode={mode} propagate>{
            Children.map(children, (child, index) => {
                if (isValidElement(child)) {
                    // Use the child's key if available
                    const key = child.key ?? index; // Fallback to a random key (not ideal for dynamic lists)

                    return (
                        <motion.div
                            key={key}
                            initial={initial}
                            animate={animate}
                            exit={exit}
                            transition={transition}
                            layout
                            className="flex justify-center items-center w-full" // Ensure children are centered
                            >
                        {
                            child
                        }
                        </motion.div>
                    );
                }
                return null;
            })
        }</AnimatePresence>
)


};

export default Presence