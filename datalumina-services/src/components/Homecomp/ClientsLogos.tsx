'use client'

import { motion } from 'framer-motion';

const logos = [
    "https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg",
    "https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg",
    "https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg",
    "https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg",
    "https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg",
];

const ClientsLogos: React.FC = () => {
    return (
        <section id="client-logos" className="flex w-full max-sm:hidden">
            <div className="relative flex h-[90px] w-full items-center overflow-hidden bg-black lg:h-[150px]">
              {/* Gradient Fade Effects */}
<div className="absolute left-0 top-0 z-10 h-full w-[25%] bg-gradient-to-r from-black from-[25%] pointer-events-none"></div>
<div className="absolute right-0 top-0 z-10 h-full w-[25%] bg-gradient-to-l from-black from-[25%] pointer-events-none"></div>
                {/* Scrolling Logos */}
                <motion.div
                    className="flex min-w-max gap-8"
                    animate={{ x: ["0%", "-30%"] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                >
                    {/* Repeat logos multiple times for a seamless loop */}
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <img key={i} src={logo} alt="Client Logo" className="h-[70%] w-[20%]" />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsLogos;