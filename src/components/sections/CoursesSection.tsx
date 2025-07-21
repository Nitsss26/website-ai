/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
// import { motion } from "motion/react";
import {
    // IconBrandYoutubeFilled,
    IconCertificate,
    IconClockHour3,
    IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";


export default function CoursesSection() {
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
    //     // {
    //     //     title: "AI-Powered Web Development",
    //     //     description:
    //     //         "Build dynamic web applications using AI tools. From backend logic to smart frontend UX—leverage the power of artificial intelligence.",
    //     //     skeleton: SkeletonImage('/course5.png'),
    //     //     className: "col-span-1 lg:col-span-6 dark:border-neutral-800",
    //     // },
    // ];
    const [features, setFeatures] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/courses?page=1&limit=4')
        const courses = response.data.courses
        console.log("Fetched courses:", courses)
        const transformed = courses.map((course: any, index: number) => ({
          title: course.title,
          description: course.description,
          duration:course.duration_weeks,
          students:course.students_enrolled,
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
    if (loading) {
        return (
            <section id="courses">
                <div className="relative bg-[#020b1a] flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                    <div className="px-8">
                        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                            Explore Our Courses
                        </h4>
                        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                            Loading courses...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="courses">
            <div className="relative bg-[#020b1a] flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        Explore Our Courses
                    </h4>

                    <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Dive into our comprehensive courses designed to help you master AI and Machine Learning. Whether you&apos;re a beginner or an expert, we have something for everyone.
                    </p>

                    <div className="relative w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                            {loading?
                            "Loading ..."
                            :
                            features.map((feature) => (
                                // <Link href={`/courses/${feature.title}`}>
                                <FeatureCard key={feature.title} className={feature.className}>
                                    <FeatureTitle>{feature.title}</FeatureTitle>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                    <FeaturesContent duration={feature.duration} students={feature.students}  />
                                    {feature.skeleton}
                                </FeatureCard>
                                // </Link>
                            ))} 
                        </div>
                    </div>
                    
                    <Link href={'/courses'} className="flex justify-center items-center">
                        <button className=" cursor-pointer w-60 mt-4 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 mx-auto">
                            Explore More Courses
                        </button>
                    </Link>
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
        <div className={cn(`p-4 sm:p-8 hover:bg-gradient-to-br from-[#34a853] to-[#009688] relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl font-bold mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500 font-normal dark:text-neutral-300 my-2">
            {children}
        </p>
    );
};

export const FeaturesContent = ({duration,students}:{duration:string, students:string}) => {
    return (
        <div className="flex flex-row items-center justify-start flex-wrap w-full gap-4 mt-4 mb-4">
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold tracking-tight pr-2 text-white">
                    <IconClockHour3 stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    {duration} weeks
                </p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconUsersGroup stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    {students}+ Students Enrolled
                </p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconCertificate stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    Certificate of Completion
                </p>
            </div>
        </div>
    );
};

export const SkeletonImage = (url: string) => {
    return (
        <div className="relative flex my-8 mx-2 gap-10 h-[400px] md:h-[500px] group rounded-2xl">
            <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
                <Image
                    src={url}
                    alt="Course preview"
                    width={600}
                    height={600}
                    className="h-full w-full aspect-square object-cover rounded-sm object-center"
                />
            </div>
            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
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
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
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
