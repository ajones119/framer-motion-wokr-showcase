import Magnetic from "@/components/animation-wrappers/magnetic";
import { Cloud, CloudDrizzle, CloudMoon, Droplet, Flame, Magnet, Moon, MoonStar, Rainbow, Thermometer, Umbrella, Wind } from "lucide-react";
import Boop from "@/components/animation-wrappers/boop";
import Shake from "@/components/animation-wrappers/shake";
import Rotate from "@/components/animation-wrappers/rotate";
import Highlight from "@/components/animation-wrappers/highlight";


const AnimationWrappersExample = () => {

    return (
        <div  className="flex flex-col gap-3">
            <div className="border-b border-solid border-b-primary-foreground pb-2">
                <h3 className="text-2xl mb-1">Magnetic</h3>
                <div className="max-w-[200px] m-auto">
                    <div className="flex justify-evenly flex-wrap gap-2">
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Cloud />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Magnet />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Moon />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <CloudMoon />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Flame />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <MoonStar />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Umbrella />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Wind />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Rainbow />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <CloudDrizzle />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Droplet />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Thermometer />
                            </div>
                        </Magnetic>
                    </div>
                </div>
            </div>
            <div className="border-b border-b-solid border-b-primary-foreground pb-2">
                <h3 className="text-2xl mb-1">Boop</h3>
                <div className="max-w-[200px] m-auto">
                    <div className="flex justify-evenly flex-wrap gap-2">
                        <Boop>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Cloud />
                            </div>
                        </Boop>
                        <Boop>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Magnet />
                            </div>
                        </Boop>
                        <Boop>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Moon />
                            </div>
                        </Boop>
                        <Boop>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <CloudMoon />
                            </div>
                        </Boop>
                        
                    </div>
                </div>
            </div>
            <div className="border-b border-solid border-b-primary-foreground pb-2">
                <h3 className="text-2xl mb-1">Shake</h3>
                <div className="max-w-[200px] m-auto">
                    <div className="flex justify-evenly flex-wrap gap-2">
                        <Shake>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Cloud />
                            </div>
                        </Shake>
                        <Shake>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Magnet />
                            </div>
                        </Shake>
                        <Shake>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Moon />
                            </div>
                        </Shake>
                        <Shake>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <CloudMoon />
                            </div>
                        </Shake>
                        
                    </div>
                </div>
            </div>
            <div className="border-b border-solid border-b-primary-foreground pb-2">
                <h3 className="text-2xl mb-1">Rotate</h3>
                <div className="max-w-[200px] m-auto">
                    <div className="flex justify-evenly flex-wrap gap-2">
                        <Rotate>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Cloud />
                            </div>
                        </Rotate>
                        <Rotate>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Magnet />
                            </div>
                        </Rotate>
                        <Rotate>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Moon />
                            </div>
                        </Rotate>
                        <Rotate>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <CloudMoon />
                            </div>
                        </Rotate>
                        
                    </div>
                </div>
            </div>
            <div className="border-b border-solid border-b-primary-foreground pb-2">
                <h3 className="text-2xl mb-1">Highlight</h3>
                <div className="max-w-[200px] m-auto">
                    <div className="flex justify-evenly flex-wrap gap-2">
                        <Highlight>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Cloud />
                            </div>
                        </Highlight>
                        <Highlight>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Magnet />
                            </div>
                        </Highlight>
                        <Highlight>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <Moon />
                            </div>
                        </Highlight>
                        <Highlight>
                            <div className="border border-solid border-secondary-foreground p-2 rounded-md">
                                <CloudMoon />
                            </div>
                        </Highlight>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnimationWrappersExample;