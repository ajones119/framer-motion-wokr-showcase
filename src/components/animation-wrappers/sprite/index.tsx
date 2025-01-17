
import { useEffect, useRef } from "react";

type Props = {
    frameWidth: number,
    frameHeight: number,
    heightOffset?: number
    numberOfFrames: number,
    imageUrl: string,
    fps?: number
}

const SpriteSheetAnimation = ({
    frameHeight,
    frameWidth,
    heightOffset = 0,
    numberOfFrames,
    imageUrl,
    fps = 20
}: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationId = useRef(0);
    const scale = 1

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
    
        const image = new Image();
        image.src = imageUrl;
    
        let frameIndex = 0;
        let lastFrameTime = performance.now();
        const frameDuration = 1000 / fps;
        const scaledWidth = frameWidth * scale;
        const scaledHeight = frameHeight * scale;
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;

        // Apply scaling
        ctx.scale(scale, scale);
        const animate = (timestamp: number) => {
            const elapsed = timestamp - lastFrameTime;
        
            if (elapsed >= frameDuration) {
                lastFrameTime = timestamp;
                frameIndex = (frameIndex + 1) % numberOfFrames;
        
                   // Clear the canvas and draw the current frame
                ctx.clearRect(0, 0, scaledWidth, scaledHeight);
                ctx.save(); // Save the current state of the canvas

                // Apply scaling
                ctx.scale(scale, scale)
                ctx.drawImage(
                image,
                frameIndex * frameWidth, // Source X
                heightOffset,                      // Source Y ahh height offset here if needed
                frameWidth,             // Source Width
                frameHeight,            // Source Height
                0,                      // Destination X
                0,                      // Destination Y
                frameWidth,             // Destination Width
                frameHeight             // Destination Height
                );
                ctx.restore();
            }
    
            animationId.current = requestAnimationFrame(animate);
        };

    
        image.onload = () => {
        canvas.width = frameWidth * scale;
        canvas.height = frameHeight * scale;
        animate(performance.now());
        };
    
        return () => cancelAnimationFrame(animationId?.current); // Cleanup animation
    }, [frameWidth, frameHeight, numberOfFrames, fps, imageUrl]);
    return <canvas className="" ref={canvasRef} />
    };


export default SpriteSheetAnimation;