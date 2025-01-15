import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {motion} from "motion/react";
import { useRef, useState } from "react";

const DraggableExample = () => {
    const draggableContainer = useRef<HTMLDivElement | null>(null);
    const [elastic, setElastic] = useState(0);
    const [dragMomentum, setDragMomentum] = useState(true);

    return (
        <div>
            <div className="flex gap-2">
                <div className="w-6/12 h-[300px] border-solid border border-slate-600" ref={draggableContainer}>
                    <motion.div
                        className="w-1/12 h-[50px] bg-slate-800 rounded-md cursor-grab active:cursor-grabbing"
                        drag
                        whileDrag={{scale: 1.1}}
                        whileHover={{scale: 1.2}}
                        dragConstraints={draggableContainer}
                        dragElastic={elastic}
                        dragMomentum={dragMomentum}
                    />
                </div>
                <div className="m-auto">
                    <h3 className="font-bold text-2xl">Controls</h3>
                    <div >
                        <Label>Elastic (0 -&gt; 1)</Label>
                        <Slider className="bg-slate-800" name="duration" value={[elastic]} step={0.1} max={2} onValueChange={(value) => setElastic(value[0])} />
                    </div>
                    <div className="flex gap-1 items-center pt-3">
                        <Label>Drag Momentum</Label>
                        <Switch checked={dragMomentum} onCheckedChange={() => setDragMomentum(!dragMomentum)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DraggableExample;