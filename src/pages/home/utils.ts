import { useAnimate } from "motion/react"
import { useState } from "react";


export const useIntroAnimation = () => {
    const [ref, animate] = useAnimate();

    const [key, setKey] = useState(0)


    const initialize = async () => {
        animate('#lumberJackContainer', {
            left: '50vw',
            top: '50vh'
        }, {
            duration: 1,
        });
        await animate('#black-backdrop', {
            opacity: 1
        }, {
            duration: 3,
        });

        await animate('#lumberjackStill', {
            opacity: 1
        }, {
            duration: 1.5,
        });

        await animate('#lumberjackStill', {
            scaleX: -1
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackRun', {
            scaleX: -1
        }, {
            duration: 1.5,
        });

        animate('#lumberjackStill', {
            opacity: 0
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackRun', {
            opacity: 1
        }, {
            duration: 0.1,
        });

        await animate('#lumberJackContainer', {
            left: 0
        }, {
            duration:2,
        });

        animate('#lumberjackStill', {
            opacity: 1
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackRun', {
            opacity: 0
        }, {
            duration: 0.1,
        });
    }

    const pullStars = async () => {
        await animate('#lumberjackPush', {
            scaleX: -1
        }, {
            duration: 0.8,
        });

        animate('#lumberjackStill', {
            opacity: 0
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackPush', {
            opacity: 1
        }, {
            duration: 0.1,
        });

        animate('#lumberJackContainer', {
            left: '5vw',
            top: '50vh'
        }, {
            duration: 1.5,
        });

        await animate('#star-backdrop', {
            x: '-95%',
        }, {
            duration: 1.5,
        });

        await animate('#star-backdrop', {
            x: '-95%',
        }, {
            duration: 1,
        });

        animate('#lumberJackContainer', {
            left: '20vw',
            top: '50vh'
        }, {
            duration: 1.5,
        });

        await animate('#star-backdrop', {
            x: '-80%',
        }, {
            duration: 1.5,
        });

        await animate('#star-backdrop', {
            x: '-80%',
        }, {
            duration: 1,
        });

        animate('#lumberJackContainer', {
            left: '40vw',
            top: '50vh'
        }, {
            duration: 1.8,
        });

        await animate('#star-backdrop', {
            x: '-60%',
        }, {
            duration: 1.8,
        });

        await animate('#star-backdrop', {
            x: '-60%',
        }, {
            duration: 1.5,
        });

        animate('#lumberJackContainer', {
            left: '100vw',
            top: '50vh'
        }, {
            duration: 6,
        });

        await animate('#star-backdrop', {
            x: '0%',
        }, {
            duration: 6,
        });

        await animate('#star-backdrop', {
            x: '0%',
        }, {
            duration: 0.1,
        });
    }

    const scrollText = async () => {
        // Animate the logo to its starting position
        await animate('#pyLogo', {
            left: 'calc(50vw)',
            x: '-50%',
            top: '90%',
            y: '-100%',
            scale: 1.4,
            opacity: 0,
        }, {
            duration: 0.2,
        });
        
        const audioElement = document.getElementById("audio");
        if (audioElement) {
            (audioElement as HTMLAudioElement).play(); // Start the audio
        }

        animate('#pyLogo', {
            opacity: 1,
        }, {
            duration: 0.01,
            delay: 0.2
        });
        await animate('#text-crawl-container-outer', {
            opacity: 1,
            y: window.innerHeight + 200, 
        }, {
            duration: 0.01,
        });

        // Animate the outer container to start below the screen and scroll up
        animate('#text-crawl-container-outer', {
          y: [window.innerHeight + 200, 0], // Start from below the screen, scroll up to the top
          scale: [1.2, 2], // Slightly scale to give a zoom-in effect
        }, {
          duration: 42, // Increase duration to allow more time for reading
          ease: 'linear',
          delay: 3
        });
      
        // Animate the inner container for upward movement and shrinking
        const finalScroll = animate('#text-crawl-container-inner', {
            rotateX: [0, 30],
            z: [100, 0, -200, -400],
            y: [120, -300, -600, -600], // Move text upwards
            scale: [1, 0.8, 0.5, 0.2], // Shrink text over time
            opacity: [1, 1, 1, 0.2, 0], // Fade out towards the end
        }, {
          duration: 42, // Increased duration for a slower scroll
          ease: 'linear',
          delay: 3
        });
      
        // Final animation for the logo
        const finalLogo = animate('#pyLogo', {
          top: '20vh',
          scale: 0.4,
        }, {
          duration: 20,
          delay: 0.3
        });
        await Promise.all([finalScroll, finalLogo])
        await animate('#pyLogo', {
          top: '15vh',
          scale: 0.2,
          opacity: 0,
        }, {
          duration: 2,
        });

        

        if (audioElement) {
            //(audioElement as HTMLAudioElement).pause(); // pause the audio
            //(audioElement as HTMLAudioElement).currentTime = 0; // pause the audio
            const fadeDuration = 200; // Duration of fade-out in milliseconds
            const intervalTime = 40; // Interval time in milliseconds
            const volumeStep = ((audioElement as HTMLAudioElement).volume / fadeDuration) * intervalTime; // Volume decrement per interval

            let fadeOutInterval = setInterval(() => {
            if ((audioElement as HTMLAudioElement).volume > 0) {
                (audioElement as HTMLAudioElement).volume = Math.max(0, (audioElement as HTMLAudioElement).volume - volumeStep); // Decrease volume
            } else {
                clearInterval(fadeOutInterval); // Stop the interval when volume is 0
                (audioElement as HTMLAudioElement).pause(); // Pause the (audioElement as HTMLAudioElement)
                (audioElement as HTMLAudioElement).currentTime = 0; // Reset the (audioElement as HTMLAudioElement) to the start
                (audioElement as HTMLAudioElement).volume = 1; // Restore volume for next playback
            }
            }, intervalTime);
        }
    };
    
    const woodChop = async () => {
        await animate('#mountain-backdrop', {
            x: '0%'
        }, {
            duration: 0.1,
        });
        animate('#mountain-backdrop', {
            opacity: 1
        }, {
            duration: 3,
        });
        await animate('#star-backdrop', {
            opacity: 0
        }, {
            duration: 3,
        });        

        animate('#tree', {
            x: '47vw',
            //bottom: '20px'
        }, {
            duration: 3,
            type: 'spring',
            bounce: 0.2
        });

        animate('#tree2', {
            x: '41vw',
            //bottom: '20px'
        }, {
            duration: 3,
            delay: 0.2,
            type: 'spring',
            bounce: 0.2
        });

        animate('#tree3', {
            x: '52vw',
            //bottom: '20px'
        }, {
            duration: 3,
            delay: 0.3,
            type: 'spring',
            bounce: 0.2
        });
    
        animate('#tree4', {
            x: '58vw',
        }, {
            duration: 3,
            delay: 0.2,
            type: 'spring',
            bounce: 0.2
        });

        animate('#lumberJackContainer', {
            top: 'calc(100vh - 80px)'
        }, {
            duration: 0.1,
        });
        animate('#lumberjackPush', {
            opacity: 0
        }, {
            duration: 0.1,
        });
        animate('#lumberjackWalk', {
            opacity: 1,
            scaleX: -1
        }, {
            duration: 0.1,
        });

        await animate('#tree5', {
            x: '36vw',
        }, {
            duration: 3,
            delay: 0.4,
            type: 'spring',
            bounce: 0.2
        });

        await animate('#lumberJackContainer', {
            left: '48vw',
        }, {
            duration: 5,
        });

        animate('#lumberjackWalk', {
            opacity: 0,
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackStill', {
            opacity: 1,
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackStill', {
            scaleX: 1,
        }, {
            duration: 0.1,
        });

        await animate('#lumberjackStill', {
            scaleX: 1,
        }, {
            duration: 0.3,
        });

        await animate([
            ['#lumberjackCut', {opacity: 1}],
            ['#lumberjackStill', { opacity: 0, }],
        ], {
            duration: 0.1,
        });

        await animate('#lumberjackCut', {
            opacity: 1,
        }, {
            duration: 0.1,
            delay: 2
        });

        await animate([
            ['#tree', { opacity: 0 }],
            ['#tree2', { opacity: 0 }],
            ['#tree3', { opacity: 0 }],
            ['#tree4', { opacity: 0 }],
            ['#tree5', { opacity: 0 }],
            ['#lumberJackContainer', { opacity: 0 }],
            ['#mountain-backdrop', { opacity: 0 }],
        ], {
            duration: 2.5,
        });
    }

    const reset = async () => {
        // Reset all elements to their initial positions and states
        await animate(
            [
                ['#lumberJackContainer', { left: '50vw', top: '50vh', opacity: 0 }],
                ['#black-backdrop', { opacity: 0 }],
                ['#lumberjackStill', { opacity: 0, scaleX: 1 }],
                ['#lumberjackRun', { opacity: 0, scaleX: 1 }],
                ['#lumberjackPush', { opacity: 0, scaleX: 1 }],
                ['#lumberjackWalk', { opacity: 0, scaleX: 1 }],
                ['#lumberjackCut', { opacity: 0 }],
                ['#star-backdrop', { x: '0%', opacity: 0 }],
                ['#text-crawl-container-outer', { opacity: 0, y: window.innerHeight + 200 }],
                ['#text-crawl-container-inner', { rotateX: 0, z: 0, y: 120, scale: 1, opacity: 1 }],
                ['#pyLogo', { left: '50vw', x: '-50%', top: '90%', scale: 1.4, opacity: 0 }],
                ['#mountain-backdrop', { x: '0%', opacity: 0 }],
                ['#tree', { x: '47vw', opacity: 0 }],
                ['#tree2', { x: '41vw', opacity: 0 }],
                ['#tree3', { x: '52vw', opacity: 0 }],
                ['#tree4', { x: '58vw', opacity: 0 }],
                ['#tree5', { x: '36vw', opacity: 0 }],
            ],
            { duration: 0.1 } // Very quick reset
        );
    
        // Restore visibility
        await animate(
            [
                ['#lumberJackContainer', { opacity: 1 }],
                ['#black-backdrop', { opacity: 0 }],
            ],
            { duration: 0.1 }
        );
    };

    const startAnimation = async () => {
        await initialize()

        await pullStars()

        await scrollText();

        await woodChop();

        await reset();

        setKey(key+1);
    }

    return {ref, startAnimation, key}
}