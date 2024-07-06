import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            {/* 
                -top-40 
                Negative Margin:
                Moving an element upwards, creating overlap with the element above it.
                Absolute/Relative Positioning:
                Adjusting an absolutely or relatively positioned element to be placed higher than its usual location.

                md:-left-32
                Negative Positioning:
                Moving an element to the left, relative to its normal position, on medium and larger screens.

                h-screen
                Full-Height Sections:
                Creating sections that span the full height of the viewport for immersive designs.
                Modals and Overlays:
                Ensuring that modals or overlays cover the entire screen.
                Hero Sections:
                Designing hero sections that occupy the full screen to make a strong visual impact.
            */}
            {/*
                UI: Spotlights
                Link: https://ui.aceternity.com/components/spotlight
            */}
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            {/* 
                h-[80vh]: Sets the height of the element to 80% of the viewport height.
                w-[50vw]: Sets the width of the element to 50% of the viewport width.
                top-10: Positions the element 2.5rem (40px) from the top of its containing block (assuming it is relatively or absolutely positioned).
                left-full: Positions the element 100% from the left of its containing block,
                    effectively placing it just outside the right edge of its container (assuming it is relatively or absolutely positioned).
            */}
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

            {/*
                UI: grid
                change bg color to bg-black-100 and reduce grid color from
                0.2 to 0.03
            */}
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // change the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                    bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
            {/* relative: Applies position: relative; to the element, allowing it to be positioned relative to its normal position. */}
            <div className="flex justify-center relative my-20 z-10">
                {/* 
                    max-w-[89vw]: Sets the maximum width of the element to 89% of the viewport width.
                    md:max-w-2xl: Sets the maximum width of the element to 42rem (672px) on medium screens and above.
                    lg:max-w-[60vw]: Sets the maximum width of the element to 60% of the viewport width on large screens and above.
                    flex: Applies display: flex; to the element, enabling flexbox layout.
                    flex-col: Arranges the flex items in a column (vertical direction).
                    items-center: Centers the flex items along the cross axis (horizontally in a column layout).
                    justify-center: Centers the flex items along the main axis (vertically in a column layout).
                */}
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    {/* 
                        tracking-widest: Applies the widest letter-spacing available in Tailwind CSS.
                        text-xs: Sets the font size to extra small.
                    */}
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </p>
                    {/**
                        Link: https://ui.aceternity.com/components/text-generate-effect
                        change md:text-6xl, add more responsive code
                    */}
                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero