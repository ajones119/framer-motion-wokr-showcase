
import CardsContainer from "@/components/animation-wrappers/CardsContainer";
import AnimationWrappersExample from "./components/AnimationWrapperExample";
import BasicExample from "./components/BasicExample";
import DraggableExample from "./components/DraggableExamples";
import KeyFramesExample from "./components/KeyframesExample";
import Stack from "./components/stackExample";
import SVGDrawExample from "./components/SVGDrawExample";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PageScrollProgress from "@/components/animation-wrappers/page-scroll-progress";
import FileCodeDisplayModal from "@/components/ui/fileDisplayModal";
import UseAnimateExample from "./hooksComponents/use-animate-example";
import UseTransformExample from "./hooksComponents/use-transform-example";
import MotionValueInfo from "./hooksComponents/motion-value-and-events";
import LargeMultistepExample from "./components/LargeMultistep";
import { motion } from "motion/react";
import { useIntroAnimation } from "./utils";
import { Button } from "@/components/ui/button";
import IntroParallax from "./components/IntroParallax";

const Home = () => {
    const {ref, startAnimation, key: animationKey} = useIntroAnimation();

    return (
        <motion.div ref={ref} className="w-full">
            <IntroParallax />
            <PageScrollProgress>
                <div>
                    <div className="ml-[20px] pt-20">
                        <h1>A Practical guide through Framer Motion for PerformYard</h1>
                    </div>
                    <CardsContainer>
                        <Card className="bg-slate-900">
                            <CardContent>
                                <div className="flex justify-center items-center p-20 flex-col gap-2">
                                    <h2 className="h-20 text-3xl">Basic Examples</h2>
                                    <p>Here are some (mostly) inline examples of using framer motion to achieve animations. You might notice as you go throug hthese that animations can occur when the key changes, when the animate value changes, or on enter/exit. </p>
                                    <p>Inorder to animate with framer motion, you must wrap the object in an animate.[htmlElement], typically a div.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800">
                            <CardHeader>
                                <CardTitle>Basic Inline</CardTitle>
                                <CardDescription>Inline adjustments on a motion.div</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <BasicExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/basic.tsx"} />
                            </CardFooter>
                        </Card>

                        <Card className="bg-slate-700">
                            <CardHeader>
                                <CardTitle>Animation Wrappers</CardTitle>
                                <CardDescription>Reusable animation wrappers with gestures</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p><AnimationWrappersExample /></p>
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/highlight.tsx"} />
                            </CardFooter>
                        </Card>

                        <Card className="bg-slate-600 transition-all ease-in-out duration-300">
                            <CardHeader>
                                <CardTitle>Stack</CardTitle>
                                <CardDescription>Reusable animation wrapper for animating enter/exit from the dom on a list</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Stack />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/presence.tsx"} />
                            </CardFooter>
                        </Card>

                        <Card className="bg-slate-500">
                            <CardHeader>
                                <CardTitle>Key Frames & UseAnimate</CardTitle>
                                <CardDescription>How can Key frames be used?</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <KeyFramesExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/keyframes.tsx"} />
                            </CardFooter>
                        </Card>

                        <Card className="bg-slate-400">
                            <CardHeader>
                                <CardTitle>Draggable Box</CardTitle>
                                <CardDescription>Drag handling</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DraggableExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/draggable.tsx"} />
                            </CardFooter>
                        </Card>

                        <Card className="bg-slate-400">
                            <CardHeader>
                                <CardTitle>SVG Draw</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SVGDrawExample />
                            </CardContent>
                        </Card>
                    </CardsContainer>
                    <CardsContainer>
                        <Card className="bg-slate-500">
                            <CardContent>
                            <div className="flex justify-center items-center p-20 flex-col gap-2">
                                    <h2 className="h-20 text-3xl">Basic Hook Examples</h2>
                                    <p>Framer motion provides several useful hooks when you need to incorporate more indepth animations, or you'd like your animations to be tied to common gestures but don't want a ton of rerenders</p>
                                    <p>Common Hooks inlude</p>
                                    <ol>
                                        <li>useAnimate</li>
                                        <li>useMotionValueEvent</li>
                                        <li>useTime</li>
                                        <li>useScroll</li>
                                        <li>useTransform</li>
                                        <li>useSpring</li>
                                        <li>useInview</li>
                                    </ol>

                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-600">
                            <CardHeader>
                                <CardTitle>Motion Values and Events</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <MotionValueInfo />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/page-scroll-progress.tsx"} />
                            </CardFooter>
                        </Card>
                        <Card className="bg-slate-700">
                            <CardHeader>
                                <CardTitle>UseAnimate</CardTitle>
                                <CardDescription>UseAnimate can be used to select certain parts of a container to animate, and can sequence animations</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <UseAnimateExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/use-animate-example.tsx"} />
                            </CardFooter>
                        </Card>
                        <Card className="bg-slate-800">
                            <CardHeader>
                                <CardTitle>UseTime & UseTransform</CardTitle>
                                <CardDescription>UseTime can be used to manipulate an object endlessly. While UseTransform is used to affect the styling on an object with a given input range</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <UseTransformExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/use-transform-example.tsx"} />
                            </CardFooter>
                        </Card>
                        <Card className="bg-slate-900">
                            <CardHeader>
                                <CardTitle>Animations Can run in sequence</CardTitle>
                            </CardHeader>
                                <Button onClick={() => startAnimation()}>start</Button>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </CardsContainer>
                </div>
            </PageScrollProgress>
            <LargeMultistepExample key={animationKey} />
        </motion.div>
    )
}

export default Home;