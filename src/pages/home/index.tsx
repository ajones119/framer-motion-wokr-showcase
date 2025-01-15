
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
import PYLogo from "@/components/misc/pylogo";
import SpriteSheetAnimation from "@/components/animation-wrappers/sprite";
import UseAnimateExample from "./hooksComponents/use-animate-example";
import UseTransformExample from "./hooksComponents/use-transform-example";
import MotionValueInfo from "./hooksComponents/motion-value-and-events";
import LargeMultistepExample from "./components/LargeMultistep";
import { motion } from "motion/react";
import { useIntroAnimation } from "./utils";
import { Button } from "@/components/ui/button";

const Home = () => {
    const {ref, startAnimation, key: animationKey} = useIntroAnimation();

    return (
        <motion.div ref={ref} className="w-full">
            <PageScrollProgress>
                <div>
                    <div>
                        <h1>A Practical guide through Framer Motion for PerformYard</h1>
                        <div className="flex justify-center items-center">
                                    <PYLogo />
                                    <SpriteSheetAnimation
                                        imageUrl={'/Woodcutter_walk.png'}
                                        frameHeight={48}
                                        frameWidth={48}
                                        numberOfFrames={6}
                                        heightOffset={0}
                                    />
                                </div>
                    </div>
                    <CardsContainer>
                        <Card className="bg-slate-900">
                            <CardContent>
                                <div className="flex justify-center items-center pt-20">
                                    <h2 className="h-20 text-3xl">Basic Examples</h2>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800">
                            <CardHeader>
                                <CardTitle>Basic Inline</CardTitle>
                                <CardDescription>Card Description</CardDescription>
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
                                <CardDescription>Card Description</CardDescription>
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
                                <CardDescription>Card Description</CardDescription>
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
                                <CardDescription>Card Description</CardDescription>
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
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DraggableExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/draggable.tsx"} />
                            </CardFooter>
                        </Card>

                        <Card className="bg-slate-300">
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
                        <Card className="bg-slate-900">
                            <CardContent>
                                <div className="flex justify-center items-center pt-20">
                                    <h2 className="h-20 text-3xl">Basic Hooks</h2>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-900">
                            <CardHeader>
                                <CardTitle>UseAnimate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <UseAnimateExample />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/use-animate-example.tsx"} />
                            </CardFooter>
                        </Card>
                        <Card className="bg-slate-900">
                            <CardHeader>
                                <CardTitle>UseTime & UseTransform</CardTitle>
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
                                <CardTitle>Motion Values and Events</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <MotionValueInfo />
                            </CardContent>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/page-scroll-progress.tsx"} />
                            </CardFooter>
                        </Card>
                        <Card className="bg-slate-900">
                            <CardHeader>
                                <CardTitle>Hooks Can run in sequence</CardTitle>
                            </CardHeader>
                                <Button onClick={() => startAnimation()}>start</Button>
                            <CardFooter>
                                <FileCodeDisplayModal fileUrl={"files/page-scroll-progress.tsx"} />
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