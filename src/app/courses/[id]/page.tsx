'use client'
import FooterSection from "@/components/sections/FooterSection";
import NavSection from "@/components/sections/NavSection";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { CourseList } from "../page";
import { IconClockHour3, IconUsersGroup, IconStarFilled, IconGrowth, IconBriefcase, IconCertificate, IconDeviceTvOld, IconHeadset, IconListDetails, IconMap, IconRouteSquare, IconStar } from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
// import Image from "next/image";
// import CountUp from "react-countup";
import CourseReviewsSection from "@/components/sections/CourseReviewsSection";
import axios from "axios";
import { useParams } from "next/navigation";

interface Syllabus {
    week: string,
    topic: string,
    objectives: string[],
}

interface Course {
    title: string;
    description: string;
    duration_weeks: string;
    students_enrolled: string;
    rating: string;
    syllabus: Syllabus[];
}
export default function Page() {
    const [course, setCourse] = useState<Course>()
    const [loading, setLoading] = useState(false)
    const params = useParams();
    const rawTitle = params.id as string;
    const title = decodeURIComponent(rawTitle)
    // console.log("title:", typeof(title)  );

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true)
            try {
                const response = await axios.post(`/api/courses/${title}`, { title })
                const courses = response.data
                // console.log("Fetched courses:", courses)

                setCourse(courses)
            } catch (err) {
                console.error("Failed to fetch courses:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [rawTitle,title])

    return (
        <div className="w-full h-full flex bg-[#020b1a] tracking-tight justify-center flex-col items-center">
            <NavSection />
            {loading ? (
                <div className="w-full h-screen flex justify-center items-center bg-[#020b1a]">
                    <div className="text-white text-2xl">Loading...</div>
                </div>
            ) : (
                <>
                    <div className="w-full flex mt-[120px] justify-between items-center flex-col">

                        <h4 className="text-3xl lg:text-5xl lg:leading-tight text-center  font-medium text-black dark:text-white">
                            {course?.title || "Course Title"}
                        </h4>

                        <p className="text-sm lg:text-base w-full md:w-[50%] my-4 mx-auto  text-neutral-500 text-center">
                            Dive into our comprehensive courses designed to help you master AI and Machine Learning. Whether you&apos;re a beginner or an expert, we have something for everyone.
                        </p>
                        <FeaturesContent course = {course}/>
                    </div>

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
                        className="relative w-[90%] md:w-[80%] z-1000 mt-10 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Left Side - Video */}
                            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                                <iframe
                            className="w-full h-[200px] md:h-[300px] xl:h-[400px]"
                            src="https://www.youtube.com/embed/qYNweeDHiyU?si=3dY9f2cQQo37AYwo"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                            </div>

                            {/* Right Side - Course Info */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-4">
                                <h1 className="text-3xl lg:text-5xl lg:leading-tight  font-medium text-black dark:text-white">Course Overview</h1>
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    Master the core principles of Physics, thoughtfully designed to align with competitive exam requirements and academic excellence. This course offers clear explanations, structured lessons, and practical problem-solving strategies to build deep understanding and confidence.

                                    Whether you&apos;re aiming for top ranks or a strong conceptual foundation, this course bridges theory and real-world application through guided practice and expert instruction.

                                </p>
                            </div>
                        </div>
                    </motion.div>


                    <CourseDescription description={course?.description} />
                    {/* <StatsSection /> */}
                    <Modules syllabus={course?.syllabus} />
                    {/* <Team /> */}
                    <CourseReviewsSection />
                    <Accordion />
                    <CourseBenefits />
                    <FooterSection />
                    {/* <div className="absolute inset-0 z-0 w-screen">
                        <Canvas>
                            <Stars radius={100} count={2500} factor={3} fade speed={1} />
                        </Canvas>
                    </div> */}
                </>
            )}
        </div>
    );
}


export const FeaturesContent = ({course}:{course:Course | undefined}) => {
    return (
        <div className="flex flex-row items-center justify-center flex-wrap w-full gap-4 mt-4">
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold tracking-tight text-white">
                    <IconClockHour3 stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    {course?.duration_weeks || "0"} weeks
                </p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconUsersGroup stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    {course?.students_enrolled || "0"}+ Students Enrolled
                </p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h4 className="text-base font-semibold pr-2 tracking-tight text-white">
                    <IconStarFilled stroke={2} />
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-300 max-w-md text-center">
                    {course?.rating || "0"}/5
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

function CourseDescription({description}: {description?: string}) {
    return (
        <div className="flex flex-col items-start justify-center flex-wrap w-[80%] gap-4 mt-4">
            <p className="text-sm text-start text-neutral-500 max-w-md ">Course Description</p>
            {/* long paragraph */}
            <p className="text-sm text-start text-white">
                {description || "Course description"}
            </p>
        </div>
    )
}

function CourseBenefits() {
    const features = [
        {
            title: "Interactive Learning",
            description:
                "We have a lot of interactive learning modules to help you learn.",
            icon: <IconDeviceTvOld stroke={2} />,
        },
        {
            title: "Real World Projects",
            description:
                "We have a lot of real world projects to help you learn.",
            icon: <IconListDetails stroke={2} />,
        },
        {
            title: "Personalized Paths",
            description:
                "We have personalized learning paths to help you learn.",
            icon: <IconRouteSquare stroke={2} />,
        },
        {
            title: "Mentorship/Community Support",
            description: "We have a lot of mentors and community support to help you learn.",
            icon: <IconMap stroke={2} />,
        },
        {
            title: "Industry Certifications",
            description: "We have a lot of industry certifications to help you learn.",
            icon: <IconCertificate stroke={2} />,
        },
        {
            title: "24/7 Customer Support",
            description:
                "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <IconHeadset stroke={2} />,
        },
        {
            title: "4.8/5 Rating",
            description:
                "Average rating of our courses by our users. We are working on improving it.",
            icon: <IconStar stroke={2} />,
        },
        {
            title: "Job Ready",
            description: "Get job ready with our courses and projects.",
            icon: <IconBriefcase stroke={2} />,
        },
    ];
    return (
        <section id="Features" className="bg-[#020617]">
            <div className="bg-gradient-to-b bg-[#020617]">
                <div className="text-center text-3xl font-bold text-neutral-100 py-10">
                    Why Choose This Course?
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10">

                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};


const Accordion = () => {
    return (
        <section className="w-[80%] z-20 overflow-hidden  pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold  text-gray-500">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color text-gray-600">
                                Our courses are thoughtfully designed to provide clarity, structure, and real-world relevance, helping learners build strong foundations and confidently achieve their goals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-0">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#3056D3" stop-opacity="0.36" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};



interface AccordionItemProps {
    header: string;
    text: string;
}

const AccordionItem = ({ header, text }: AccordionItemProps) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="mb-8 w-full rounded-lg border-[0.1px] border-gray-400 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={handleToggle}
            >
                <div className="flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-white">
                    <svg
                        className={`fill-white stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-white">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-gray-300">
                    {text}
                </p>
            </div>
        </div>
    );
};




// const Team = () => {
//     return (
//         <section className="pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[60px]">
//             <div className="container">
//                 <div className="flex flex-wrap">
//                     <div className="w-full">
//                         <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//                             <span className="mb-2 block text-lg font-semibold text-gray-200">
//                                 Educators
//                             </span>
//                             <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
//                                 Our Awesome Team
//                             </h2>
//                             <p className="text-base text-gray-300">
//                                 There are many variations of passages of Lorem Ipsum available
//                                 but the majority have suffered alteration in some form.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-4">
//                     <TeamMemberCard
//                         name="Coriss Ambady"
//                         jobTitle="Web Developer"
//                         imageSrc="https://cdn.tailgrids.com/assets/images/marketing/team/team-01/image-03.jpg"
//                     />
//                     <TeamMemberCard
//                         name="Coriss Ambady"
//                         jobTitle="Web Developer"
//                         imageSrc="https://cdn.tailgrids.com/assets/images/marketing/team/team-01/image-02.jpg"
//                     />
//                     <TeamMemberCard
//                         name="Coriss Ambady"
//                         jobTitle="Web Developer"
//                         imageSrc="https://cdn.tailgrids.com/assets/images/marketing/team/team-01/image-01.jpg"
//                     />
//                     <TeamMemberCard
//                         name="Coriss Ambady"
//                         jobTitle="Web Developer"
//                         imageSrc="https://cdn.tailgrids.com/assets/images/marketing/team/team-01/image-04.jpg"
//                     />
//                 </div>


//             </div>
//         </section>
//     );
// };


// interface TeamMemberCardProps {
//     imageSrc: string;
//     name: string;
//     jobTitle: string;
// }

// const TeamMemberCard = ({ imageSrc, name, jobTitle }: TeamMemberCardProps) => (
//     <div className="w-full px-4 md:w-1/2 xl:w-1/4">
//         <div className="mb-10 w-full">
//             <div className="relative overflow-hidden rounded-lg">
//                 <Image src={imageSrc} alt={name} className="w-full" width={400} height={400} />
//                 <div className="absolute bottom-5 left-0 w-full text-center">
//                     <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
//                         <h3 className="text-base font-semibold text-[#020b1a]">
//                             {name}
//                         </h3>
//                         <p className="text-xs text-body-color dark:text-dark-6">
//                             {jobTitle}
//                         </p>
//                         <div>
//                             <span className="absolute bottom-0 left-0">
//                                 <svg
//                                     width={61}
//                                     height={30}
//                                     viewBox="0 0 61 30"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <circle
//                                         cx={16}
//                                         cy={45}
//                                         r={45}
//                                         fill="#13C296"
//                                         fillOpacity="0.11"
//                                     />
//                                 </svg>
//                             </span>
//                             <span className="absolute right-0 top-0">
//                                 <svg
//                                     width={20}
//                                     height={25}
//                                     viewBox="0 0 20 25"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <circle
//                                         cx="0.706257"
//                                         cy="24.3533"
//                                         r="0.646687"
//                                         transform="rotate(-90 0.706257 24.3533)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="6.39669"
//                                         cy="24.3533"
//                                         r="0.646687"
//                                         transform="rotate(-90 6.39669 24.3533)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="12.0881"
//                                         cy="24.3533"
//                                         r="0.646687"
//                                         transform="rotate(-90 12.0881 24.3533)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="17.7785"
//                                         cy="24.3533"
//                                         r="0.646687"
//                                         transform="rotate(-90 17.7785 24.3533)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="0.706257"
//                                         cy="18.6624"
//                                         r="0.646687"
//                                         transform="rotate(-90 0.706257 18.6624)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="6.39669"
//                                         cy="18.6624"
//                                         r="0.646687"
//                                         transform="rotate(-90 6.39669 18.6624)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="12.0881"
//                                         cy="18.6624"
//                                         r="0.646687"
//                                         transform="rotate(-90 12.0881 18.6624)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="17.7785"
//                                         cy="18.6624"
//                                         r="0.646687"
//                                         transform="rotate(-90 17.7785 18.6624)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="0.706257"
//                                         cy="12.9717"
//                                         r="0.646687"
//                                         transform="rotate(-90 0.706257 12.9717)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="6.39669"
//                                         cy="12.9717"
//                                         r="0.646687"
//                                         transform="rotate(-90 6.39669 12.9717)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="12.0881"
//                                         cy="12.9717"
//                                         r="0.646687"
//                                         transform="rotate(-90 12.0881 12.9717)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="17.7785"
//                                         cy="12.9717"
//                                         r="0.646687"
//                                         transform="rotate(-90 17.7785 12.9717)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="0.706257"
//                                         cy="7.28077"
//                                         r="0.646687"
//                                         transform="rotate(-90 0.706257 7.28077)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="6.39669"
//                                         cy="7.28077"
//                                         r="0.646687"
//                                         transform="rotate(-90 6.39669 7.28077)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="12.0881"
//                                         cy="7.28077"
//                                         r="0.646687"
//                                         transform="rotate(-90 12.0881 7.28077)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="17.7785"
//                                         cy="7.28077"
//                                         r="0.646687"
//                                         transform="rotate(-90 17.7785 7.28077)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="0.706257"
//                                         cy="1.58989"
//                                         r="0.646687"
//                                         transform="rotate(-90 0.706257 1.58989)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="6.39669"
//                                         cy="1.58989"
//                                         r="0.646687"
//                                         transform="rotate(-90 6.39669 1.58989)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="12.0881"
//                                         cy="1.58989"
//                                         r="0.646687"
//                                         transform="rotate(-90 12.0881 1.58989)"
//                                         fill="#3056D3"
//                                     />
//                                     <circle
//                                         cx="17.7785"
//                                         cy="1.58989"
//                                         r="0.646687"
//                                         transform="rotate(-90 17.7785 1.58989)"
//                                         fill="#3056D3"
//                                     />
//                                 </svg>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );






// const StatsSection = () => {
//     return (
//         <section className=" py-20 lg:py-[120px] dark:bg-dark ]">
//             <div className="max-w-5xl mx-auto text-center px-4">
//                 <h2 className="text-xl md:text-2xl font-medium text-gray-100">
//                     BUILD TRUST WITH YOUR USERS WITH A{' '}
//                     <span className="text-indigo-600">BEAUTIFUL LANDING PAGE</span>
//                 </h2>

//                 <div className="mt-12 flex flex-wrap justify-center gap-8 text-center items-center">
//                     {/* Stat 1 */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         <h3 className="text-5xl font-bold text-white">
//                             <CountUp end={45} suffix="%" duration={2} />
//                         </h3>
//                         <p className="mt-4 text-gray-200">Lorem ipsum dolor sit amet consectetur</p>
//                     </motion.div>


//                     {/* Stat 2 */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                     >
//                         <h3 className="text-5xl font-bold text-white">
//                             <CountUp end={15500} separator="," suffix="+" duration={2} />
//                         </h3>
//                         <p className="mt-4 text-gray-200">Lorem ipsum dolor sit amet consectetur</p>
//                     </motion.div>

//                     {/* Stat 3 */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6 }}
//                     >
//                         <h3 className="text-5xl font-bold text-white">
//                             <CountUp end={20} suffix="B+" duration={2.5} />
//                         </h3>
//                         <p className="mt-4 text-gray-200">Lorem ipsum dolor sit amet consectetur</p>
//                     </motion.div>
//                     {/* Stat 3 */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6 }}
//                     >
//                         <h3 className="text-5xl font-bold text-white">
//                             <CountUp end={100000} suffix="+" duration={2.5} />
//                         </h3>
//                         <p className="mt-4 text-gray-200">Lorem ipsum dolor sit amet consectetur</p>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };



const Modules = ({ syllabus }: { syllabus?: Syllabus[] }) => {
    return (
        <section className="w-[80%] z-20 overflow-hidden  pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full ">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">

                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                                Modules
                            </h2>
                            {/* <p className="text-base text-body-color text-gray-600">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {syllabus && syllabus.length > 0 ? (
                        syllabus.map((item, idx) => (
                            <ModuleLession key={idx} syllabus={item} />
                        ))
                    ) : (
                        <div className="text-white">No modules available.</div>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-0">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                            <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};





const ModuleLession = ({ syllabus }: { syllabus: Syllabus }) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setActive(!active);
    };

    return (
        <div className="mb-8 w-full rounded-lg border-b-[0.1px] border-gray-400 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={handleToggle}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-white">
                    <svg
                        className={`fill-white stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>
                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-white">
                        {syllabus.topic}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <ol className="list-disc pl-5" type="1">
                    {syllabus.objectives && syllabus.objectives.length > 0 ? (
                        syllabus.objectives.map((objective, idx) => (
                            <li className="text-white" key={idx}>
                                {objective}
                            </li>
                        ))
                    ) : (
                        <li className="text-white">No objectives listed.</li>
                    )}
                </ol>
            </div>
        </div>
    );
};
