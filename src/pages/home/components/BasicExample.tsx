
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {motion} from "motion/react";
import { useState } from "react";

const BasicExample = () => {
    const [config, setConfig] = useState({
        scale: 1,
        x: 0,
        y: 0,
        height: 100,
        width: 100,
        rotate: 0,
        skew: 0,
        borderRadius: 0,
        borderWidth: 10,
        backgroundColor: "#94a3b8",
        display: "block"
    });

    const [transitionConfig, setTransitionConfig] = useState({
        delay: 0,
        ease: "linear",
        type: "spring",
        bounce: 0.5,
        duration: 0,
        visualDuration: 0.5
    });

    const {scale, x, y, height, width, rotate, skew, borderRadius, borderWidth, backgroundColor, display} = config;
    const {delay, type, bounce, duration, visualDuration} = transitionConfig;

    return (<div className="flex w-full">
        <div className=" w-full flex items-center justify-center border aspect-square border-accent-foreground">
            <motion.div
            className="bg-slate-400 border-black border-solid"
                animate={{
                    ...config
                }}
                transition={
                    type == "spring" ? {...transitionConfig, duration: undefined} : {...transitionConfig, visualDuration: undefined}
                }
            />
        </div>
        <div className="w-full m-auto p-2">
            <h3 className="font-bold text-2xl">Controls</h3>
            <h6>Animate Controls</h6>
            <div className="w-full flex gap-2 justify-evenly">
                <div className="flex gap-1 items-center pt-3 justify-center">
                        <Label>Red</Label>
                        <Switch checked={backgroundColor !== '#e35b5b'} onCheckedChange={() => setConfig({...config, backgroundColor: backgroundColor == '#e35b5b' ? '#94a3b8' : '#e35b5b'})} />
                        <Label>Blue</Label>
                </div>
                <div className="flex gap-1 items-center pt-3 justify-center">
                        <Label>None</Label>
                        <Switch checked={display !== 'none'} onCheckedChange={() => setConfig({...config, display: display == 'none' ? 'block' : 'none'})} />
                        <Label>Block</Label>
                </div>
            </div>
            <div className="w-full m-auto">
                <Label>Scale</Label>
                <Slider name="scale" value={[scale]} step={0.1} max={2} onValueChange={(value) => setConfig({...config, scale: value[0]})} />
            </div>
            <div className="w-full flex gap-2">
                <div className="w-full">
                    <Label>X</Label>
                    <Slider name="x" value={[x]} step={5} max={200} min={-200} onValueChange={(value) => setConfig({...config, x: value[0]})} />
                </div>
                <div className="w-full">
                    <Label>Y</Label>
                    <Slider name="y" value={[y]} step={5} max={200} min={-200}  onValueChange={(value) => setConfig({...config, y: value[0]})} />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="w-full">
                    <Label>Width</Label>
                    <Slider name="width" value={[width]} step={5} max={200} min={0} onValueChange={(value) => setConfig({...config, width: value[0]})} />
                </div>
                <div className="w-full">
                    <Label>Height</Label>
                    <Slider name="height" value={[height]} step={5} max={200} min={0}  onValueChange={(value) => setConfig({...config, height: value[0]})} />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="w-full">
                    <Label>Rotation</Label>
                    <Slider name="rotation" value={[rotate]} step={5} max={360} min={-360} onValueChange={(value) => setConfig({...config, rotate: value[0]})} />
                </div>
                <div className="w-full">
                    <Label>Skew</Label>
                    <Slider name="skew" value={[skew]} step={5} max={50} min={-50}  onValueChange={(value) => setConfig({...config, skew: value[0]})} />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="w-full">
                    <Label>Radius</Label>
                    <Slider name="rotation" value={[borderRadius]} step={5} max={50} min={0} onValueChange={(value) => setConfig({...config, borderRadius: value[0]})} />
                </div>
                <div className="w-full">
                    <Label>Border Width</Label>
                    <Slider name="borderWidth" value={[borderWidth]} step={5} max={20} min={0}  onValueChange={(value) => setConfig({...config, borderWidth: value[0]})} />
                </div>
            </div>
            <h6 className="mt-4">Transition Controls</h6>
                <div className="flex gap-1 items-center pt-3 justify-center">
                    <Label>Dynamic</Label>
                    <Switch checked={type !== 'dynamic'} onCheckedChange={() => setTransitionConfig({...transitionConfig, type: type == 'dynamic' ? 'spring' : 'dynamic'})} />
                    <Label>Spring</Label>
                </div>
            <div className="flex gap-2">
                <div className="w-full">
                    <Label>Duration</Label>
                    <Slider name="duration" value={[duration]} step={0.1} max={2} min={0} onValueChange={(value) => setTransitionConfig({...transitionConfig, duration: value[0]})} />
                </div>
                <div className="w-full">
                    <Label>Visual Duration (spring)</Label>
                    <Slider name="vduration" value={[visualDuration]} step={0.1} max={2} min={1}  onValueChange={(value) => setTransitionConfig({...transitionConfig, visualDuration: value[0]})} />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="w-full">
                    <Label>Delay</Label>
                    <Slider name="delay" value={[delay]} step={0.1} max={2} min={0} onValueChange={(value) => setTransitionConfig({...transitionConfig, delay: value[0]})} />
                </div>
                <div className="w-full">
                    <Label>Bounce (spring)</Label>
                    <Slider name="bounce" value={[bounce]} step={0.1} max={0.9} min={0.01}  onValueChange={(value) => setTransitionConfig({...transitionConfig, bounce: value[0]})} />
                </div>
            </div>
        </div>
    </div>)
}

export default BasicExample