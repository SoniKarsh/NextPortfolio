import Hero from "@/components/Hero";

export default function Home() {
    return (
        // main tag is similar to div
        // flex justify-center -> Center it horizontally
        // items-center to center it vertically
        // flex-col to switch the orientation
        // Use flex-col to position flex items vertically
        // overflow-hidden to avoid scrollbars
        // mx-auto to give x / horizontal margin as auto
        // like margin-left and margin-right as auto
        // Tailwind built in sizing functionality for mobile responsiveness
        // sm:px-10 => Small, padding x(left and right as in horizontal axis) 10
        /*
          // 640 px and up then padding x 10
          @media (min-width: 640px) {
            .sm\:px-10 {
                padding-left: 2.5rem (40px);
                padding-right: 2.5rem (40px);
            }
          }
        */
        // px-5 for all other screen size
        <main className="relative bg-black-100 flex justify-center items-center
            flex-col overflow-hidden mx-auto sm:px-10">
            {/* 
                max-w-7xl
                Purpose: Sets the maximum width of an element.
                Value: This particular utility sets the maximum width to 80rem (1280px).
                Use Case: To limit the width of an element to ensure it does not stretch too wide on larger screens,
                maintaining a more readable and visually appealing layout.
                
                w-full
                Purpose: Sets the width of an element to 100% of its parent container.
                Value: The element will occupy the full width of its parent.

                Combined Use Case
                Using max-w-7xl w-full together ensures that an element will always fill the width of its parent container up to a maximum of 7xl (1280px).
                This is useful for responsive design, ensuring elements look good on all screen sizes.
            */}
            <div className="max-w-7xl w-full">
                <Hero />
            </div>
        </main>
    );
}
