import { Separator } from "@/components/ui/separator";

const MotionValueInfo = () => {

    return (<div className="flex flex-col justify-center items-center">
        <ul className="text-left gap-2 flex flex-col mb-4">
            <li>* Motion values are immutable and can be recieved useing several hooks.</li>
            <li>* You can make a new one using the useMotionValue hook, or even set it to a desired css value using useMotionTemplate
            </li>
            <p className="pl-3">const x = useMotionValue(100)</p>
            <p className="pl-3">const transform = useMotionTemplate`transform($(x)px)`</p>
        </ul>
        <Separator className="text-white" />
        <ul className="text-left gap-2 flex flex-col mt-4">
            <li>* Motion values have events.</li>
            <li>* These events can have callback functions tied to them, and they do NOT cause rerenders (that is AWESOME!)</li>
            <li>* Using the useMotionEven hook with a motion event variable, you can run a callback on animation start, end, or change</li>
            <li> the example below shows the code for the scroll progress at the top</li>
        </ul>
    </div>);
}

export default MotionValueInfo