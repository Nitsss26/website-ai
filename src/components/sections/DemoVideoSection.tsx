"use client";


import { motion } from "motion/react";

export function DemoVideoSection() {
    return (
        <section id="Demo">
            <div className="relative mx-auto bg-[#020617] flex max-w-7xl flex-col items-center justify-center">

                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold text-slate-700 md:text-3xl lg:text-4xl dark:text-slate-300">
                    {"Watch the demo video"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="w-full relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                >
                    Learn how to set up your development environment, create your first AI model, and deploy it on the platform.
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >

                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1.2,
                    }}
                    className="relative w-[90%] md:w-[80%] z-10 mt-5 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                >
                    <div className="w-[100%] overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                        <iframe className="xl:w-[100%] xl:h-[500px] w-[100%] h-[200px]" src="https://www.youtube.com/embed/qYNweeDHiyU?si=3dY9f2cQQo37AYwo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
