/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import { animate } from "motion";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import { useEffect, useState } from "react";
import axios from "axios";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";

export default function Page() {
    const COLORS_TOP = React.useMemo(() => ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"], []);
    const color = useMotionValue(COLORS_TOP[0]);
    
    
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [COLORS_TOP, color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{ backgroundImage }}
            className="w-full grid min-h-screen place-content-center overflow-hidden bg-gray-950 text-gray-200"
        >
            <motion.div
                style={{ border, boxShadow }}
                className="relative w-screen h-screen md:w-fit md:h-fit md:my-10 z-50 rounded-none md:rounded-2xl bg-gray-950/10 text-gray-50 md:transition-colors hover:bg-gray-950/50"
            >
                <SignupForm />
            </motion.div>

            {/* <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div> */}
        </motion.section>
    );
}

export function SignupForm() {
    const router = useRouter();
    const { setUserFromToken } = useAuth();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post("/api/auth/register", {
                email: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
            });

            const token = res.data.token;
            if (token) {
                localStorage.setItem("token", token);
            }
            setUserFromToken();
            setSuccess(res.data.message || "Registration successful");
            setLoading(false);
            setTimeout(() => {
                router.push("/"); 
            }, 2000);

        } catch (err: any) {
            setError(err.response?.data?.error || "Unexpected error occurred");
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="shadow-input w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Welcome to Learn AI
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Login to Learn AI if you can because we don&apos;t have a login flow
                yet
            </p>

            <form className="my-8 text-start" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                            id="firstName"
                            placeholder="Tyler"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                            id="lastName"
                            placeholder="Durden"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input
                        id="confirmPassword"
                        placeholder="••••••••"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

                <button
                    className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                <div className="flex items-center space-x-2">
                    <span>Already have an account?</span>
                    <Link
                        href="/login"
                        className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
                    >
                        {loading ? "Loading..." : "Login"}
                    </Link>
                </div>
            </form>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
);

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
