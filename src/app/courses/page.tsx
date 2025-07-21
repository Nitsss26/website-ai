/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import FooterSection from "@/components/sections/FooterSection";
import NavSection from "@/components/sections/NavSection";
import { cn } from "@/lib/utils";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import { IconClockHour3, IconUsersGroup, IconBrandYoutubeFilled, IconGrowth, IconStarFilled } from "@tabler/icons-react";
import axios from "axios";
import createGlobe from "cobe";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";


export default function Courses() {

    return (
        <div className="w-full h-full flex bg-[#020b1a]  justify-center flex-col items-center">
            <NavSection />
            <div className="relative flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        Explore Our Courses
                    </h4>

                    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Dive into our comprehensive courses designed to help you master AI and Machine Learning. Whether you&apos;re a beginner or an expert, we have something for everyone.
                    </p>
                </div>
            </div>


            <CourseList />


            <FooterSection />
            {/* <div className="absolute inset-0 z-0 w-full h-full">
                <Canvas>
                    <Stars radius={100} count={2500} factor={3} fade speed={1} />
                </Canvas>
            </div> */}

        </div>
    );
}


export function CourseList() {
        const [features, setFeatures] = useState<any[]>([])
      const [loading, setLoading] = useState(true)
    
        useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/courses?all=true')
        const courses = response.data.courses

        const transformed = courses.map((course: any, index: number) => ({
          title: course.title,
          description: course.description,
          skeleton: SkeletonImage(`/course${(index % 4) + 1}.png`), // cycle 1-4
          className: [
            "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
            "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
            "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
            "col-span-1 lg:col-span-3 border-b lg:border-none",
          ][index % 4], // repeat classes in the same order
        }))

        setFeatures(transformed)
      } catch (err) {
        console.error("Failed to fetch courses:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

//   console.log("Features:", features);
    // const features = [
    //     {
    //         title: "Introduction to Machine Learning",
    //         description:
    //             "Learn the fundamentals of Machine Learning. Get started with the basics of Machine Learning.",
    //         skeleton: SkeletonImage('/course1.png'),
    //         className:
    //             "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    //     },
    //     {
    //         title: "Deep Learning with Neural Networks",
    //         description:
    //             "Dive deep into the world of Neural Networks. Understand how to build and train deep learning models.",
    //         skeleton: SkeletonImage("/course2.png"),
    //         className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    //     },
    //     {
    //         title: "Machine Learning for Beginners",
    //         description:
    //             "A beginner's guide to Machine Learning. Learn the basics of Machine Learning and how to apply it.",
    //         skeleton: SkeletonImage('/course3.png'),
    //         className:
    //             "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    //     },
    //     {
    //         title: "Scalable Model Deployment",
    //         description:
    //             "Learn how to deploy Machine Learning models at scale. Understand the best practices for deploying models in production.",
    //         skeleton: SkeletonImage('/course4.png'),
    //         className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    //     },
    //     {
    //         title: "Machine Learning for Professionals",
    //         description:
    //             "A professional's guide to Machine Learning. Learn advanced techniques and best practices for Machine Learning.",
    //         skeleton: SkeletonImage('/course1.png'),
    //         className:
    //             "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    //     },
    //     {
    //         title: "Machine Learning for Entrepreneurs",
    //         description:
    //             "A entrepreneur's guide to Machine Learning. Learn how to apply Machine Learning to your business.",
    //         skeleton: SkeletonImage('/course2.png'),
    //         className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    //     },
    //     {
    //         title: "Machine Learning for Researchers",
    //         description:
    //             "A researcher's guide to Machine Learning. Learn how to apply Machine Learning to your research.",
    //         skeleton: SkeletonImage('/course3.png'),
    //         className:
    //             "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    //     }
    // ];
    
    return (
        <section id="courses">
            <div className="relative bg-[#020b1a] flex justify-between items-center flex-col z-20  max-w-7xl mx-auto">
                <div className="relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-6 mt-0 xl:border rounded-md dark:border-neutral-800">
                        {loading?
                        "Loading ... " 
                        :
                        
                        features.map((feature) => (
                            <Link key={feature.title} className={feature.className} href={`/courses/${feature.title}`}>
                                <FeatureCard className={feature.className}>
                                    <FeatureTitle>{feature.title}</FeatureTitle>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                    <FeaturesContent />
                                    {feature.skeleton}
                                </FeatureCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 hover:bg-gradient-to-br cursor-pointer from-[#34a853] to-[#009688] relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl font-bold mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const FeaturesContent = () => {
    return (
        <div className="flex flex-row items-center justify-start flex-wrap w-full gap-4 mt-4 mb-4">
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold tracking-tight pr-2 text-white">
                    <IconClockHour3 stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    8 weeks
                </p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconUsersGroup stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    1200+ Students Enrolled
                </p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconStarFilled stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    4.8/5
                </p>
            </div>

            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconGrowth stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    Intermediate
                </p>
            </div>

        </div>
    )
}




export const SkeletonImage = (url: string) => {
    return (
        <div className="relative flex my-8 mx-2 gap-10 h-[400px] md:h-[500px] group rounded-2xl">
            <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                    <Image
                        src={url}
                        alt="header"
                        width={600}
                        height={600}
                        className="h-full w-full aspect-square object-cover rounded-sm content-center"
                    />
                   
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
            target="__blank"
            className="relative flex gap-10  h-full group/image"
        >
            <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                    {/* TODO */}
                    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
                    <Image
                        src="https://assets.aceternity.com/fireship.jpg"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                    />
                </div>
            </div>
        </a>
    );
};

export const SkeletonTwo = () => {
    const images = [
        "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            {/* TODO */}
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width={500}
                            height={500}
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width={500}
                            height={500}
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};
