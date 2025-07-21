import { cn } from "@/lib/utils";
import {
    IconRouteSquare,
    IconDeviceTvOld,
    IconListDetails,
    IconBriefcase,
    IconCertificate,
    IconHeadset,
    IconMap,
    IconStar,
} from "@tabler/icons-react";

export default function FeaturesSection() {
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
            icon:<IconMap stroke={2} />,
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
            <div className="bg-gradient-to-b bg-[#020617] " >
                <div className="text-center text-3xl font-bold text-neutral-100 py-10">
                    Why Choose EveryAI?
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">

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
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
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
