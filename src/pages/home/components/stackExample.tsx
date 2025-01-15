import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generate } from "random-words";
import { Leaf, MinusCircle, PlusCircle, Rewind, Shuffle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Presence from "@/components/animation-wrappers/presence";
import { motion, } from "motion/react";


const Stack = () => {
    const [stack, setStack] = useState<string[]>([]);
    const [mode, setMode] = useState<'popLayout' | 'sync'>('popLayout');
    const [duration, setDuration] = useState(0);

    const shuffleArray = () => {
        setStack((prevArray: string[]) => {
          const shuffledArray = [...prevArray]; // Create a shallow copy
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
        }
            return shuffledArray;
        });
    };

    return (
        <div className="flex flex-col gap-1 min-h-[600px] transition-all ease-in-out duration-300">
            <div className="flex gap-2 justify-center">
                <div className="w-4/12">
                    <Label>Duration (0 allows springs)</Label>
                    <Slider name="duration" value={[duration]} step={0.1} max={2} onValueChange={(value) => setDuration(value[0])} />
                </div>
                <div className="flex gap-1 items-center pt-3">
                    <Label>sync</Label>
                    <Switch checked={mode !== 'sync'} onCheckedChange={() => setMode(mode == 'sync' ? 'popLayout' : 'sync')} />
                    <Label>popLayout</Label>
                </div>
                
            </div>
            <div className="flex gap-2 justify-center">
            <Button variant="default" size="icon" onClick={() => {setStack([...generate(10)])}}><Leaf /></Button>

                <Button variant="secondary" size="icon" onClick={() => {setStack([generate(1)[0], ...stack])}}><PlusCircle /></Button>
                <Button variant="destructive" size="icon" onClick={() => {setStack(stack.slice(1, stack.length))}}><MinusCircle /></Button>
                <Button variant="destructive" size="icon" onClick={() => {setStack([])}}><Rewind /></Button>
                <Button variant="secondary" size="icon" onClick={shuffleArray}><Shuffle /></Button>

            </div>
            <div className="flex flex-col w-full gap-2 items-center justify-center">

                <Presence
                    mode={mode}
                    initial={{ scale: 0.4, opacity: 0, y: -20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    //talk about keyframes in configs here!! BEEEG DEAL
                    exit={{ scale: [0.4, 0.6, 0.2], opacity: [1, 1, 0], x: [0, 20, 60] }}
                    transition={{ type: duration ? undefined : "spring", duration: duration || undefined }}
                >
                    {stack.map((data) => {
                        return (
                            <motion.div
                                key={data}
                                onClick={() => {
                                    setStack(stack.filter(s => s !== data))
                                }}
                                className="bg-secondary text-secondary-foreground w-6/12 rounded-md p-2"
                            >
                                {data}
                            </motion.div>
                        )}
                    )}
                </Presence>
            </div>
        </div>
    )


};

export default Stack

/*
<div className="text-left">
<FileCodeDisplay fileUrl={"files/presence.tsx"} />
</div>
*/